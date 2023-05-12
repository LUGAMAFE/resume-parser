import mongoose from 'mongoose';

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Base de datos online');
  } catch (e) {
    console.log(e);
    console.log('error en la base de datos');
  }
};

export default dbConnection;
