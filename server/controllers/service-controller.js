import { Service } from "../models/service-model.js";

const service = async (req, res) => {
    try {
        const response = await Service.find();
        if (!response) {
            // Handle the case where no document was found
            res.status(404).json({ msg: "No service found" });
            return;
        }
        res.status(200).json({ message: response });
    } catch (error) {
        console.error("service error", error);
        return res.status(500).json({ message: "service not delivered" });
    }
};

export { service };