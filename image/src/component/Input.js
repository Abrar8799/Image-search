import React ,{useState} from 'react';
import Sresult from './Sresult';
import './Input.css';

function Input() {
        
    const [ img , setImage] = useState();

     const  Handleclick = (event) =>{
        const value=event.target.value;
        setImage(value); 

     }
    return (
        <div  className="container">
            <h1>Enter your Input</h1>
            <input type='text' placeholder='Enter your value' onChange={Handleclick} value = { img } required/>
            <Sresult name={img}/>
        </div>
       

    )
}

export default Input
