import React from 'react';

export const ProtipListEntry = (props) => (
  <div>
    <h3>{props.protip.content}</h3>
    <p>{props.protip.author}</p>
    <p>{props.protip.votes}</p>
    <button onClick={() => props.upVote({content: props.protip.author})}>Upvote</button>
  </div>
);
