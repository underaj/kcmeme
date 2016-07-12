import React from 'react';
import { ProtipList } from './protipList.jsx';
import PostProtipForm from './postProtipForm.jsx';
import MyNavbar from './navbar.jsx';
import SignUpForm from './signup.jsx';
import SignInForm from './signin.jsx';


var dummyList = [
 {
   topText: '',
   bottomText: '',
   author: '',
   votes: ''
 }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      protips: dummyList,
      loggedIn: false,
      getType: 'vote',
      username: ''
    };
  }
  
  componentDidMount() {
    this.getUserDetail();
    this.getProtipList();
    // get username from server
  }

  changeGetType(type) {
    this.setState({getType: type});
    this.getProtipList(type);
  }

  getProtipList(type) {
    type = type || this.state.getType;
    this.props.apiGet('/api/protips/'+type, newProtipList => {
      this.setState({
        protips: newProtipList
      });
    });
  }

  postProtip(postObj) {
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
      var name = userDetail.username;
      this.setState({
        username: name
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
    var page = '';
    if (this.state.getType === 'vote') {
      page = 'Popular';
    } else {
      page = 'Fresh';
    }

    return (
      <div>
        <MyNavbar username={this.state.username} signin={this.signin.bind(this)} signup={this.signup.bind(this)} changeGetType={this.changeGetType.bind(this)}/>
        <div className='container'>
          <h3>{page}</h3>
          <div>
          </div>
          <PostProtipForm postProtip={this.postProtip.bind(this)} username={this.state.username} />
          <ProtipList upVote={this.upVote.bind(this)} protips={this.state.protips} />
        </div>
      </div>
    )
  }
}
