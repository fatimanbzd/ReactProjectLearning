import React, { Component } from "react";
import Axios from "axios";
import Product from "../Product";
import InfiniteScroll from "react-infinite-scroller";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      nextPage: 1,
      isMore: true,
    };
  }
  handelMoreProduct() {
    Axios.get(`http://roocket.org/api/products?page=${this.state.nextPage}`)
      .then((response) => {
        const { current_page, last_page, data } = response.data.data;
        this.setState((prevState) => ({
          productList: [...prevState.productList, ...data],
          nextPage: current_page + 1,
          isMore: current_page !== last_page,
        }));
        // console.log(this.state.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container" style={{ paddingTop: 20 }}>
        <div className="jumbotron">
          <h1 className="display-3">Home Page</h1>
          <p className="lead">Jumbo helper text</p>
          <hr className="my-2" />
          <p>More info</p>
          <p className="lead"></p>
        </div>

        <InfiniteScroll
          className="row"
          pageStart={0}
          loadMore={this.handelMoreProduct.bind(this)}
          hasMore={this.state.isMore}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        >
          {this.state.productList.map((pro, index) => (
            <Product product={pro} key={index} />
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default Home;
