import React from 'react';
import CanvasComponent from './canvasComponent.jsx';

export const ProtipListEntry = (props) => (
  <div>
    <CanvasComponent/ >
    <h3>{props.protip.content}</h3>
    <p>{props.protip.author}</p>
    <p>{props.protip.votes}</p>
    <button onClick={() => props.upVote({'_id': props.protip._id})}>Upvote</button>
  </div>
);
