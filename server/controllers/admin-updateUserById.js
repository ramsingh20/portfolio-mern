import { User } from '../models/user-model.js';

const updateUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updateUserData = req.body;

        const updatedData = await User.updateOne({_id: id}, { 
            $set: updateUserData
         });
        return res.status(200).json(updatedData);
    } catch (error) {
        console.log(error);
        next(error);
    }
};



export { updateUserById };