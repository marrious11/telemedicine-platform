import { useRef, useEffect } from 'react';

export default function VideoCall() {
  const localVideoRef = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        localVideoRef.current.srcObject = stream;
      });
  }, []);

  return (
    <div>
      <video ref={localVideoRef} autoPlay muted className="video-frame" />
    </div>
  );
}