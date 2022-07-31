let UserModel = require('../models/user');
let passport = require('passport');

let jwt = require('jsonwebtoken');
let config = require('../config/config');

module.exports.register = function(req, res, next) {
    console.log(req.body);
    
    let user = new UserModel(req.body);
    user.provider = 'local';
    console.log(user);

    user.save(user).then((data) => {
      res.status(200).send({ message: "User registered successfully!!" });
    }).catch((err) => {
      res.status(500).send({ message: "Error occurred while registering User!" });
    });
};


module.exports.login = function(req, res, next){
  passport.authenticate(
    'login',
  async (err, user, info) => {
    try {
      if (err || !user) {
        return res.status(400).json(
            { 
              success: false, 
              message: err || info.message
            }
          );
      }
  
      req.login(
          user,
          { session: false },
          async (error) => {
            if (error) {
              return next(error);
            }

            // Generating the JWT token.
            const payload = 
              { 
                id: user._id, 
                email: user.email 
              };
            const token = jwt.sign(
              { 
                payload: payload
              }, 
              config.SECRETKEY, 
              { 
                algorithm: 'HS512', 
                expiresIn: "20min"
              }
            );
    
            return res.json(
              { 
                success: true, 
                token: token 
              }
            );
          }
        );
      } catch (error) {
        // return next(error);
        console.log(error);
        return res.status(400).json(
          { 
            success: false, 
            message: getErrorMessage(error)
          });
      }
    }
  )(req, res, next);
}

function getErrorMessage(err) {
  console.log(err);
  let message = '';

  if (err.message) {
    message = err.message;
  }
  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = 'Email already exists';
        break;
      default:
        message = 'Something went wrong';
    }
  } 
  if (err.errors) {
    for (let errName in err.errors) {
        if (err.errors[errName].message) 
        message = err.errors[errName].message;
    }
  }

  return message;
};