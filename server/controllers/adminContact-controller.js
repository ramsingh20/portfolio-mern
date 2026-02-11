import { Contact } from '../models/contact-model.js';

// *-------------------------------
//* Get Contacts Logic 📝
// *-------------------------------

const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find();  // or both are same:- same output  User.find({}); 
        console.log(contacts);
        
        if (!contacts || contacts.length === 0) {
            return res.status(200).json({ message: "No contacts found" });
        }
        res.status(200).json(contacts);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// *-------------------------------
//* Contacts Delete Logic 📝
// *-------------------------------

const deleteContactById = async (req, res, next) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id: id});
        return res.status(200).json({ message: "Contact deleted successfully" });
    } catch (error) {
        console.log(error);
        next(error);
    }
};



export { getAllContacts, deleteContactById };