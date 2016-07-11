import React from 'react';
import { ProtipListEntry } from './protipListEntry.jsx';

export const ProtipList = (props) => (
  <div className="protip-list">
    {props.protips.map( (protip) => (<ProtipListEntry protip={protip} upVote={props.upVote}/> ))}
  </div>
);
