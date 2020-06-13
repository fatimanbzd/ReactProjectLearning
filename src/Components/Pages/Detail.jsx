import React, { Component } from "react";
import Axios from "axios";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    const { params } = this.props.match;
    Axios.get(`http://roocket.org/api/products/${params.id}`)
      .then((response) => {
        const { data } = response.data;
        this.setState({
          product: data,
        });
        console.log(data);
        console.log(this.state.product);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <h2>Product: {product.title}</h2>
        <p>{product.body}</p>
      </div>
    );
  }
}

export default Detail;
