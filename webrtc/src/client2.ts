import {WebSocket} from "ws";

const socket = new WebSocket('ws://localhost:8000');

socket.onopen = () => {
  console.log('Receiver connected');
  socket.send(JSON.stringify({ type: 'receiver' }));
};

const peerConnection = new RTCPeerConnection();

peerConnection.onicecandidate = (event) => {
  if (event.candidate) {
    socket.send(JSON.stringify({
      type: 'iceCnadidate', // same typo to match server
      candidate: event.candidate
    }));
  }
};

// Handle messages from the server
socket.onmessage = async (event) => {
  const data = JSON.parse(event.data.toString());

  if (data.type === 'createOffer') {
    await peerConnection.setRemoteDescription(new RTCSessionDescription(data.sdp));
    const answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);

    socket.send(JSON.stringify({ type: 'createAnswer', sdp: answer }));
  } else if (data.type === 'iceCandidate') {
    await peerConnection.addIceCandidate(data.candidate);
  }
};
