import { useState } from "react";
const DropdownPeople = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleDropdownChange = (event) => {
        setSelectedValue(event.target.value);
    };
  return (
    <div>
        <select id="dropdown" value={selectedValue} onChange={handleDropdownChange} className="flex w-full flex-grow focus:outline-none border border-gray-400 p-2 rounded-md">
            <option value="default">2 People</option>
            <option value="option2">3 People</option>
            <option value="option3">4 People</option>
            <option value="option4">5 People</option>
            <option value="option5">6 People</option>
            <option value="option6">7 People</option>
            <option value="option7">8 People</option>
            <option value="option8">9 People</option>
            <option value="option9">10 People</option>
            <option value="option10">11 People</option>
            <option value="option11">12 People</option>
            <option value="option12">13 People</option>
            <option value="option13">14 People</option>
            <option value="option14">15 People</option>
            <option value="option15">16 People</option>
            <option value="option16">17 People</option>
            <option value="option17">18 People</option>
            <option value="option18">19 People</option>
            <option value="option19">20 People</option>
        </select>
    </div>
  )
}

export default DropdownPeople