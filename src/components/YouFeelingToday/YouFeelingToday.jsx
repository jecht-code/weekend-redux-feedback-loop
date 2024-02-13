import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/';

function Youfeelingtoday() {
    let [feelingToAdd, setfeelingToAdd] = useState('');
    const dispatch = useDispatch();
    const history =useHistory();

    const handlefeelingtoday = (event) => {
        event.preventDefault();
        dispatch({
            type: 'FEELINGTODAY',
            payload: feelingToAdd,
        });
        history.push('/understanding');
    }

    const handleChangefeeling = (event) => {
        setfeelingToAdd(event.target.value);
      }

    return (
      <div>
        
        <h2>How are you feeling today?</h2>
        <p>Feeling?</p>

        <input
        data-testid="input" 
        onChange={handleChangefeeling} 
        value={feelingToAdd} 
        type="number" min="1" max="5" />
        <button data-testid="next" onClick={handlefeelingtoday}>Next</button>

      </div>
    );
  }
  
  export default Youfeelingtoday;