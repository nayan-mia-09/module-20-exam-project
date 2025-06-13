import mongoose from "mongoose";

const DataSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    des: { type: String, require: true },
  },
  {
    timeStamp: true,
    versionKey: false,
  }
);

const BlogModel = mongoose.model("blogs", DataSchema);

export default BlogModel;
