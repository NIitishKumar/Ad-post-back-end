const User = require("../Models/User");

exports.create = async (req, res) => {
  try {
    console.log(req.body);
    const mailExist = await User.findOne({ email: req.body.email });
    const numberExist = await User.findOne({ phone: req.body.phone });
    if (mailExist) {
      res
        .status(400)
        .json({ message: "User already Exist with this mail id !" });
      return;
    }
    if (numberExist) {
      res
        .status(400)
        .json({ message: "User already Exist with this mobile number !" });
      return;
    }
    const user = await User.create({ ...req.body });
    res.status(200).json({ message: "User created Success !", user });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Something went wrong !", err });
  }
};

exports.getUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ message: "User Found !", users });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong !", err });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ _id: id });
    res.status(200).json({ message: "User Found !", user });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong !", err });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      { $new: true }
    );
    res.status(200).json({ message: "User Updated !", user });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong !", err });
  }
};

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (user) {
      const checkPassword = await User.findOne({ password: password });

      if (checkPassword) {
        res.status(200).json({ message: "User found Success!" ,user});
      }
    }
    res.status(201).json({ message: "User not found !" });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong !", err });
  }
};
