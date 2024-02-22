//mongodb+srv://sudpkhatri4:<password>@loginapp.6or7fr4.mongodb.net/?retryWrites=true&w=majority
import mongoose from "mongoose";

const db = mongoose.connect(
    "mongodb+srv://sudpkhatri4:hello123@loginapp.6or7fr4.mongodb.net/?retryWrites=true&w=majority"
  )
  .catch((error)=> console.log(error));

export default db;