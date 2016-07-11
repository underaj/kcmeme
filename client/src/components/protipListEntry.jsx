import React from 'react';
import CanvasComponent from './canvasComponent.jsx';

export const ProtipListEntry = (props) => (
  <div>
    <CanvasComponent protip={props.protip}/ >
    <p>{props.protip.author}</p>
    <p>KC Points: {props.protip.votes}</p>
    <button onClick={() => props.upVote({'_id': props.protip._id})}>Upvote</button>
  </div>
);
