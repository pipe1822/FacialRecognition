import React from 'react';

const Camera = ({ videoRef, videoWidth, videoHeigth, handleVideo, canvasRef }) => {
    return (
        <div>
            <video ref={videoRef} className='fixed top-1 right-0 rounded-xl' autoPlay muted width={videoWidth} height={videoHeigth} onPlay={handleVideo} />
            <canvas ref={canvasRef} className='fixed top-0 right-0 rounded-xl' />
        </div>
    );
}

export default Camera;
