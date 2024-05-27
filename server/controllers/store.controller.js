const Store = require('../models/store.model');

const addStore = async (req, res) => {
    try {
        const { name, location, phone_number } = req.body;
        const existingStore = await Store.findOne({ name });
        if (existingStore) {
            return res.status(400).json({ message: "Store already exists" });
        }
        const store = new Store({ name, location, phone_number });
        await store.save();
        res.status(201).json(store);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getStores = async (req, res) => {
    try {
        const stores = await Store.find();
        res.status(200).json(stores);
    } catch (err) {
        res.status(400).json(err);
    }
}

module.exports = { addStore, getStores };