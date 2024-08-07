"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs_1 = __importDefault(require("fs"));
const router = (0, express_1.Router)();
const filePath = '../data/tasks/tasklist.json'; // Path to your JSON file
// Helper function to read items from the file
const readItemsFromFile = () => {
    if (!fs_1.default.existsSync(filePath)) {
        return [];
    }
    const data = fs_1.default.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};
// Helper function to write items to the file
const writeItemsToFile = (items) => {
    fs_1.default.writeFileSync(filePath, JSON.stringify(items, null, 2));
};
// Helper function to get the next ID
const getNextId = (items) => {
    if (items.length === 0) {
        return Math.floor(Math.random() * 1000) + 1; // Start with a random number if no items exist
    }
    const lastId = Math.max(...items.map(item => item.id));
    return lastId + 1;
};
// GET endpoint
router.get('/tasks', (req, res) => {
    const items = readItemsFromFile();
    res.json(items);
});
// POST endpoint to add a new item
router.post('/task', (req, res) => {
    const { description } = req.body;
    if (typeof description !== 'string') {
        return res.status(400).json({ error: 'Invalid item format. Description must be a string.' });
    }
    const items = readItemsFromFile();
    const newItemId = getNextId(items); // Get the next ID
    // Add the new item to the list
    const newItem = { id: newItemId, description };
    items.push(newItem);
    writeItemsToFile(items);
    res.status(201).json({ message: 'Item added successfully', item: newItem });
});
// DELETE endpoint to remove an item by id
router.delete('/task/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid id format. Must be a number.' });
    }
    let items = readItemsFromFile();
    const initialLength = items.length;
    items = items.filter(item => item.id !== id);
    if (items.length === initialLength) {
        return res.status(404).json({ error: 'Item not found' });
    }
    writeItemsToFile(items);
    res.status(200).json({ message: 'Item removed successfully', items });
});
exports.default = router;
