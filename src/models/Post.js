import mongoose from "mongoose";

const { Schema } = mongoose;
const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});
let Post;

try {
  // Trying to get existing model to avoid OverwriteModelError
  Post = mongoose.model("Post");
} catch {
  // Define the model only if it doesn't exist
  Post = mongoose.model("Post", postSchema);
}

export { Post };
