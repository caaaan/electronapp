"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// In-memory storage for demonstration purposes
let items = ['Item 1', 'Item 2'];
// GET endpoint
router.get('/tasks', (req, res) => {
    res.json(items);
});
// POST endpoint to update the list of items
router.post('/task', (req, res) => {
    const { description } = req.body;
    if (typeof description !== 'string') {
        return res.status(400).json({ error: 'Invalid item format. Must be a string.' });
    }
    items.push(description);
    res.status(201).json({ message: 'Item added successfully', items });
});
exports.default = router;
