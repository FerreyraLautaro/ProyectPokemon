import dotenv from 'dotenv'
dotenv.config();



export default {
    PORT: process.env.PORT,
    MONGO_HOST: process.env.MONGO_HOST,
    MONGO_OPTIONS: process.env.MONGO_OPTIONS,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_NAME: process.env.MONGO_NAME,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
}