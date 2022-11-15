import React, { useState } from 'react';
import { Fine } from '../../models/fine.class';
import { FINE_STATE } from '../../models/fineState.enum';
import { User } from '../../models/user.class';
import GeneralStatsTable from '../pure/generalStatsTable';
import Search from '../pure/search';
import Table from '../pure/table';

export const userContext = React.createContext()
export const finesFilterContext = React.createContext()

const Resume = () => {

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

    const [testUser, setTestUser] = useState(null);
    const [pending, setPending] = useState(true);

    function searchUser(number) {
        let searchedUser = (users.filter(user => user.identification === parseInt(number)))[0]
        setTestUser(searchedUser);
    }

    return (
        <userContext.Provider value={testUser}>
            <finesFilterContext.Provider value={pending}>

                <Search searchUser={searchUser} />
                {testUser !== null && testUser !== undefined &&
                    <GeneralStatsTable setPending={setPending} />}
                <Table />

            </finesFilterContext.Provider>
        </userContext.Provider>
    );
}

export default Resume;
