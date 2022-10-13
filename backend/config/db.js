import mongoose from 'mongoose';

function monitorConnection(connection) {
  connection.on('error', (err) => {
    console.log('Error while connecting mongoDb:', err);
    setTimeout(connectDB, 10000);
  });

  connection.on('disconnect', () => {
    console.log('MongoDB disconnected');
  });

  process.on('SIGNIT', () => {
    connection.close(() => {
      console.log('Disconnecting through app termination');
      process.exit(0);
    })
  })
}

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.bold);
    monitorConnection(conn);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
