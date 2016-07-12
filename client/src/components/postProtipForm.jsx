import React from 'react';

export default class PostProtipForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: '',
      bottomText: '',
      protiper: 'stevenlin'
    };
  }

  render() {
    return (
      <div className="post-title">
        <p>New Protip</p>
        <p>Top Text</p>
        <input className="post-input" type="text" onChange={ (event) => this.state.topText = event.target.value } />
        <p>Bottom Text</p>
        <input className="post-input" type="text" onChange={ (event) => this.state.bottomText = event.target.value } />
        <button onClick={ () => this.props.postProtip({ topText: this.state.topText, bottomText: this.state.bottomText, author: this.props.username, protiper: this.state.protiper})}>
        Post
        </button>
      </div>
    );
  }
}
