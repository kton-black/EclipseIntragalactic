import React, { CSSProperties, useState }  from 'react'
import Select from 'react-select'
import './custom-select.css';



function SelectDate({style, placeholder}){
    const [selected, setSelected] = useState(null);
    const date = [
        { value: '1', label: 'Nov. 18, 2022'},
        { value: '2', label: 'Dec. 8, 2022'},
        { value: '3', label: 'Dec. 9, 2022'}   
    ]
    const handleSelection = (d) => {
        setSelected(d.value);
    }
    return(
        <div>
        <Select 
        options={date}
        onChange={handleSelection}
        value={date.find(function (option) {return option.value === selected;})}
        menuPlacement = 'auto'
        placeholder= 'Pick an available date...'
        />
    </div>
    );
}

export default SelectDate; 

