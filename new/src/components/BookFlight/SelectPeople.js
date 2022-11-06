import React, { CSSProperties }  from 'react'
import Select from 'react-select'
import './custom-select.css';

const people = [
    { value: '1', label: '1 Person'},
    { value: '2', label: '2 People'},
    { value: '3', label: '3 People'},
    { value: '4', label: '4 People'}
]

function SelectPeople({style, placeholder}){
    return(
        <div class={{width: '30px'}}>
        <Select 
        options={people}
        menuPlacement = 'auto'
        placeholder= 'Choose number of tickets...'
        />
    </div>
    );
}

export default SelectPeople; 

