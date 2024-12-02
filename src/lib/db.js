"use server";


import mongoose from "mongoose"


const _MONGO_DB_URI = process.env.MONGODB_URL

console.log(_MONGO_DB_URI, "mongodburlll>>>>><")
const Connect = async () => {
    const _CONNECTION_STATE = await mongoose.connection.readystate


    if (_CONNECTION_STATE === 1) {
        console.log("already connected")
        return;
    }

    if (_CONNECTION_STATE === 2) return console.log("connecting..........")



    try {
        mongoose.connect(_MONGO_DB_URI, {
            dbName: "firstApi_Project",
            bufferCommands: true
        })
        console.log("connected");

    }
    catch (error) {
        console.log(error,
            "error"
        );
        throw new Error(error, "error occured")

    }
}

export default Connect;