const express = require('express');
const mongoose = require('mongoose');
const dotEnv = require('dotenv');
const studentRoutes = require('./routes/studentRoutes');
dotEnv.config();


const app = express();
app.use(express.json());
app.use('/students', studentRoutes);

// mongoose.connect(process.env.MONGODB_URL)
// .then(()=>{
//     console.log("connection success")
// })
// .catch((error) =>{
//     console.log(error);
// })

async function connectdb() {
  try{
    const connectto = await mongoose.connect(process.env.MONGODB_URL);
    console.log("connection success");

  } catch(error){
    console.log(error)
  } 
    
}
connectdb();





app.listen((process.env.PORT),()=>{
    console.log('server listen at port 3000')
});
