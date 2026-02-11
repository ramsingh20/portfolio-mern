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



export { getAllUsers };