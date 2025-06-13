import mongoose from "mongoose";

const DataSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    comment: { type: String, require: true },
    blogID: { type: mongoose.Schema.Types.ObjectId, require: true },
  },
  {
    timeStamp: true,
    versionKey: false,
  }
);

const CommentModel = mongoose.model("comments", DataSchema);

export default CommentModel;
