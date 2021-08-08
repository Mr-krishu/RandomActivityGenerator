import React,{useState} from 'react';
import Select from 'react-select';

const options = [
    { value: 'none', label: 'None' },
    { value: 'completed', label: 'Completed' },
    { value: 'notInterested', label: 'Not Interested' },
  ];

 const Test=()=> {
const [status,setStatus] =useState(null,options);

 const handleChange = selectedOption => {
    setStatus( selectedOption );
    console.log(selectedOption.value);
  };

    return (
        <Select
        value={status}
        onChange={handleChange}
        options={options}
      />
    );
  }

export default Test