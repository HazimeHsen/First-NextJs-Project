import mongoose from "mongoose";

const { Schema } = mongoose;
const userShcema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
let User;

try {
  // Trying to get existing model to avoid OverwriteModelError
  User = mongoose.model("User");
} catch {
  // Define the model only if it doesn't exist
  User = mongoose.model("User", userShcema);
}

export { User };
