import React from 'react';
import './Sresult.css'

function Sresult(props) {
    
    const img1 =`https://source.unsplash.com/1000x600/?${props.name}`;

    const style1={
        padding:'100px',
        width:'600px',
        height:'400px'
    }
    return (
        <div className="container" >
            <img style={style1} src={img1} alt="img"/>
        </div>
    )
}

export default Sresult
