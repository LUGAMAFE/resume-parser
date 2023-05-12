import dotenv from 'dotenv-mono';
import Server from './models/server.js';

dotenv.config();

const server = new Server();

server.listen();
