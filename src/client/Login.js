import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Redirect} from 'react-router-dom';


// Put AJAX in this Component
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: '',
      redirect: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onChange2 = this.onChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  onChange(event) {
    this.setState({ userName: event.target.value });
  }
  onChange2(event) {
    this.setState({ password: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:3000/login', {
      method:'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ 
       userName: this.state.userName,
       password: this.state.password
      })
     
    }).then(res => res.json())
    .then(response =>  {
      if(response){
        this.setState({ redirect: true })
      }
    })
  }

  render() {
    // put render logic here
    const { redirect } = this.state;
    return redirect ? <Redirect to='/' /> :
    (
      <div>
        <h2> Login </h2> 
        <form onSubmit={this.handleSubmit}>
        <label>
          UserName: 
          <input type="text" value={this.state.userName} onChange={this.onChange} />
        </label>
        <label>
          password: 
          <input type="password" value={this.state.password} onChange={this.onChange2} />
        </label>
        <Button bsStyle="primary" type="submit" value="Submit">Submit</Button>
       </form>
     
      </div> 
     
       
    );
  }
}
module.exports = Login;
