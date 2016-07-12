import React from 'react';
import CanvasComponent from './canvasComponent.jsx';

export const ProtipListEntry = (props) => (
  <div>
    <CanvasComponent protip={props.protip}/ >
    <p>KC Points: {props.protip.votes}</p>
    <p>By {props.protip.author}</p>
    <button onClick={() => props.upVote({'_id': props.protip._id})}>Upvote</button>
  </div>
);
