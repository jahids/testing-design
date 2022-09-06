import React from 'react';
import {DateRangePicker} from 'rsuite';
import 'rsuite/dist/rsuite.min.css'; // or 'rsuite/dist/rsuite.min.css'

const SimpleHome = () => {


    return (

        <div>
                
                <DateRangePicker 
                onChange={(data)=>(console.log(data))}
                
                format="MM/dd/yyyy"
                defaultCalendarValue={
                [new Date('2022-02-01 00:00:00'), new Date('2022-03-01 23:59:59')]
                }/>
        </div>


    )
};

export default SimpleHome;
