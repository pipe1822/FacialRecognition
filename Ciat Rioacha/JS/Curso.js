let video = document.getElementById('video');
let labels = document.getElementsByTagName(`input`)
let canvas2= document.getElementById(`prueba3`)
let contador=0;

navigator = ( navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);
    
    const cargarCamara= () =>{
        navigator.getUserMedia (
    
    // Restricciones (contraints) *Requerido
    {
    video: true,
    audio: false
    },
    stream => video.srcObject = stream,
    console.error
    
    );
    };

    const CreandoCanvas= ()=>{
        
        let fotosCt= document.querySelector('.fotos');
        let canvas =document.createElement("canvas");
        canvas.setAttribute("id",`h`+contador)
        fotosCt.appendChild(canvas)
    }
    function name(params) {

    
        
    }

    const tomarFoto =()=>{
        CreandoCanvas();
        let canvas =document.getElementById(`h`+contador)
        let ctx= canvas.getContext('2d');
        ctx.drawImage(video, 0,0, 250, 150)
        console.log(canvas);
        contador++;
    }
    document.addEventListener(`click`, function prueba (e){
        for (let index = 0; index < labels.length; index++) {
            if (e.target==labels[index]) {
                tomarFoto();
            }
            
        }
       
    })

    
    cargarCamara();

    console.log(contador);