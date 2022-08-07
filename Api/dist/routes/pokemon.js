"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const pokemonSchema = new mongoose_1.Schema({
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
}, {
    versionKey: false,
    timestamps: true
});
exports.default = (0, mongoose_1.model)('Pokemon', pokemonSchema);
