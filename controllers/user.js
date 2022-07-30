let User = require('../models/user');

module.exports.register = function(req, res, next) {
    console.log(req.body);

    let user = new User(req.body);
    user.provider = 'local';
    console.log(user);

    user.save(user).then((data) => {
      res.status(200).send({ message: "User registered successfully!!" });
    }).catch((err) => {
      res.status(500).send({ message: "Error occurred while registering User!" });
    });
};