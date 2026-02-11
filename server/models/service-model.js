import { Schema, model } from "mongoose";
// const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
    service: { type: String, required: true },
    description: { type: String, required: true },

    price: { type: String, required: true },

    provider: { type: String, required: true },
});


const Service = new model("Service", serviceSchema);
export { Service }
// module.exports = Service;