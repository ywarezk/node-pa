

const express = require('express');
const path = require('path');
const WebSocket = require('ws');
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.resolve(__dirname, 'assets')));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

const myWs = new WebSocket.Server({
    port: 3002
}, function() {
    console.log('websocket is now open');
});

myWs.on('error', function(err) {
    console.log('failed to open web socket server ' + err.message);
});

myWs.on('connection', function(ws, req) {
    
    ws.on('message', function(data) {
        console.log('this will jump when client sends data: ' + data)
        
        myWs.clients.forEach(function(wsconnection) {
            wsconnection.send(data);
        });
    });

    ws.on('close', function() {
        console.log('connection is closed');
    });

    ws.keepAlive = true;

    ws.on('pong', function() {
        console.log('this will pop when client sends a pong');
        ws.keepAlive = true;
    });

    setInterval(function() {
        if (ws.keepAlive === false) {
            ws.close();
            return;
        }

        ws.keepAlive = false;
        ws.ping();
    }, 10000);




    
    // ws.send('hello world from server');

    // setTimeout(() => {
    //     ws.send('2nd message');
    // }, 1000);

    // setTimeout(() => {
    //     ws.send('3nd message');
    // }, 2000);

})

app.get('/chat', function(req, res) {
    res.render('chat');
})

app.listen(3001, '0.0.0.0', function() {
    console.log('now listening on port 3001');
})