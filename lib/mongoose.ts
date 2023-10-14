import mongoose from 'mongoose';

let isConneted = false; 

export const connetToDB = async () => {
  mongoose.set('strictQuery', true);

  if(!process.env.MONDODB_URI) return console.log('MONDODB_URI is not defined');

  if(isConneted) return console.log('=> using existing database connection');

  try {
    await mongoose.connect(process.env.MONDODB_URI);

    isConneted = true;

    console.log('MongoDB Connected')
  } catch (error) {
    console.log(error)
  }
} 