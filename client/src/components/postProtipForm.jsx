import React from 'react';
import { FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
export default class PostProtipForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: '',
      bottomText: '',
      protiper: 'dennis'
    };
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({protiper:e.target.value});
  }

  render() {
    return (
      <div className="protip-form">
        <p>New Protip</p>
        <div>
          <p>Select Your Protiper</p>
          <select value={this.state.selectValue} onChange={this.handleChange.bind(this)}>
            <option value="abraham">Abraham Paniagua</option>
            <option value="aj">AJ</option>
            <option value="andy">Andy Brown</option>
            <option value="carlos">Carlos Espinal</option>
            <option value="casper">Casper Holmgreen</option>
            <option value="christine">Christine Chou</option>
            <option value="conor">Conor Carey</option>
            <option value="conrad">Conrad Winberly</option>
            <option value="conway">Conway Wang</option>
            <option value="dan">Dan Snyder</option>
            <option value="dane">Dane Jordan</option>
            <option value="daren">Daren Ang</option>
            <option value="david">David Lundgren</option>
            <option value="dennis">Dennis</option>
            <option value="donovan">Donovan Carreno</option>
            <option value="duke">Duke The Man</option>
            <option value="emily">Emily Forst</option>
            <option value="evan">Evan Moncuso</option>
            <option value="hannah">Hannah Henderson</option>
            <option value="james">James Ramadan</option>
            <option value="jay">Jay Arella</option>
            <option value="jen">Jen Ong</option>
            <option value="jeremy">Jeremy Toce</option>
            <option value="jordan">Jordan Chong</option>
            <option value="justin">Justin Ross</option>
            <option value="mattdubie">Matt Dubie</option>
            <option value="mattmartin">Matt Martin</option>
            <option value="mike">Mike Wong</option>
            <option value="nat">Nat</option>
            <option value="neil">Neil</option>
            <option value="omneet">Omneet</option>
            <option value="quin">Quin</option>
            <option value="roy">Roy</option>
            <option value="shea">Shea</option>
            <option value="sompop">Sompop</option>
            <option value="stevenchung">Steven Chung</option>
            <option value="stevenlin">Steven Lin</option>
            <option value="sunny">Sunny</option>
            <option value="tabitha">Tabitha</option>
            <option value="trevor">Trevor</option>
            <option value="tyler">Tyler</option>
            <option value="wayne">Wayne</option>
          </select>
        </div>
        <p>Top Text</p>
        <input className="post-input" type="text" onChange={ (event) => this.state.topText = event.target.value } />
        <p>Bottom Text</p>
        <input className="post-input" type="text" onChange={ (event) => this.state.bottomText = event.target.value } />

        <button className="btn btn-primary btn-xs" onClick={ () => this.props.postProtip({ topText: this.state.topText, bottomText: this.state.bottomText, author: this.props.username, protiper: this.state.protiper})}>
        Post
        </button>
      </div>
    );
  }
}
