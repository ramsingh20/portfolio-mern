import { Schema, model } from "mongoose";
// const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
    service: { type: String, required: true }, // Title of project
    description: { type: String, required: true },
    price: { type: String, required: true }, // Isko tum Tech Stack (e.g. React, Node) ki tarah use kar sakte ho
    provider: { type: String, required: true }, // GitHub Link
    image: { type: String }, // Project Image URL
});


const Service = new model("Service", serviceSchema);
export { Service }
// module.exports = Service;