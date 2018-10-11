import React, { Component } from 'react';
import ProviderItem from '../client/ProviderItem';

// Feed contains multiple FeedItems
// Put AJAX in this Component
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      providers: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/home')
      .then(response => response.json())
      .then(data => this.setState({ providers: data }))
      .catch(err => console.log(err));
  }
 
  render() {
    const itemsArray = this.state.providers.map((Element, i) => <ProviderItem prov={Element} key={i}/>)

 
    return (
      <div>
       <h2>Home</h2>
       <div className= 'homeDiv'>
       {itemsArray}
        </div>
     </div>
    );
  }
}
module.exports = Home;
