"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    PORT: process.env.PORT,
    MONGO_HOST: process.env.MONGO_HOST,
    MONGO_OPTIONS: process.env.MONGO_OPTIONS,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_NAME: process.env.MONGO_NAME,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
};
