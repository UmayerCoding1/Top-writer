import React from 'react';
import './writers.css'

const Writers = (props) => {
    const left = {textAlign: 'left'};
    const right = {textAlign: 'right'};
    const {name,img,education,nationality,topBooks} = props.writer;
    return (
        <div className='person'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4 style={left}>Education: <span style={right} className='span'>{education}</span></h4>
            <h4>Nationality:  <span className="span"> {nationality}</span></h4>
            <h5 style={left}>Topbook: <span style={{color:'green', paddingLeft:'10px'}} className="span"> {topBooks}</span></h5>
            <button onClick={() => props.handlePerson(props.writer)} className='add-to-fav'>Add to favorite</button>
        </div>
    );
};

export default Writers;