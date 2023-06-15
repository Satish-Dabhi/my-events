const mongoose = require('mongoose');

let u_schema = new mongoose.Schema(
  {
    // _id: mongoose.Schema.Types.ObjectId,
    email: String,
    name: String,
    password: String,
    otpCreateTime: Date,
    otp: String,
    verified: Boolean
  },
  {
    versionKey: false,
  }
);

const userSchema = mongoose.model('user', u_schema);

module.exports = {
  userSchema: userSchema,
};
