import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();

router.get('/images', (req, res) => {
    const directoryPath = path.join(__dirname, '../../public/images');

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Unable to scan files' });
        }

        const imageUrls = files.map((file) => `/images/${file}`);
        res.json(imageUrls);
    });
});

export default router;
