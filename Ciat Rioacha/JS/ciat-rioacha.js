
let elVideo = document.getElementById('video');
let contenedorVideo=document.getElementById('contenedor-video')
let x= document.getElementsByTagName("body")
let strike = 0;
let alumnoOut= 0;
let contador=0;
console.log(elVideo);
console.log(contenedorVideo)

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

    const CreandoCanvas= ()=>{
        
        let fotosCt= document.querySelector('.fotos');
        let canvas =document.createElement("canvas");
        canvas.setAttribute("id",`h`+contador)
        fotosCt.appendChild(canvas)
    }
Promise.all([
faceapi.nets.ssdMobilenetv1.loadFromUri('./models'),
faceapi.nets.ageGenderNet.loadFromUri('./models'),
faceapi.nets.faceExpressionNet.loadFromUri('./models'),
faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
faceapi.nets.faceLandmark68TinyNet.loadFromUri('./models'),
faceapi.nets.faceRecognitionNet.loadFromUri('./models'),
faceapi.nets.ssdMobilenetv1.loadFromUri('./models'),
faceapi.nets.tinyFaceDetector.loadFromUri('./models'),
]).then(cargarCamara)


if (strike<4) {
elVideo.addEventListener(`play`,  ()=>{
    const canvas= faceapi.createCanvasFromMedia(elVideo)
   contenedorVideo.append(canvas)
    // el tamaño del canvas 
const displaySize = { width: elVideo.width, height: elVideo.height }
faceapi.matchDimensions(canvas, displaySize) 


setInterval(async()=>{
const detections = await faceapi.detectAllFaces(elVideo)

if (detections.length<1) {
    alumnoOut++
    if (alumnoOut > 100) {
        alert("Lo sentimos no lo reconocemos en la pantalla") 
        alumnoOut=75
        strike++
    }
}else if (detections.length>1) {
    alert("Lo siento no pueden haber 2 personas haciendo el curso")
    
}else{
    alumnoOut=0;

}


if (strike>=4) {
    x[0].classList.add('d-none')
    location.href="/FinalizandoCurso.html"
    
    alumnoOut=0
    
}


const resizedDetections = faceapi.resizeResults(detections, displaySize)
canvas.getContext('2d').clearRect(0,0, canvas.width, canvas.height)
faceapi.draw.drawDetections(canvas, resizedDetections)
faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
faceapi.draw.drawDetections(canvas, resizedDetections)
});

})
}



setInterval (()=>{
    CreandoCanvas();
    let canvas =document.getElementById(`h`+contador)
    let ctx= canvas.getContext('2d');
    ctx.drawImage(elVideo, 0,0, 250, 150)
    console.log(canvas);
    contador++;
},60000)


