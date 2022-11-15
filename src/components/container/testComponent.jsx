import * as faceapi from 'face-api.js';
import React, { useEffect, useRef, useState } from 'react';
import { Option } from '../../models/option.class';
import { Question as QuestionText } from '../../models/question.class';
import Camera from '../pure/camera';
import Question from '../pure/question';
import '../../styles/test.css'
import Results from '../pure/results';
import Alert from '../pure/alert';

const TestComponent = () => {

    const [pass, setPass] = useState(null);
    const [testCompleted, setTestCompleted] = useState(false);
    const [cause, setCause] = useState('');
    const [calification, setCalification] = useState(10);
    const [endVideo, setEndVideo] = useState(false);
    const [initializing, setInitializing] = useState(false);
    const [message, setMessage] = useState('');

    const [strikesData, setStrikesData] = useState(0);

    const videoWidth = 300;
    const videoHeigth = 225;
    const videoRef = useRef();
    const canvasRef = useRef();
    let userOut = 0
    let strikes = 0

    const questions = [
        new QuestionText(1, '¿Qué significa la doble línea continua amarilla?', [
            new Option('Es una señalización que se utiliza únicamente para dividir los sentidos de circulación.', false),
            new Option('Indica, para ambos sentidos de circulación, que no debe ser transpasada ni se puede circular sobre ella.', true),
            new Option('Significa que solo pueden circular vehículos particulares.', false),
        ]),
        new QuestionText(2, '¿Por qué está prohibido el uso de telefonía celular para el conductor durante la circulación?', [
            new Option('Disminuye su capacidad atencional y limita el sentido de la audición, aumentando el tiempo de reacción.', false),
            new Option('Debido a que el conductor debe mantener ambas manos comprometidas en la accion de conducir, el equipo celular reduciria la capacidad de maniobrar.', false),
            new Option('Ambas respuestas son correctas.', true),
        ]),
        new QuestionText(3, '¿Qué produce en el conductor el alcohol?', [
            new Option('Aumento del campo visual.', false),
            new Option('Estado de euforia y de falsa seguridad en sí mismo.', true),
            new Option('Reducción del tiempo de reacción.', false),
        ]),
        new QuestionText(4, '¿Cuáles son los números de emergencia para pedir ayuda ante un accidente?', [
            new Option('211 y/o 109.', false),
            new Option('112 y/o 110.', false),
            new Option('911 y/o 107.', true),
        ]),
        new QuestionText(5, 'La negativa a realizar una prueba de alcoholemia ¿constituye una falta?', [
            new Option('Sólo si se ha incurrido en una infracción o participado en un accidente.', false),
            new Option('No.', false),
            new Option('Siempre.', true),
        ]),
        new QuestionText(6, '¿Qué está prohibido en la autopista?', [
            new Option('Sobrepasar a otros vehiculos.', false),
            new Option('Detenerse por causa de fuerza mayor.', false),
            new Option('Circular marcha atras.', true),
        ]),
        new QuestionText(7, '¿Cual es la velocidad minima para circular en una avenida?', [
            new Option('20 km/h.', false),
            new Option('30 km/h.', true),
            new Option('40 km/h.', false),
        ]),
        new QuestionText(8, '¿Cuàl es la velocidad minima para circular en zona rural?', [
            new Option('40 km/h.', true),
            new Option('50 km/h.', false),
            new Option('60 km/h.', false),
        ]),
        new QuestionText(9, '¿por cuanto tiempo es principiante el conductor que obtiene por primera vez su licencia de conducir?', [
            new Option('6 meses.', true),
            new Option('1 año.', false),
            new Option('5 años.', false),
        ]),
        new QuestionText(10, '¿Cuál es el carril de aceleración de una autopista?', [
            new Option('Izquierdo.', false),
            new Option('Derecho.', false),
            new Option('En las autopistas no hay carril de aceleración.', true),
        ]),
    ]

    useEffect(() => {
        setCause('')
        loadModels()
        setTimeout(() => {
            setEndVideo(true)
        }, 10000);
    }, []);

    const loadModels = async () => {
        const MODEL_URL = process.env.PUBLIC_URL + '/models'
        setInitializing(true)

        Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
            faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
            faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
            faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        ]).then(cargarCamara)
    }
    navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);

    const cargarCamara = () => {
        navigator.getMedia(
            {
                video: true,
                audio: false
            },
            stream => videoRef.current.srcObject = stream,
            console.error
        );
    };

    const handleVideo = () => {
        let interval = setInterval(async () => {
            if (initializing) {
                setInitializing(false)
            }
            canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current)
            const size = {
                width: videoWidth,
                height: videoHeigth
            }
            faceapi.matchDimensions(canvasRef.current, size)
            const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
            const resizedDetections = faceapi.resizeResults(detections, size)
            canvasRef.current.getContext('2d').clearRect(0, 0, size, size)
            faceapi.draw.drawDetections(canvasRef.current, resizedDetections)

            if (detections.length === 0) {
                userOut++
            } else if (detections.length >= 2) {
                strikes = 4
                setCause('Dos personas haciendo el test')
                setStrikesData(strikes)
            } else {
                userOut = 0
            }

            if (userOut >= 100) {
                strikes++
                userOut = 0
                setCause('Te haz salido de foco')
                setStrikesData(strikes)
            }

            if (strikes >= 4) {
                userOut = 0
                setMessage('Haz alcanzado el límite de strikes')
                setTestCompleted(true)
                setPass(false)
                clearInterval(interval)
            }
        });
    };

    const submitedTest = async () => {
        setTestCompleted(true)
        if (calification >= 7) {
            setPass(true)
        } else {
            setPass(false)
        }
    };

    function otherUser() {
        setMessage('El usuario ha cambiado')
        setTestCompleted(true)
        setPass(false)
    }

    let countdownDate = new Date().setSeconds(new Date().getSeconds() + 60 * 60 * 2);

    let timerInterval;

    const daysElem = document.getElementById("days"),
        hoursElem = document.getElementById("hours"),
        minutesElem = document.getElementById("minutes"),
        secondsElem = document.getElementById("seconds"),
        timer = document.getElementById("timer"),
        content = document.getElementById("content");

    const formatTime = (time, string) => {
        return `${time} ${string}`
    };

    const startCountdown = () => {
        const now = new Date().getTime();
        const countdown = new Date(countdownDate).getTime();

        const difference = (countdown - now) / 1000;

        if (difference < 1) {
            endCountdown();
        }

        let days = Math.floor(difference / (60 * 60 * 24));
        let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
        let minutes = Math.floor((difference % (60 * 60)) / 60);
        let seconds = Math.floor(difference % 60);

        daysElem.innerHTML = formatTime(days, "");
        hoursElem.innerHTML = formatTime(hours, ":");
        minutesElem.innerHTML = formatTime(minutes, ":");
        secondsElem.innerHTML = formatTime(seconds, "");
    };

    const endCountdown = () => {
        clearInterval(timerInterval);
        timer.remove();
        content.classList.add("visible");
    };

    return (
        <div className='test' onDoubleClick={() => otherUser()}>
            <Camera canvasRef={canvasRef} handleVideo={handleVideo} videoHeigth={videoHeigth} videoRef={videoRef} videoWidth={videoWidth} />
            {cause !== '' ? <Alert cause={cause} strikes={strikesData} /> : undefined}


            <h1 className='text-white text-5xl text-center mt-10'>Presta atención al video y contesta las preguntas, el temporizador ya esta corriendo.</h1>


            <iframe onLoad={() => timerInterval = setInterval(startCountdown, 1000)} className='video my-10 rounded-lg mx-auto' src="https://www.youtube.com/embed/DWqEcJCAauM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


            <section id="timer" aria-live="polite" className='fixed top-2 left-2'>
                <div className="timer-container text-4xl text-white bg-p2 px-4 py-2 rounded-lg">
                    <span className='none' id="days" role="timer">0 days</span>
                    <span id="hours" role="timer">0:</span>
                    <span id="minutes" role="timer">0:</span>
                    <span id="seconds" role="timer">0</span>
                </div>
            </section>


            {endVideo && <form>
                {questions.map((question, index) => (
                    <Question key={index} questionIndex={index} question={question.question} options={question.options} />
                ))}

                <button onClick={submitedTest} className='hover:opacity-100' >Enviar respuestas</button>
            </form>}


            {testCompleted ? <Results pass={pass} message={message} /> : null}
        </div>
    );
}

export default TestComponent;
