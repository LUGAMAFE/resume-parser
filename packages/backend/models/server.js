import cors from 'cors';
import express from 'express';
import FileUpload from 'express-fileupload';
import router from '../routes/documents.js';

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // connect db
    // this.connectDB();

    // Middlewares
    this.middlewares();

    // Rutas de mi app
    this.routes();
  }

  routes() {
    this.app.use('/api/document', router);
  }

  middlewares() {
    this.app.use(express.static('public'));
    this.app.use(cors());

    // Lectura y parseo
    this.app.use(express.json());
    //Middleware to parse documents
    this.app.use(FileUpload());
  }

  async connectDB() {
    await dbConnection();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('servidor corriento en puerto ', this.port);
    });
  }
}

export default Server;
