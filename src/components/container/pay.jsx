import React from 'react';
import { useParams } from 'react-router-dom';
import { Fine } from '../../models/fine.class';
import { FINE_STATE } from '../../models/fineState.enum';
import { User } from '../../models/user.class';
import { moneyFormater } from '../../service/moneyFormat';
import PayForm from '../pure/payForm';

const PayComponent = () => {

    const users = [
        new User('Felipe', 'Becerra', 'felipebecerra@gmail.com', 111238867,
            [
                new Fine(223456, '04-11-2020', 'AB123BD', 'Barranquilla', 'C2', FINE_STATE.PENDING, 200000, 50),
                new Fine(163457, '04-11-2020', 'AB123BD', 'Barranquilla', 'D2', FINE_STATE.PAID, 200000, 30),
                new Fine(198456, '01-12-2020', 'AB123BD', 'Barranquilla', 'D3', FINE_STATE.PAID, 150000, 20),
                new Fine(113452, '01-01-2021', 'AB123BD', 'Barranquilla', 'C2', FINE_STATE.PENDING, 300000, 30),
                new Fine(290056, '02-01-2022', 'AB123BD', 'Barranquilla', 'D2', FINE_STATE.PENDING, 200000, 30),
                new Fine(121056, '20-05-2022', 'AB123BD', 'Barranquilla', 'C2', FINE_STATE.PAID, 200000, 20),
                new Fine(127416, '28-05-2022', 'AB123BD', 'Barranquilla', 'C2', FINE_STATE.PENDING, 200000, 30),
            ]),
        new User('Santino', 'Stimoli', 'santinostimoli@gmail.com', 45238867,
            [
                new Fine(128456, '01-12-2020', 'AA912BC', 'Barranquilla', 'C3', FINE_STATE.PAID, 150000, 20),
                new Fine(123453, '01-01-2021', 'AA912BC', 'Barranquilla', 'C2', FINE_STATE.PENDING, 300000, 30),
                new Fine(290156, '02-01-2022', 'AA912BC', 'Barranquilla', 'C2', FINE_STATE.PENDING, 200000, 30),
                new Fine(120456, '20-05-2022', 'AA912BC', 'Barranquilla', 'C2', FINE_STATE.PAID, 200000, 20),
                new Fine(122456, '28-05-2022', 'AA912BC', 'Barranquilla', 'D2', FINE_STATE.PENDING, 200000, 30),
                new Fine(129916, '31-08-2022', 'AA912BC', 'Barranquilla', 'D3', FINE_STATE.PENDING, 150000, 20),
                new Fine(100256, '10-10-2022', 'AA912BC', 'Barranquilla', 'C4', FINE_STATE.PENDING, 300000, 10),
            ])
    ]

    const userId = useParams().id
    const fineid = useParams().fine

    const selectedUser = (users.filter(user => user.identification === parseInt(userId)))[0]
    const selectedFine = selectedUser.fines.filter(fine => fine.id === parseInt(fineid))[0]



    return (
        <div className='flex text-white flex-col items-center'>
            <div className='md:w-4/5 mb-10 mx-auto' >
                <h2 className='text-5xl tracking-tighter mb-5'>Pago del curso por multa</h2>
                <div className='mb-3'>
                    <p className='tracking-tighter'>Esta multa pertenece a la persona con la cédula número:
                        <b className='text-lg tracking-tighter color-p'> {selectedUser.identification}</b>
                    </p>
                </div>
                <div className='mb-3'>
                    <p className='tracking-tighter'>La multa a pagar será la número:
                        <b className='text-lg tracking-tighter color-p'> {selectedFine.id}</b>
                    </p>
                </div>
                <div className='mb-3'>
                    <p className='tracking-tighter'>La multa seleccionada fue en un vehículo con la patente
                        <b className='text-lg tracking-tighter color-p'> {selectedFine.licensePlate} </b>
                        el día
                        <b className='text-lg tracking-tighter color-p'> {selectedFine.date} </b>
                        en el departamento de
                        <b className='text-lg tracking-tighter color-p'> {selectedFine.departament}</b>
                        , a causa de un
                        <b className='text-lg tracking-tighter color-p'> {selectedFine.infringement}.</b>
                    </p>
                </div>
                <div className='mb-5 text-2xl'>
                    <div>
                        <p className='tracking-tighter'>
                            El descuento en caso de pasar el curso es del
                            <b className='tracking-tighter color-p'> {selectedFine.discount}% </b>
                        </p>
                    </div>
                    <div>
                        <p className='tracking-tighter'>
                            El valor del curso alcanza los
                            <b className='tracking-tighter color-p'> {moneyFormater(selectedFine.testValue)} </b>
                        </p>
                    </div>
                </div>
                <p className='tracking-tighter'>Luego de pagar la multa pasaremos a la etapa de verificación donde pondremos a prueba tus capacidades con un video y un par de preguntas que ayudaran a disminuir el total de la multa. Las preguntas deben ser respondidas por el dueño de la multa, por lo que verificaremos su identidad mediante el uso de su camara</p>
            </div>

            <PayForm />
        </div>
    );
}

export default PayComponent;
