import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Supportedtoday() {
    let [supportToAdd, setsupportToAdd] = useState('');
    const dispatch = useDispatch();
    const history =useHistory();
    
    const handleSupport = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SUPPORTEDTODAY',
            payload: supportToAdd
        });
        
        history.push('/comment');
    }

    const handleChangeSupport = (event) => {
        setsupportToAdd(event.target.value);
      }

    return (
      <div>
        
        <h2>How well are you being supported?</h2>
        <p>Supported?</p>
        
        <input 
        data-testid="input"
        onChange={handleChangeSupport}
        value={supportToAdd} 
        type="number" min="1" max="5" />
        <button data-testid="next" onClick={handleSupport}>Next</button>
        

      </div>
    );
  }
  
  export default Supportedtoday;