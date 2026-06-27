import app from "./app.js";
import { __dirname } from "./app.js";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv({ path: `${__dirname}/.env` })

mongoose.connect(process.env.DATA_BASE).then(() => {
    console.log(`db is connect on port ${process.env.DATA_BASE}`);
})


app.listen(process.env.PORT, () => {
    console.log(`server is runing port ${process.env.PORT}`);
})