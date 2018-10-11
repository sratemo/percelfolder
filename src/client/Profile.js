import React, { Component } from 'react';
import DisplayReview from '../client/DisplayReview'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      provider: {
        businessName:'',
        description: '',
        email: '',
        address: '',
        username:'', 
        password:'',
        reviews: []
      },
      review: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    fetch(`http://localhost:3000/profile/${this.props.match.params.name}`)
      .then(response => response.json())
      .then(data => this.setState({provider: data}))
      .catch(err => console.log(err));
  }

  handleChange(event){
    this.setState({review: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submit')
    fetch(`http://localhost:3000/profile/${this.props.match.params.name}`, {
      method:'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ 
       review: this.state.review,
      })
     
    }).then(res => console.log(res))
   
  }
 
  render() {
    console.log('Reviews', this.state.provider.reviews)
    // // const newArray = this.state.provider.reviews.slice(0)
    // // console.log('newArray', newArray)
    const itemsArray = this.state.provider.reviews.map((Element, i) => <DisplayReview prov={Element} key={i} />)

  
    return (
      <div>
       <h2>Profile</h2>
       <div>
          <div>Name: {this.state.provider.businessName}</div>
          <div> Address: {this.state.provider.address}</div>
          <div> Description: {this.state.provider.description} </div>
       <div>
      </div>
        <form onSubmit={this.handleSubmit}>
          <h4>Leave a Review</h4>
         <textarea type="text" value={this.state.review} onChange={this.handleChange}>
         </textarea> 

         <div>

       <button  type="submit" value="Submit">Post</button>
         </div>
       
     </form>
     
         </div>
         {itemsArray}
     </div>
    
     
    );
  }
}
module.exports = Profile;
