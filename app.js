//Importation
const mongoose = require("mongoose")

//Preparation de connexion

mongoose.connect('mongodb://localhost:27017', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifieldTopology: true,
})
mongoose.connection.once('open', ()=>{
    console.log("DB connected...")
}).on('error', (error)=> {
     console.log("connection  in DB error")
})