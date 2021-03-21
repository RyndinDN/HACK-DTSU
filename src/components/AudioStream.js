import React, { useEffect, useState, useRef, useCallback } from "react";
import Peer from "peerjs";
import { v4 as uuidv4 } from "uuid";
export default function App() {
	const audioRef = useRef(null);
	const handleStream = useCallback(stream => {
		audioRef.current.srcObject = stream;
	}, [audioRef]);
	const [peer, setPeer] = useState();
	const [peerID, setPeerID] = useState();
	useEffect(() => {
		const peerID = localStorage.getItem("peer-id") || uuidv4();
		localStorage.setItem("peer-id", peerID);
		const peer = new Peer(peerID);
		setPeer(peer);
		peer.on("open", id => {
			setPeerID(peerID);
		});
		peer.on("call", call => {
			navigator.mediaDevices.getUserMedia({
				audio: true,
				video: false
			}).then(stream => {
				call.answer(stream);
				call.on("stream", handleStream);
			});
		});
		return () => {
			peer.destroy();
		};
	}, [handleStream]);
	const [destination, setDestination] = useState();
	const onDestinationChange = useCallback(e => {
		setDestination(e.target.value);
	}, [setDestination]);
	const onCall = useCallback(() => {
		navigator.mediaDevices.getUserMedia({
			audio: true,
			video: false
		}).then(stream => {
			const outgoing = peer.call(destination, stream);
			outgoing.on("stream", handleStream);
		});
	}, [peer, destination, handleStream]);
	return <div>
		      
		<audio ref={audioRef} autoPlay controls />
		      
		{peerID ? <>
			          
			<p>
				            
				<strong>
					Ваш id:
				</strong>
				            
				<br />
				            
				{peerID}
				          
			</p>
			          
			<p>
				            Введите id, к которому хотите подключиться:
            
				<br />
				            
				<input type="text" onChange={onDestinationChange} />
				            
				<br />
				            
				<button type="button" onClick={onCall}>
					              Подключиться
            
				</button>
				          
			</p>
			        
		</> : <p>
			Connecting...
		</p>}
		    
	</div>;
}