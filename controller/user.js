const User = require("../models/user");

exports.list = async (req, res) => {
  try {
    const userList = await User.find({}).exec();
    res.send(userList);
  } catch (e) {
    console.log(e);
    res.status(500).send("Server error");
  }
};

exports.read = async (req, res) => {
  try {
    const userId = req.params.id;
    const userRed = await User.findOne({ _id: userId }).exec();
    res.send(userRed);
  } catch (e) {
    console.log(e);
    res.status(500).send("Server error");
  }
};

exports.create = async (req, res) => {
  try {
    const userCreated = await User(req.body).save();
    res.send(userCreated);
  } catch (e) {
    console.log(e);
    res.status(500).send("Server error");
  }
};

exports.update = async (req, res) => {
  try {
    const userId = req.params.id;
    const userUpdated = await User.findOneAndUpdate({ _id: userId }, req.body, {
      new: true,
    }).exec();

    res.send(userUpdated);
  } catch (e) {
    console.log(e);
    res.status(500).send("Server error");
  }
};

exports.remove = async (req, res) => {
  try {
    const userId = req.params.id;
    const userRemoved = await User.findOneAndDelete({ _id: userId }).exec();

    res.send(userRemoved);
  } catch (e) {
    console.log(e);
    res.status(500).send("Server error");
  }
};
