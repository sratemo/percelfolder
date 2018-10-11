import React, { Component } from 'react';
// import  from './client/app';
import { Button } from 'react-bootstrap';

// Feed contains multiple FeedItems
// Put AJAX in this Component
class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      businessName: '',
      description: '',
      email: '',
      address: '',
      userName: '',
      password: '', };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleChange6 = this.handleChange6.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange1(event) {
    this.setState({businessName: event.target.value});
  }
  handleChange2(event) {
    this.setState({description: event.target.value});
  }
  handleChange3(event) {
    this.setState({address: event.target.value});
  }
  handleChange4(event) {
    this.setState({email: event.target.value});
  }
  handleChange5(event) {
    this.setState({userName: event.target.value});
  }
  handleChange6(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:3000/signup', {
      method:'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
       businessName: this.state.businessName,
       description: this.state.description,
       email: this.state.email,
       address: this.state.address, 
       userName: this.state.userName,
       password: this.state.password
      })
     
    })
  }


  render() {
    // put render logic here
    return (
      <div>
        <h2>Sign up</h2>
        <div>
        <form onSubmit={this.handleSubmit} style={styles.container}>
        <label>
          Business Name: 
          <input type="text" value={this.state.businessName} onChange={this.handleChange1} />
        </label>
        <label>
          Description: 
          <input type="text" value={this.state.description} onChange={this.handleChange2} />
        </label>
        <label>
          Business Address: 
          <input type="text" value={this.state.address} onChange={this.handleChange3} />
        </label>
        <label>
          Email: 
          <input type="text" value={this.state.email} onChange={this.handleChange4} />
        </label>
        <label>
          UserName: 
          <input type="text" value={this.state.userName} onChange={this.handleChange5} />
        </label>
        <label>
          password: 
          <input type="text" value={this.state.password} onChange={this.handleChange6} />
        </label>
        <Button bsStyle="primary" type="submit" value="Submit">Submit</Button>
        {/* <input bsStyle="primary" type="submit" value="Submit" /> */}
      </form>
        </div>
      </div>
    );
  }
  
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid black',
    width: '500px',
    height: '500px',
    padding: '5px',
    flex: 1,
  },
};
module.exports = Signup;
