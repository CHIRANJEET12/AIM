"use strict";
// [Client connects to ws://localhost:8000]
//     ↓
// [Server accepts connection, sends "hey from index.js"]
//     ↓
// [Client logs message from server]
//     ↓
// [Client sends { type: 'hello', content: 'This is a test' }]
//     ↓
// [Server receives and parses the message, but does nothing with it for now]
Object.defineProperty(exports, "__esModule", { value: true });
//external connection(client side)
const ws_1 = require("ws");
const socket = new ws_1.WebSocket('ws://localhost:8000');
socket.on('open', () => {
    console.log('connected');
    socket.send(JSON.stringify({ type: 'hello', content: 'This is a test' }));
});
socket.on('message', (data) => {
    console.log('Server says:', data.toString());
});
