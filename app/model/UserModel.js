import mongoose from "mongoose";

const DataSchema = mongoose.Schema({
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    email: {type: String, unique: true, require: true, lowercase: true, trim: true},
    password: {type: String, require: true},
    phone: {type: String, require: true}
},{
    timestamps: true,
    versionKey: false,
});

const UserModel = mongoose.model("users", DataSchema);

export default UserModel;