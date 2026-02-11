import { User } from '../models/user-model.js';

const deleteUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        await User.deleteOne({_id: id});
        return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.log(error);
        next(error);
    }
};



export { deleteUserById };