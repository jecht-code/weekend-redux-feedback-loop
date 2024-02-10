import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Understandingtoday() {
    let [understandToAdd, setunderstandToAdd] = useState('');
    const dispatch = useDispatch();
    
    const handleUnderstanding = (event) => {
        event.preventDefault();
        dispatch({
            type: 'FEELINGTODAY',
            payload: {
                feeling: understandToAdd,
              },
        });
        setunderstandToAdd('');
    }

    const handleChangeUnderstanding = (event) => {
        setunderstandToAdd(event.target.value);
      }

    return (
      <div>
        
        <h2>How well are you understanding the content?</h2>
        <p>Understanding?</p>
        <form onSubmit={handleUnderstanding} >
            <input onChange={handleChangeUnderstanding} value={understandToAdd} type="number" min="1" max="5" />
            <button data-testid="next">Next</button>
        </form>

      </div>
    );
  }
  
  export default Understandingtoday;