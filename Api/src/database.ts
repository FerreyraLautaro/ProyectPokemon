import mongoose from "mongoose"
import config from './config'


(async () =>{
    try {
        const db = await mongoose.connect(`${config.MONGO_NAME}://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_HOST}/${config.MONGO_OPTIONS}`)
        console.log("database is connected to:", db.connection.name)
    } catch (error) {
        console.error(error)
    }
})()
