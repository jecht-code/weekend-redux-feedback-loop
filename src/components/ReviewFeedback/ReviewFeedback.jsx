import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Reviewfeedback() {
    const reviewFeedback = useSelector((state) => state.feelingValue);
    const reviewUnderstand = useSelector((state) => state.understandingValue);
    const reviewSupport = useSelector((state) => state.supportedValue);
    const reviewComment = useSelector((state) => state.commentedValue);
    const history =useHistory();

    const handleAlldata = (event) => {
        event.preventDefault();
        console.log(`Add data:`, {feeling: reviewFeedback, understanding: reviewUnderstand, support: reviewSupport, comments: reviewComment});

        axios.post('/api/feedback', {feeling: reviewFeedback, understanding: reviewUnderstand, support: reviewSupport, comments: reviewComment})
        .then((response) => {
            //GET to refresh - but dont need to refresh here
        })
        .catch((error) => {
            console.log('ERROR:', error);
        });
        history.push('/thankyou');
    }

    return (
      <div>  
        <h2>REVIEW YOUR FEEDBACK</h2>
        <p>Feelings: {reviewFeedback}</p>
        <p>Understanding: {reviewUnderstand}</p>
        <p>Support: {reviewSupport}</p>
        <p>Comments: {reviewComment}</p>
        <button data-testid="next" onClick={handleAlldata}>Submit</button>

      </div>
    );
  }
  
  export default Reviewfeedback;