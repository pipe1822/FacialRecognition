
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
Promise.all([
faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
faceapi.nets.ageGenderNet.loadFromUri('/models'),
faceapi.nets.faceExpressionNet.loadFromUri('/models'),
faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
faceapi.nets.faceLandmark68TinyNet.loadFromUri('/models'),
faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
]).then(cargarCamara)


elVideo.addEventListener(`play`,  ()=>{
    const canvas= faceapi.createCanvasFromMedia(elVideo)
    document.body.append(canvas)
    // el tamaño del canvas 
const displaySize = { width: elVideo.width, height: elVideo.height }
faceapi.matchDimensions(canvas, displaySize) 

setInterval(async()=>{
const detections = await faceapi.detectAllFaces(elVideo)
.withFaceLandmarks().withFaceExpressions().withAgeAndGender().withFaceDescriptors()

const resizedDetections = faceapi.resizeResults(detections, displaySize)
canvas.getContext('2d').clearRect(0,0, canvas.width, canvas.height)
faceapi.draw.drawDetections(canvas, resizedDetections)
faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
faceapi.draw.drawDetections(canvas, resizedDetections)
});

})
