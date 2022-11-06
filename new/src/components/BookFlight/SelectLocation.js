import React, { CSSProperties }  from 'react'
import Select from 'react-select'
import './custom-select.css';

const locations = [
    { value: '1', label: 'Moon'},
    { value: '2', label: 'Mars'}
]

function SelectLocation({style, placeholder}){
    return(
        <div class={{width: '30px'}}>
        <Select 
        options={locations}
        menuPlacement = 'auto'
        placeholder= 'Choose destination...'
        />
    </div>
    );
}

export default SelectLocation;

