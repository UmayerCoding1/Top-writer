import React from 'react';
import './favorit.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Writers from '../writres/Writers';
import Cart from './../cart/Cart';

const Favorit = () => {
    const [writers, setWriters]= useState([]);
    const [persons,setPersons] = useState([]);
    useEffect(()=>{
        fetch('./../../writer.json')
        .then(res => res.json())
        .then(data => setWriters(data));
    },[]);

    const handlePerson = (person) => {
        
        const newPerson = [...persons,person];
        if(persons.length < 5 && persons.indexOf(person) === -1){
            setPersons(newPerson);

        }

        else if(persons.length === 5){
            alert('You added is 5 writers! ');
        }

        else{
            alert('This persion is alrady added!');
        }

        
    }
   
    return (
        <div>
            <label htmlFor="">Countries : </label>
            <select name="" id="">
                <option value="bangladesh">Bangladesh</option>
                <option value="usa">USA</option>
                <option value="india">India</option>
            </select>
            <div className="main">

              <div className="writers">

                
                {writers.map((writer,i) => {
                    return([
                        <Writers key={i} writer={writer}
                        handlePerson={handlePerson}
                        />
                    ])
                })}
                
              </div>

              <div className="cart">
              <p>You are only add 5 writers</p>
                {persons.map((person)=> {
                    return ([
                      
                    <Cart key={person.id} {...person} />
                    
                ])
                })}
              </div>
              </div>
        </div>
    );
};

export default Favorit;
