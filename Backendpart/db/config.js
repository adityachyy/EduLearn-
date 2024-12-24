import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = () => {
    const uri ='mongodb://localhost:27017/education' ;

    if (!uri) {
        console.error('MongoDB URI is undefined. Check your .env file.');
        process.exit(1);
    }

    mongoose
        .connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('Database connected'))
        .catch((error) => {
            console.error('Error connecting to the database:', error.message);
            process.exit(1);
        });
};

export default connectDB;

