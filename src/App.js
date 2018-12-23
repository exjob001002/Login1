import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './personal.json'
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      username:'',
      password:''

    }




  }
  usernameHandle(e){
    this.setState({username:e.target.value})


  }

  passwordHandle(e){
    this.setState({password:e.target.value})

  }

  ClickLogin() {
    //console.log(data.filter(profile => profile.username === this.state.username))
    let check = data.filter(profile => profile.username === this.state.username)
                    .filter(pass => pass.password === this.state.password)


                    

    console.log(check.length)
    if(check.length === 1){
        alert("login successfully")
    }
    else{
      alert("login fail!!")
    }

  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Login
          </p>
          <table>
            <tr>
              <td>username : </td>
              <td><input type="text" onChange={this.usernameHandle.bind(this)}/></td>
              
            </tr>
            
            <tr>
              <td>password : </td>
              <td><input type="password" onChange={this.passwordHandle.bind(this)}/></td>
              
            </tr>
            <tr>
              <td>

              </td>
              <td><button onClick={this.ClickLogin.bind(this)}className="button">Login</button></td>
            </tr>
          </table>
        </header>
      </div>
    );
  }
}

export default App;
