"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const socket = new ws_1.WebSocket('ws://localhost:8000');
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
socket.onmessage = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const data = JSON.parse(event.data.toString());
    if (data.type === 'createOffer') {
        yield peerConnection.setRemoteDescription(new RTCSessionDescription(data.sdp));
        const answer = yield peerConnection.createAnswer();
        yield peerConnection.setLocalDescription(answer);
        socket.send(JSON.stringify({ type: 'createAnswer', sdp: answer }));
    }
    else if (data.type === 'iceCandidate') {
        yield peerConnection.addIceCandidate(data.candidate);
    }
});
