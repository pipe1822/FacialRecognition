let elVideo = document.getElementById('video');
console.log(elVideo);

navigator.getMedia = ( navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);
    
    const cargarCamara= () =>{
        navigator.getMedia (
    
    // Restricciones (contraints) *Requerido
    {
    video: true,
    audio: false
    },
    stream => elVideo.srcObject = stream,
    console.error
    
    );
    };

    cargarCamara();