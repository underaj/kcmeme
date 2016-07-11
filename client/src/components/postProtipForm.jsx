import React from 'react';

export default class PostProtipForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
  }

  render() {
    return (
      <div className="post-title">
        Restaurant name
        <input className="post-input" type="text" onChange={ (event) => this.state.content = event.target.value } />
        <button onClick={ () => this.props.postProtip({content: this.state.content, username: this.props.user})}>
          Post
        </button>
      </div>
    );
  }
}
