import { Link } from 'react-router-dom';
import { moneyFormater } from '../../service/moneyFormat';
import { numberFormater } from '../../service/numberFormat';
import { FINE_STATE } from '../../models/fineState.enum';

const rowTable = ({ fine, userId }) => {

    return (
        <tr >
            <th scope="row" className="py-5 px-4 tracking-tighter font-medium whitespace-nowrap text-white">
                {numberFormater(fine.id)}
            </th>
            <td className="py-5 px-4 tracking-tighter">
                {fine.infringement}
            </td>
            <td className="py-5 px-4 tracking-tighter">
                {fine.date}
            </td>
            <td className="py-5 px-4 tracking-tighter">
                {fine.tComparendo}
            </td>
            <td className="py-5 px-4 tracking-tighter">
                {fine.departament}
            </td>
            <td className="py-5 px-4 tracking-tighter">
                {fine.state}
            </td>
            <td className="py-5 px-4 tracking-tighter">
                {moneyFormater(fine.testValue)}
            </td>
            <td className="py-5 px-4 tracking-tighter">
                {fine.state !== FINE_STATE.PAID ?
                    <Link to={`/validation-software/cedula=${userId}&numeroDeMulta=${fine.id}`} className={"font-medium underline " + (fine.state === FINE_STATE.PAID ? 'pointer-events-none opacity-75' : undefined)}>Pagar</Link>
                    :
                    'Pagado'
                }
            </td>
        </tr>
    );
}

export default rowTable;
