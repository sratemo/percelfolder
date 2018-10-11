import React, { Component } from 'react';


class DisplayReview extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  };
  

  render() {
    // put render logic here
    return  (
      <div style={ styles.container }>
        {this.props.prov}
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


module.exports = DisplayReview;
