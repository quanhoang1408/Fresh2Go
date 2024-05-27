const User = require('../models/user.model');

const addUser = async (req, res) => {
    try {
        const { name, email, password, role, phone_number } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const user = new User({ name, email, password, role, phone_number });
        await user.save();
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json(err);
    }
}

module.exports = { addUser, getUsers };