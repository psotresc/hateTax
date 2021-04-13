
const express = require("express");
const fetch = require('node-fetch')
const fs = require('fs');

const path = __dirname
const app = express();

const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/hateEconomy", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

const commentsSchema = new mongoose.Schema({
    usuario: String,
    comentarios: String,
    puntaje: Number 
});

const Comment = mongoose.model('Comment', commentsSchema);

// const comment = new Comment({
//     usuario: "pedro_picapiedra",
//     comentarios: "Eso que tu comentario no sirve de nada",
//     puntaje: 5
// });

// comment.save();

// Comment.find(function(err,comments){
//     if(err){
//         console.log(err);
//     }
//     else{
//         mongoose.connection.close()
//         comments.forEach(function(comment){
//             console.log(comment.usuario);
//         });
//     }
// })



// Comment.deleteMany({usuario:"pedro_papas"}, function(err){
//     if(err){
//       console.log(err);
//     }else{
//       console.log("Deleted");
//     }
// })



// function recursiva(){
//     setTimeout(function imprimir(){
//         console.log('Hola');
//         recursiva()
//     } ,60000)
// } 
    
// recursiva();

// var url = 'https://youtube.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&videoId=BpobjOFkt8E&maxResults=5&key=AIzaSyDcGHTBl5S-BZr6LimGx52ZuU8FYhyGdtk' 

// fetch(url)
//         .then((res) => res.json())
//         .then(output => {
//             consultarDatos(output)
//         }).then(salida=> consultarBaseDatos())

// function consultarDatos(output){
//         var data= output;
//         // console.log(data);
//         // console.log(data.items[0].snippet.topLevelComment.snippet.textDisplay)
//         // console.log(data.items[0].snippet.topLevelComment.snippet.authorDisplayName)
//         // console.log(data.items[0].snippet.topLevelComment.snippet.likeCount)
//         const comment = new Comment({
//             usuario: data.items[0].snippet.topLevelComment.snippet.authorDisplayName,
//             comentarios: data.items[0].snippet.topLevelComment.snippet.textDisplay,
//             puntaje: 5
//         });
//         comment.save();
//         console.log('Se guardaron datos');
// }
// function consultarBaseDatos (){
//     Comment.find(function(err,comments){
//         if(err){
//             console.log(err);
//         }
//         else{
//             mongoose.connection.close()
//             comments.forEach(function(comment){
//                 console.log(comment.usuario);
//             });
//         }
//     })  
//     console.log('Se consulto base de datos');
// }


// Comment.find(function(err,comments){
//     if(err){
//         console.log(err);
//     }
//     else{
//         mongoose.connection.close()
//         comments.forEach(function(comment){
//             console.log(comment.usuario);
//         });
//     }
// })
var url = 'https://youtube.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&videoId=BpobjOFkt8E&maxResults=5&key=AIzaSyDcGHTBl5S-BZr6LimGx52ZuU8FYhyGdtk' 
  getComments()
app.get('/',(req,res) => {
   res.send(

   fetch(url)
           .then((res) => res.json())
           .then(output => {
               consultarDatos(output)
           }).then(salida=> consultarBaseDatos()))
})

app.listen(5000, ()=>{
    console.log('App escuchando en puerto 5000');
})