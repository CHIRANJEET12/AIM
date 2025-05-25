"use strict";
// Sender — initiates the WebRTC connection.
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
// No import or export here — pure browser JS
const socket = new ws_1.WebSocket('ws://localhost:8000');
const peerConnection = new RTCPeerConnection();
socket.onopen = () => {
    console.log('Sender Connected');
    socket.send(JSON.stringify({ type: 'sender' }));
};
socket.onmessage = (e) => __awaiter(void 0, void 0, void 0, function* () {
    const data = JSON.parse(e.data.toString());
    if (data.type === 'createAnswer') {
        yield peerConnection.setRemoteDescription(new RTCSessionDescription(data.sdp));
    }
    else if (data.type === 'iceCandidate') {
        yield peerConnection.addIceCandidate(data.candidate);
    }
});
peerConnection.onicecandidate = (e) => {
    if (e.candidate) {
        socket.send(JSON.stringify({
            type: 'iceCandidate',
            candidate: e.candidate
        }));
    }
};
function startConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        const offer = yield peerConnection.createOffer();
        yield peerConnection.setLocalDescription(offer);
        socket.send(JSON.stringify({
            type: 'createOffer',
            sdp: offer
        }));
    });
}
startConnection();
