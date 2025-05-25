// what it does 
// The server listens for incoming client connections.
// When a client connects:
// It logs any errors.
// It listens for messages sent from the client.
// It immediately sends a message back to the client: "hey from index.js".

//host
import { WebSocket, WebSocketServer } from 'ws';


const wss = new WebSocketServer({ port: 8000 });
// This creates a WebSocket server on port 8000


let senderSocket: null | WebSocket = null;
let receiverSocket: null | WebSocket = null;
// These two variables are placeholders to store the WebSocket connections for a sender and a receiver.
// In your code, you're not actually assigning any values to these yet — it's just a setup.


// when a client connects to the server , this callback function runs
// When any client connects to the server, this event is triggered
wss.on('connection', function connection(ws) {

    // Log errors if they occur
    ws.on('error', console.error);

    // Listen for incoming messages from the connected client
    ws.on('message', function message(data: any) {
        // Parse the incoming data (we assume it's JSON)
        const message = JSON.parse(data);

        // Identify and store the socket as sender
        if (message.type === 'sender') {
            senderSocket = ws;

        // Identify and store the socket as receiver
        } else if (message.type === 'receiver') {
            receiverSocket = ws;

        // If a sender sends an offer (SDP)
        } else if (message.type === 'createOffer') {
            // Make sure only the sender is sending this
            if (ws !== senderSocket) return;

            // Forward the offer to the receiver
            receiverSocket?.send(JSON.stringify({
                type: "createOffer",
                sdp: message.sdp
            }));

        // If a receiver sends an answer (SDP)
        } else if (message.type === 'createAnswer') {
            // Make sure only the receiver is sending this
            if (ws !== receiverSocket) return;

            // Forward the answer to the sender
            senderSocket?.send(JSON.stringify({
                type: "createAnswer",
                sdp: message.sdp
            }));

        // Exchange ICE candidates
        } else if (message.type === 'iceCnadidate') {
            // If sender is sending ICE, send it to receiver
            if (ws === senderSocket) {
                receiverSocket?.send(JSON.stringify({
                    type: 'iceCandidate',
                    candidate: message.candidate
                }));
            // If receiver is sending ICE, send it to sender
            } else if (ws === receiverSocket) {
                senderSocket?.send(JSON.stringify({
                    type: 'iceCandidate',
                    candidate: message.candidate
                }));
            }
        }
    });

    ws.send('Hey from the host');
})



// updated: That is all that you need for a simple one way communication b/w two tabs
// ? to test it make 2 client to makr them communicate with each other