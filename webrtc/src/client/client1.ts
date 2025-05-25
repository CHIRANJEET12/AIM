// Sender — initiates the WebRTC connection.

import {WebSocket} from "ws";
// No import or export here — pure browser JS

const socket = new WebSocket('ws://localhost:8000');

const peerConnection = new RTCPeerConnection();

socket.onopen = () => {
  console.log('Sender Connected');
  socket.send(JSON.stringify({ type: 'sender' }));
};

socket.onmessage = async (e) => {
  const data = JSON.parse(e.data.toString());

  if (data.type === 'createAnswer') {
    await peerConnection.setRemoteDescription(new RTCSessionDescription(data.sdp));
  } else if (data.type === 'iceCandidate') {
    await peerConnection.addIceCandidate(data.candidate);
  }
};

peerConnection.onicecandidate = (e) => {
  if (e.candidate) {
    socket.send(JSON.stringify({
      type: 'iceCandidate',
      candidate: e.candidate
    }));
  }
};

async function startConnection() {
  const offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);
  socket.send(JSON.stringify({
    type: 'createOffer',
    sdp: offer
  }));
}

startConnection();
