
const Server = require("./models/server");
require('dotenv').config();

const server = new Server();
server.execute();




// // Servidor de Express
// const express = require('express');
// const app = express();

// // Servidor de sockets
// const server = require('http').createServer(app);

// // Configuracion del socket server
// const io = require('socket.io')(server);

// // Desplegar el directorio publico
// app.use( express.static( __dirname + '/public' ) );

// io.on('connection', ( socket ) => { 

//     console.log( "Cliente conectado! : " + socket.id );

//     socket.emit( "mensaje-bienvenida", {
//         msg: "Bienvenido al servidor",
//         date: new Date(),
//     } );

//     // Escuchar evento 
//     socket.on("mensaje-cliente", ( data ) => {
//         console.log( "mensaje del cliente: ", data );
//     } );

//     // Escuchar evento de chat
//     socket.on("msgChat-to-server", ( data ) => {
//         io.emit( "msgChat-from-server", data );
//     } );

//  });


// server.listen(8080, () => {
//     console.log("Servidor corriendo en puerto: 8080");
// });

