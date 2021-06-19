const {check} = require("express-validator");
exports.createPostValidator = [
  //title
  check("title", "Write a title").notEmpty(),
  check("title", "Title must be between 4 and 150 characters").isLength({
    min: 4,
    max: 150
  }),
  //body
  check("body", "Write a body").notEmpty(),
  check("body", "Body must be between 4 and 2000 characters").isLength({
    min: 4,
    max: 2000
  })
]

exports.userSignupValidator = [
  //rego plate
  check("plate", "Rego plate is required").notEmpty(),
  check("plate", "Rego plate must be between 1 and 8 characters").isLength({
    min: 1,
    max: 8
  }),
  //email
  check("email", "Please enter a valid email address")
  .notEmpty()
  .matches(/.+\@.+\..+/)
  .withMessage("Email must contain @")
  .isLength({
    min: 3,
    max: 200
  }),
  check("password", "Password is required").notEmpty(),
  check("password")
  .isLength({min: 6})
  .withMessage("Password must contain at least 6 characters")
  .matches(/\d/)
  .withMessage("Password must contain a number")
]
