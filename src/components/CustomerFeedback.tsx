import React from 'react';
import styled from 'styled-components';

const FeedbackContainer = styled.div`
  background-color: #2c2f33;
  padding: 1rem;
  border-radius: 0.5rem;
`;

const FeedbackItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #3c3f43;
  
  &:last-child {
    border-bottom: none;
  }
`;

const CustomerFeedback: React.FC = () => {
  return (
    <FeedbackContainer>
      <h2>Customer Feedback</h2>
      <FeedbackItem>
        <h3>Jenny Wilson</h3>
        <p>
          The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had the burger and fries which was also very good. They were very conscientious about gluten allergies.
        </p>
      </FeedbackItem>
      <FeedbackItem>
        <h3>Dianne Russell</h3>
        <p>
          We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.
        </p>
      </FeedbackItem>
      <FeedbackItem>
        <h3>Devon Lane</h3>
        <p>
          Normally wings are wings, but theirs are lean meaty and tender, and cooked perfectly. The burgers were great too.
        </p>
      </FeedbackItem>
    </FeedbackContainer>
  );
};

export default CustomerFeedback;
