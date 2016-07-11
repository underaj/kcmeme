import React from 'react';
import { ProtipList } from './protipList.jsx';
import PostProtipForm from './postProtipForm.jsx';
import SignUpForm from './signup.jsx';
import SignInForm from './signin.jsx';


var dummyList = [
 {
   content: '',
   author: '',
   votes: ''
 }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      protips: dummyList,
      user: ''
    };
  }
  
  componentDidMount() {
    this.getUserDetail();
    this.getProtipList();
    // get username from server
  }

  getProtipList() {
    this.props.apiGet('/api/protips', newProtipList => {
      this.setState({
        protips: newProtipList
      });
    });
  }

  postProtip(postObj) {
    postObj.username = postObj.username || 'ANONYMOUS';
    this.props.apiPost('/api/protip', postObj)
      .done((err, data) => {
        this.getProtipList();
      });
  }

  upVote(title) {
    this.props.apiPost('/api/protip/upvote', title)
      .done((err, data) => {
        this.getProtipList();
      });
  }

  getUserDetail() {
    this.props.apiGet('/api/users/getUserDetail', userDetail => {
      this.setState({
        user: userDetail.username
      });
    });
  }

  signin(userObj) {
    this.props.apiPost('/api/users/signin', userObj)
      .done(userObj => {
        this.getUserDetail();
      });
  }

  signup(userObj) {
    this.props.apiPost('/api/users/signup', userObj)
      .done(userObj => {
        this.getUserDetail();
      });
  }

  render () {
    return (
      <div>
        <h2>Popular</h2>
        <h5>{this.state.user}</h5>
        <div>
          <a href='/api/users/signout'>Sign Out</a>
        </div>
        <div>
          <button onClick={() => this.getUserDetail()}>Get User Detail</button>
        </div>
        Sign In Form
        <SignInForm signin={this.signin.bind(this)} />
        Sign Up Form
        <SignUpForm signup={this.signup.bind(this)} />
        Post New Protip
        <PostProtipForm postProtip={this.postProtip.bind(this)} user={this.state.user} />
        <ProtipList upVote={this.upVote.bind(this)} protips={this.state.protips} /> 
      </div>
    )
  }
}
