// [Client connects to ws://localhost:8000]
//     ↓
// [Server accepts connection, sends "hey from index.js"]
//     ↓
// [Client logs message from server]
//     ↓
// [Client sends { type: 'hello', content: 'This is a test' }]
//     ↓
// [Server receives and parses the message, but does nothing with it for now]

//external connection(client side)
import {WebSocket} from "ws";

const socket = new WebSocket('ws://localhost:8000');

socket.on('open',()=>{
    console.log('connected');
    socket.send(JSON.stringify({ type: 'hello', content: 'This is a test' }));
})


socket.on('message', (data) => {
  console.log('Server says:', data.toString());
});