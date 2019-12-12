import React, { Component } from 'react';
import { connect } from 'react-redux'
import "./css/styles.css";

class ProductDetails extends Component {
    render() {

        // to get the id param from the url
        let prodId = this.props.match.params.id;
        
        let item = this.props.items.find(item => prodId === item.id);
        
        let selectedItem = item ?
            (
                <div className="card" key={item.id}>
                    <div className="card-image">
                        <img src={item.image} alt={item.name} className="" />
                    </div>

                    <div className="card-content">
                       <span className="card-title"> <strong> Name: </strong> {item.name} </span>
                        <p> <strong> Type: </strong> {item.type}</p>
                        <p className="item-desc"> <strong> Description: </strong> {item.desc} </p>
                        <p><strong>Price: {item.price}$</strong></p>
                        <p>
                            <b>Quantity: {item.quantity}</b>
                        </p>
                    </div>

                </div>
            ) :
            ( <p>Item not available</p> )

        return (
            <div className="container product-details-container">
                <div className="box">
                    {selectedItem}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        count: state.count
    }
}

export default connect(mapStateToProps)(ProductDetails)