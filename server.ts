import next from 'next';
import { createServer } from 'http';
import { Server } from 'socket.io';

const dev = process.env.NODE_ENV !== 'production';
const port = 3000; // Reverting to default port
const hostname = '0.0.0.0';

async function startServer() {
  try {
    const nextApp = next({ dev });
    await nextApp.prepare();
    const handle = nextApp.getRequestHandler();

    const server = createServer((req, res) => {
      handle(req, res);
    });

    const io = new Server(server);
    io.on('connection', (socket) => {
      console.log('A user connected');

      socket.on('message', (msg) => {
        console.log('Message received:', msg);
        io.emit('message', msg);
      });

      socket.on('disconnect', () => {
        console.log('A user disconnected');
      });
    });

    server.listen(port, () => {
      console.log(`Server ready on http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
}

startServer();
