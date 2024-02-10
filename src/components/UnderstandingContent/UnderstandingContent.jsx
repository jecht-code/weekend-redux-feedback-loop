import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Understandingtoday() {
    let [understandToAdd, setunderstandToAdd] = useState('');
    const dispatch = useDispatch();
    const history =useHistory();
    
    const handleUnderstanding = (event) => {
        event.preventDefault();
        dispatch({
            type: 'UNDERSTANDINGTODAY',
            payload: understandToAdd
        });
        
        history.push('/supported');
    }

    const handleChangeUnderstanding = (event) => {
        setunderstandToAdd(event.target.value);
      }

    return (
      <div>
        
        <h2>How well are you understanding the content?</h2>
        <p>Understanding?</p>
        
        <input 
        data-testid="input"
        onChange={handleChangeUnderstanding} 
        value={understandToAdd} 
        type="number" min="1" max="5" />
        <button data-testid="next" onClick={handleUnderstanding}>Next</button>
        

      </div>
    );
  }
  
  export default Understandingtoday;