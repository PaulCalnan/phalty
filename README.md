# Final General Assembly Project
# Phalty - A place where cars can talk!

A social application where users sign up as their vehicle.

Users sign up using their vehicle registration plates, and then can communicate with other cars by simply remembering the numberplate of another vehicle.

For example, someone witnesses another persons car involved in an accident.
That user can note down the plate and use the app to forward the info to the owner, just like putting a note under a windscreen wiper.

This web application is live, but far from finished.
Currently, the only features working are...
Sign Up, Sign In, Create Post, Delete/Edit Post, Delete/Edit User.

Both the front end and back end API are deployed on Digital Ocean.
- [Digital Ocean](https://www.digitalocean.com/)

Phalty still needs the following to be implemented...

### Future features marked if implemented:

- [ ]  User comments on posts (implemented in back end but not in front)
- [ ]  Search Posts by User
- [ ]  Regex validations for user registration plate
- [ ]  Pagination
- [ ]  Further Styling
- [ ]  Admin user for front and back

#### Built with a MERN stack:

 - MongoDB
 - Express
 - React
 - Node
 - Material Design Bootstrap

#### Known Bugs:

 Some redirects not firing.
 For example, user update page on click should redirect to updated post,
 instead remains stuck on "loading..." feature.
 Refreshing homepage shows user update has been received by backend.
 npm package react-router-dom is responsible for routes and uses the redirect method redirectToProfile.
 Some of the code responsible for redirect...

 ```javascript
 update(userId, token, this.userData).then(data => {
        if(data.error) this.setState({ error: data.error });
        else
        updateUser(data, () => {
          this.setState({redirectToProfile: true});
        });
      });
 ```
 This will be corrected during further feature implementations...
##

![app demo](/phalty-screenshot.png)


## Requirements

- Internet browser - Preferably Chrome.
- MongoDB server set to localhost 8080 by default for backend
- Front end can be served locally on localhost 3000

## Installation

```
$ git clone https://github.com/PaulCalnan/phalty-backend.git
$ git clone https://github.com/PaulCalnan/phalty-frontend.git
$ cd into phalty project
$ npm install
```

[Or try it right now here!.. ](http://161.35.112.143/)

[Backend API routes can be seen here.. ](http://161.35.112.143/api)


## Whr to from here?

This current version will be re-built and further refined into a
react native version that will have further features like maps with pin.
