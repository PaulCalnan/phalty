const mongoose = require("mongoose");
const { v1: uuidv1 } = require("uuid");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  plate: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  hashed_password: {
    type: String,
    required: true
  },
  salt: String,
  created: {
    type: Date,
    default: Date.now
  },
  updated: Date,
  photo: {
    data: Buffer,
    contentType: String
  },
  about: {
    type: String,
    trim: true
  }
});

// Virtual fields are additional fields for a given model.
// Their values can be set manually or automatically with defined functionality.
// Keep in mind virtual properties (password) don't persist in the Database.
// They only exist logically and are not written to the documents collection.

// virtual field
userSchema
  .virtual("password")
  .set(function(password){
    //create temp variable called hashed_password
    // underscore convention means private variable
    this._password = password;
    // generate a timestamp (uuid version one from npm documentation)
    this.salt = uuidv1();
    // encrypt _password
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function() {
    return this._password;
  });

// methods
userSchema.methods = {
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password
  },
  // using crypto built into node instead of bcrypt
  encryptPassword: function(password) {
    if(!password) return "";
    try {
      return crypto
                .createHmac('sha1', this.salt)
                .update(password)
                .digest('hex');
    } catch (err) {
        return "";
    }
  }
};

module.exports = mongoose.model("User", userSchema);
