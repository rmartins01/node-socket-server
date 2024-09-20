const io = require('socket.io')(3000);
io.on('connection', (socket) => {
    console.log('Novo cliente conectado');
    socket.on('message', (msg) => {
        console.log('Mensagem recebida: ' + msg);
        socket.emit('message', 'Mensagem recebida: ' + msg);
    });
});