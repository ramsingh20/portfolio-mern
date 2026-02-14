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

const addService = async (req, res) => {
  try {
    const response = req.body;
    await Service.create(response);
    return res.status(200).json({ message: "Project added successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Project not added" });
  }
};



export { getAllUsers, addService };