import React from 'react';
import CanvasComponent from './canvasComponent.jsx';

export const ProtipListEntry = (props) => (
  <div>
    <CanvasComponent protip={props.protip}/ >
    <h3>{props.protip.topText}</h3>
    <h3>{props.protip.bottomText}</h3>
    <p>{props.protip.author}</p>
    <p>KC Points: {props.protip.votes}</p>
    <button onClick={() => props.upVote({'_id': props.protip._id})}>Upvote</button>
  </div>
);
