import React from 'react';
import { useHistory } from 'react-router-dom';

function Thankyounext() {
    const history =useHistory();

    const handleThankyou = (event) => {
        event.preventDefault();
          
        history.push('/');
    }

    return (
        <div>
        
        <h2>THANK YOU!!</h2>
        
        <button data-testid="next" onClick={handleThankyou}>Leave New Feedback</button>
        
      </div>
    );
  }
  
  export default Thankyounext;