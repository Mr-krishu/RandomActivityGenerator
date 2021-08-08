import React,{useState,useEffect}from 'react'
import Select from 'react-select'
import axios from "axios"
import Collapsible from 'react-collapsible';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';




const options = [

    { value: 'completed', label: 'Completed' },
    { value: 'notInterested', label: 'Not Interested' },
  ];



const Datafetch = () => {

    const [data,setData]=useState([]);
    const [input,setInput]=useState("");
    const [count,setCount]=useState(0);
    const [status,setStatus] =useState(null,options);

var arr=[];
    useEffect(() => {
        return(
      axios.get("https://www.boredapi.com/api/activity/")
        .then((response) => {
            setData(response.data);
            arr.push(response.data);
         
         
        })
    )},[count]);
    const change=()=>{
        setCount(Math.random());
    }

let string =`${data.type}`;

  
console.log(arr);
    const handleChange = selectedOption => {
       setStatus( selectedOption );
      
     };
    return (
        
        <div className="containers">
          <h1>Krishna Kant</h1>
                    <table >
                    <tbody >
                        <tr>
                            <th classname="tablehead" scope="row"> Activity</th>
                              <td>{data.activity}</td>
                        </tr>
                        <tr>
                             <th classname="tablehead" scope="row">Description</th>
                         
                            <td>   {input} <Collapsible className="colla"trigger="Add Description">
                                 <input value={input} onChange={(e)=>{setInput(e.target.value)}} className="input"type="text"></input>
                          </Collapsible>
</td>
                        </tr>
                        <tr>
                            <th class="tablehead" scope="row"> Type </th>
                              <td> 
                              { string.charAt(0).toUpperCase()+string.substring(1)}
    </td>
                        </tr>
                        <tr>
                             <th classn="tablehead" scope="row">Participants</th>
                              <td>{data.participants}</td>
                        </tr>
                       <tr>
                             <th class="tablehead" scope="row">Link</th>
                             <td> {data.link?<a href={data.link}>Visit Site</a>:<span>Link Unavailable</span>}</td> 
                       </tr>
                       <tr>
                            <th class="tablehead" scope="row">Status</th>
                    
                           <Select
                              isdisabled
                               placeholder="None"
                              value={status}
                              onChange={handleChange}
                              options={options}
              />
           
                       
                       </tr>
          </tbody>
          </table>

               
          
  <button id="fetchbutton"className="btn btn-secondary"onClick={change}>Random Activity</button><br/>
  

        </div>

        
    )
}

export default Datafetch
