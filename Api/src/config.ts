import dotenv from 'dotenv'
dotenv.config();



export default {
    PORT: process.env.PORT || 9000,
    MONGO_HOST: process.env.MONGO_HOST || 'cluster0.fe6m5op.mongodb.net',
    MONGO_OPTIONS: process.env.MONGO_OPTIONS || '?retryWrites=true&w=majority',
    MONGO_USER: process.env.MONGO_USER || 'FerreyraLautaro',
    MONGO_NAME: process.env.MONGO_NAME || 'mongodb+srv',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'lautaro12342513'
}