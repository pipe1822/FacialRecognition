import React, { useContext } from 'react';
import { FINE_STATE } from '../../models/fineState.enum';
import { moneyFormater } from '../../service/moneyFormat';
import { numberFormater } from '../../service/numberFormat';
import { obtainTotalPendingFines } from '../../service/obtainTotalPendingFines';
import { finesFilterContext, userContext } from '../container/resume';

const GeneralStatsTable = ({ setPending }) => {

    const user = useContext(userContext);
    const pending = useContext(finesFilterContext);

    const pendingFines = user.fines.filter(fine => fine.state !== FINE_STATE.PAID)
    const paidFines = user.fines.filter(fine => fine.state === FINE_STATE.PAID)

    return (
        <div className='general-stats'>
            <div className='md:grid grid-cols-4 mt-10 mb-5 gap-2'>
                <div className='col-span-4 rounded-md py-4 px-5 flex boxs'>
                    <div className='md:flex justify-around w-1/2 max-md:my-2'>
                        <div className='text-center'>
                            <p>Usuario:</p>
                            <span>{user.name} {user.lastName}</span>
                        </div>
                        <div className='text-center max-md:mt-5'>
                            <p>Cédula:</p>
                            <span>{numberFormater(user.identification)}</span>
                        </div>
                    </div>
                    <div className='md:flex justify-around w-1/2 max-md:my-2'>
                        <div className='text-center'>
                            <p>Multas:</p>
                            <span>{`( ${pendingFines.length} )`}</span>
                        </div>
                        <div className='text-center max-md:mt-5'>
                            <p>Total:</p>
                            <span>{moneyFormater(obtainTotalPendingFines(pendingFines))}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GeneralStatsTable;
