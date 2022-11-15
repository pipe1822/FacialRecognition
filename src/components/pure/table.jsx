import React, { useContext } from 'react';
import RowTable from './rowTable';
import '../../styles/table.css'
import { FINE_STATE } from '../../models/fineState.enum';
import { finesFilterContext, userContext } from '../container/resume';

const Table = () => {

    const user = useContext(userContext);
    const pending = useContext(finesFilterContext);

    const fines = user !== null && user !== undefined && user.fines;
    const pendingFines = user !== null && user !== undefined && fines.filter(fine => fine.state !== FINE_STATE.PAID);
    const paidFines = user !== null && user !== undefined && fines.filter(fine => fine.state === FINE_STATE.PAID);

    return (
        <div className="overflow-x-auto relative shadow-md rounded-md min-w-full">
            <table className="w-full text-sm text-center text-gray-500">

                <thead className="text-md uppercase -tracking-widest">

                    <tr>
                        <th scope="col" className="py-7 px-4">
                            Comparendo
                        </th>
                        <th scope="col" className="py-7 px-4">
                            Infracción
                        </th>
                        <th scope="col" className="py-7 px-4">
                            Fecha
                        </th>
                        <th scope="col" className="py-7 px-4">
                            T.comparendo
                        </th>
                        <th scope="col" className="py-7 px-4">
                            Departamento
                        </th>
                        <th scope="col" className="py-7 px-4">
                            Estado
                        </th>
                        <th scope="col" className="py-7 px-4">
                            Valor Curso
                        </th>
                        <th scope="col" className="py-7 px-4">
                            Curso
                        </th>
                    </tr>

                </thead>

                <tbody >
                    {user !== null && user !== undefined ?

                        (pending ? pendingFines : paidFines).map((fine, index) => (
                            <RowTable key={index} fine={fine} userId={user.identification} />
                        ))
                        :
                        user === null ?
                            <tr>
                                <td colSpan={8} className='text-center text-lg py-5'>Realiza una busqueda y aquí veras los resultados</td>
                            </tr>
                            :
                            <tr>
                                <td colSpan={8} className='text-center text-lg py-5'>El usuario que buscas no esta registrado</td>
                            </tr>

                    }
                </tbody>

            </table>
        </div>
    );
}

export default Table;
