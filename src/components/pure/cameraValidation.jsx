import React from 'react';

const CameraValidation = ({ videoRef, videoWidth, videoHeigth, handleVideo, canvasRef }) => {
    return (
        <div className='relative mx-auto mt-10' style={{ width: videoWidth, height: videoHeigth }}>
            <video ref={videoRef} className='absolute rounded-xl' autoPlay muted width={videoWidth} height={videoHeigth} onPlay={handleVideo} />
            <canvas ref={canvasRef} className='absolute rounded-xl' />
        </div>
    );
}

export default CameraValidation;
