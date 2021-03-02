

class Sockets {

    constructor( io ) {
        this.io = io;
        this.socketEvents();
    };

    socketEvents() {
        this.io.on( 'connection', ( socket ) => {

            //Emitir evento
            socket.emit( "mensaje-bienvenida", {
                msg: "Bienvenido al servidor",
                date: new Date(),
            } );

            // Escuchar evento 
            socket.on("mensaje-cliente", ( data ) => {
                console.log( "mensaje del cliente: ", data );
            } );

            // Escuchar evento de chat
            socket.on("msgChat-to-server", ( data ) => {
                //Emitir evento
                this.io.emit( "msgChat-from-server", data );
            } );
        } );
    };

};

module.exports = Sockets;

