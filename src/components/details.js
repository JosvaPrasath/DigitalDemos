import React, { Component } from 'react';
import { connect } from 'react-redux'


class Details extends Component {
  render() {

    let totalQuantity = this.props.count;
    return (
      <span className="cart-text"> {totalQuantity} </span>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}
export default connect(mapStateToProps)(Details)