// Protocolo de intercambio
var http = require('http');  // Aquí corregimos 'requiered' a 'require'

// Creando el servidor usando el protocolo HTTP
var server = http.createServer();

// Servicio Web
function mensaje(req, resp) {
    // Estado satisfactorio, con un mensaje de texto plano con formato de json
    resp.writeHead(200, { 'Content-Type': 'text/plain' });

    // Mensaje de texto plano
    resp.write('Hola Mundo');

    // Finalizar la comunicación
    resp.end();
}

server.on('request', mensaje);

// El servidor escucha en el puerto 3000
server.listen(3000, function() {
    console.log('La solicitud fue realizada por el puerto 3000');
});
