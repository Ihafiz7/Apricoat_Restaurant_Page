import {useState} from 'react'

const DropdownTime = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleDropdownChange = (event) => {
        setSelectedValue(event.target.value);
        console.log("Selected:", event.target.value);
    };
  return (
    <div>
        <select id="dropdown" value={selectedValue} onChange={handleDropdownChange} className="flex w-full flex-grow focus:outline-none border border-gray-400 p-2 rounded-md">
            <option value="default">8.00 PM</option>
            <option value="option2">8.30 PM</option>
            <option value="option3">9.00 PM</option>
            <option value="option4">9.30 PM</option>
            <option value="option5">10.00 PM</option>
            <option value="option6">10.30 PM</option>
            <option value="option7">11.00 PM</option>
        </select>
    </div>
  )
}

export default DropdownTime