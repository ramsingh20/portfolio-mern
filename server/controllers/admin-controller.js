import { Service } from '../models/service-model.js';
import { User } from '../models/user-model.js';

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}, { password: 0 });
        console.log(users);
        
        if (!users || users.length === 0) {
            return res.status(200).json({ message: "No users found" });
        }
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Naya Project Add karne ke liye
const addService = async (req, res) => {
  try {
    const { service, description, price, provider } = req.body;
    
    // Naya data create karna
    const serviceCreated = await Service.create({
      service,
      description,
      price, // Isko hum Tech Stack ki tarah use kar rahe hain
      provider, // Isko hum GitHub link ki tarah use kar rahe hain
    });

    return res.status(200).json({ 
      message: "Project added successfully!", 
      data: serviceCreated 
    });
  } catch (error) {
    console.log("Error adding service:", error);
    return res.status(500).json({ message: "Project not added" });
  }
};



export { getAllUsers, addService };