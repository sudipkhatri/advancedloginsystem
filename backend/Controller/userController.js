import User from "../Models/userSchema.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array() });
  }

  const { email, name, password } = req.body;

  try {
    let user = await User.findOne({ email });
    const hashPassword = bcrypt.hashSync(password, 10);
    if (user) {
      return res.status(400).json({ message: "user already exist!" });
    }
    user = new User({
      email,
      name,
      password: hashPassword,
    });
    await user.save();
    const token = jwt.sign(
      { userID: user._id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );
    res.cookie("auth_token", token, {
      httpOnly: true, //it means the cookie only available in http and not https
      secure: false,//process.env.NODE_ENV === "production", //for local host it should be false
      maxAge: 86400000,
      //expiresIn: new Date(Date.now() + 1000 * 30), //30s
    });
    return res.status(201).json({ message: "user registration success" });
  } catch (error) {
    return res.status(500).json({ message: "Something Went Wrong!" });
  }
};

export const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array() });
  }
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    const userPass = user.password;
    const isMatched = await bcrypt.compare(password, userPass);
    if (!isMatched) {
      return res.status(400).json({ message: "Invalid credentials." }); //don't return invalid password hackers
    }
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );
    res.cookie("auth_token", token, {
      httpOnly: true, //it means the cookie only available in http and not https
      secure: false , //process.env.NODE_ENV === "production", //for local host it should be false
      maxAge: 86400000,
      //expiresIn: new Date(Date.now() + 1000 * 30), //30s
    });
    res.status(200).json({ token: token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong!" });
  }
};

export const logout = async (req, res) => {
  res.cookie("auth_token", " ", {
    expires: new Date(0),
  });
  return res.status(200).json({ message: "logged out succesfully" });
};

export const getUser = async (req, res) => {
  return res.status(200).json({ message: "user logged in" });
};

export const verifyToken = async (req,res,next) => {
  const token = await req.cookies["auth_token"];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized." });
  }
  try {
    const verify = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = (verify).userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized." });
  }
};

export const getInfo = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId).select("-password");
    if(!user){
      return res.status(404).json({message:"User not found."})
    }
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
