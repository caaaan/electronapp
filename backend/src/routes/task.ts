import { Router, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();
const filePath = '../data/tasks/tasklist.json'; // Path to your JSON file

// Helper function to read items from the file
const readItemsFromFile = (): { id: number, description: string }[] => {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

// Helper function to write items to the file
const writeItemsToFile = (items: { id: number, description: string }[]): void => {
  fs.writeFileSync(filePath, JSON.stringify(items, null, 2));
};

// Helper function to get the next ID
const getNextId = (items: { id: number, description: string }[]): number => {
  if (items.length === 0) {
    return Math.floor(Math.random() * 1000) + 1; // Start with a random number if no items exist
  }
  const lastId = Math.max(...items.map(item => item.id));
  return lastId + 1;
};

// GET endpoint
router.get('/tasks', (req: Request, res: Response) => {
  const items = readItemsFromFile();
  res.json(items);
});

// POST endpoint to add a new item
router.post('/task', (req: Request, res: Response) => {
  const { description }: { description: string } = req.body;

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
router.delete('/task/:id', (req: Request, res: Response) => {
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

export default router;
