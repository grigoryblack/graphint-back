// src/index.ts

import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';
import imageRoutes from './routes/imageRoutes';
import { setupSocket } from './services/socketService';  // Импортируем сервис

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use('/images', express.static(path.join(__dirname, '../public/images')));
app.use('/api', imageRoutes);

setupSocket(io);

server.listen(8080, () => {
    console.log('Server started on port 8080');
    console.log('Open http://localhost:8080 in your browser');
});
