import { Schema, model, models } from "mongoose";


const userSchema = new Schema({
    name: String,
    age: Number
},


);
const User = models.User || model("User", userSchema)


export default User