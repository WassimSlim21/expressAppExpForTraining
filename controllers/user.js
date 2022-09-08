var User = require("../models/user");
exports.addUser = (req, res, next) => {
  var user = new User(req.body);

  user
    .save()
    .then((data) => {
      return res.status(201).json({
        success: true,
        msg: "a User created",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(403).json({ err: err });
    });
};
exports.addUsers = (req, res, next) => {
  User.insertMany(req.body)
    .then((data) => {
      return res.status(201).json({
        success: true,
        msg: "Users created",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(403).json({ err: err });
    });
};
exports.getUser = (req, res, next) => {
  User.find()
    .then((data) => {
      return res.status(200).json({
        success: true,
        documents: data.length,
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(404).json({ err: err });
    });
};
