import React, { CSSProperties, useState }  from 'react'
import Select from 'react-select'
import './custom-select.css';

const style={
    select: {
      width: '25%',
      maxWidth: '1000px', 
      textalign: 'left',
      color:'#08699B',
      backgroundcolor: 'pink'
    }
}

function CustomSelect({style, placeholder}){
  const [selected, setSelected] = useState("");
  const options = [
    { value: '1', label: 'Spaceport America' },
    { value: '2', label: 'SpaceX Spaceport' },
    { value: '3', label: 'Guiana Space Center' },
    { value: '4', label: 'Andoya Space' },
    { value: '5', label: 'Kaikonur Cosmodrom' }
  ]
  const handleSelection = (d) => {
    setSelected(d.label);
  }
    return(
     <div class={{width: '30px'}}>
        <Select 
        options={options}
        onChange={handleSelection}
        value={options.find(function (option) {return option.value === selected;})}
        menuPlacement = 'auto'
        placeholder= 'Choose spaceport...'
        />
    </div>
);
}





export default CustomSelect; 