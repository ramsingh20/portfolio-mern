import { User } from '../models/user-model.js';

const getAllUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({_id: id}, { password: 0 });
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        next(error);
    }
};



export { getAllUserById };