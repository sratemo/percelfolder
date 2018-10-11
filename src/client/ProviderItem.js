import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ProviderItem extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  };
  

  render() {
    // put render logic here
    const { businessName } = this.props.prov
    return  (
      <div style={ styles.container }>
      <div>
        <img src='http://profilepicturesdp.com/wp-content/uploads/2018/07/profile-picture.jpg'></img>
      <h4> Business Name: <Link to={`/profile/${businessName}`}> {businessName} </Link></h4>
      <div>
      <span>Description: {this.props.prov.description}</span></div>
      <div>

      <span>Email: {this.props.prov.email}</span></div>
      <div>

      <span>Address: {this.props.prov.address}</span>
    </div>

      </div>
      </div>
    );
  }
}


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: '20px',
    border: '1px solid black',
    flex: 1,
    width: '500px',
   },
};

module.exports = ProviderItem;
 