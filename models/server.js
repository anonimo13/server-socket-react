
const express  = require('express');
const http     = require('http');
const socketio = require('socket.io');
const path     = require('path');
const cors     = require('cors');

const Sockets = require('./sockets');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        // Http server
        this.server = http.createServer( this.app );

        // Configuraciones de socket
        this.io = socketio( this.server, { /* Configuraciones */ } );

    };

    middlewares() {
        // Desplegar el directorio publico
        this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );
        this.app.use( cors() );
        // CORS
    };

    configSockets() {
        new Sockets( this.io );
    };

    execute() {

        // Inicializar Middlewares
        this.middlewares();

        // Iniciar Socket
        this.configSockets();

        // Inicializar Server
        this.server.listen( this.port, () => {
            console.log( "Server Corriendo en puerto: ", this.port );
        } );
    };

};

module.exports = Server;

