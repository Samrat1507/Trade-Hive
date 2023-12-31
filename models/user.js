import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  credits: { type: Number, default: 100 },
  expert: { type: Date },
  holdings: {
    type: Map,
    default: {},
  },
  credit: {
    type: Number,
    default: 0,
  },
  debit: {
    type: Number,
    default: 0,
  },
  expertBought: {
    type: Boolean,
    default: false,
  },
  dateExpertBought: {
    type: Date,
  },
});

userSchema.pre("save", async function (next) {
  next();
});

Object.keys(mongoose.models).forEach((model) => {
  delete mongoose.models[model];
}); // this prevents the Model Reloading Error

var User = mongoose.model("User", userSchema);

export default User;
