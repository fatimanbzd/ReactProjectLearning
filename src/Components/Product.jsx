import React, { Component } from "react";

class Product extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="col-sm-3" style={{ marginBottom: 10 }}>
        <div className="card shadow-sm">
          <img src={product.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.body.substring(0, 100)}...</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <a
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  href={`Detail/${product.id}`}
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
