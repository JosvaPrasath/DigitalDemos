import React, { Component } from 'react';
import { connect } from 'react-redux'
import "./css/styles.css";

import { addToList, removeFromList } from './actions/cart-actions';

 class Home extends Component {

    handleAdd = (id) => {
        this.props.addToList(id);
    }

    handleRemove = (id) => {
        this.props.removeFromList(id);
    }
   
    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.image} alt={item.name}/>
                        </div>

                        <div className="card-content">
                        <span className="card-title">{item.name}</span>
                            <span to="/" className="btn-floating halfway-left waves-effect waves-light red">
                                <i className="material-icons" onClick={()=>{this.handleRemove(item.id)}}>remove</i>
                            </span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red">
                                <i className="material-icons" onClick={()=>{this.handleAdd(item.id)}}>add</i>
                            </span>
                            <p>{item.type}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                 </div>
            )
        })
        return(
            <div className="container product-container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }

  const mapDispatchToProps = (dispatch)=>{
    return {
      addToList: (id) => {dispatch(addToList(id))},
      removeFromList: (id) => {dispatch(removeFromList(id))}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home)