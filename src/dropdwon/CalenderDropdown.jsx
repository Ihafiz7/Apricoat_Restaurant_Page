import {useState} from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const CalenderDropdown = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());  

    return (
        <div className='flex justify-center bg-white z-10 '>
            <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} className='focus:outline-none border border-gray-400 p-2 rounded-md' />
        </div>
    );
}

export default CalenderDropdown

