import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Commenttoday() {
    let [commentToAdd, setcommentToAdd] = useState('');
    const dispatch = useDispatch();
    const history =useHistory();
    
    const handleComment = (event) => {
        event.preventDefault();
        dispatch({
            type: 'COMMENTEDTODAY',
            payload: commentToAdd
        });
        history.push('/understanding');
    }

    const handleChangeComment = (event) => {
        setcommentToAdd(event.target.value);
      }

    return (
      <div>
        
        <h2>Any comments you want to leave?</h2>
        <p>Comments</p>
        
        <input
        data-testid="input"
        onChange={handleChangeComment} 
        value={commentToAdd} type="text" />
        <button data-testid="next" onClick={handleComment}>Next</button>
        

      </div>
    );
  }
  
  export default Commenttoday;