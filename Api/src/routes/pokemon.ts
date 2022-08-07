import {Schema, model} from "mongoose";


const pokemonSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true //elimina espacios del string antes y dsp de guardar
    },
    type: {
        type: String,
        trim: true
    },
    img: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
},{
    versionKey: false,
    timestamps: true
})

export default model('Pokemon',pokemonSchema)