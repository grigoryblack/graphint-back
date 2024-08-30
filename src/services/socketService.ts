import { Server } from 'socket.io';

export const setupSocket = (io: Server) => {
    io.on('connection', (socket) => {
        console.log('A user connected: ', socket.id);

        // Обработка сообщения от клиента
        socket.on('client message', (msg) => {
            console.log(`Client says: ${msg}`);
            io.emit('manager message', msg);
        });

        // Обработка сообщения от менеджера
        socket.on('manager message', (msg) => {
            console.log(`Manager says: ${msg}`);
            io.emit('client message', msg);
        });

        socket.on('disconnect', () => {
            console.log('User disconnected:', socket.id);
        });
    });
};
