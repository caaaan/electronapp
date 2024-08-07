import { Router, Request, Response } from 'express';

const router = Router();

// In-memory storage for demonstration purposes
let items: string[] = ['Item 1', 'Item 2'];

// GET endpoint
router.get('/tasks', (req: Request, res: Response) => {
  res.json(items);
});

// POST endpoint to update the list of items
router.post('/task', (req: Request, res: Response) => {
  const { description } = req.body;

  if (typeof description !== 'string') {
    return res.status(400).json({ error: 'Invalid item format. Must be a string.' });
  }

  items.push(description);
  res.status(201).json({ message: 'Item added successfully', items });
});



export default router;
