import React, { Component } from "react";
import BagelDisplay from "./components/BagelDisplay/BagelDisplay";
import BagelForm from "./components/BagelForm/BagelForm";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bagels: [
        {
          name: "Onion Bagel",
          imageUrl:
            "http://cdn.shopify.com/s/files/1/1749/6693/products/onion-bagel_1024x1024.png?v=1531755332",
          rating: 4
        },
        {
          name: "Blueberry Bagel",
          imageUrl:
            "http://cdn.shopify.com/s/files/1/1749/6693/products/blueberry_1024x1024.jpg?v=1531755323",
          rating: 5
        },
        {
          name: "Wheat Bagel",
          imageUrl:
            "https://bagelbiz.com/wp-content/uploads/2017/11/Bagel-Biz-Whole-Wheat-Bagel.png",
          rating: 2
        },
        {
          name: "Bantam Bagles",
          imageUrl:
            "https://hips.hearstapps.com/del.h-cdn.co/assets/16/41/1476297779-delish-bantam-bagels-2.jpg",
          rating: 6
        }
      ]
    };

    this.addBagel = this.addBagel.bind(this);
    this.getBagels = this.getBagels.bind(this);
    // binding allows methods to have access to constructor and this.state
  }

  componentDidMount() {
    this.getBagels();
  }

  getBagels() {
    axios.get("/api/bagels").then(response => {
      this.setState({ bagels: response.data });
    });
  }
  addBagel() {
    this.getBagels();
  }

  render() {
    const { bagels } = this.state;
    const allTheBagels = bagels.map((bagel, i) => (
      <BagelDisplay key={bagel.name + i} bagel={bagel} />
    ));

    return (
      <div className="App">
        <div className="container">
          <h1>WpX10 Bagel Palooza</h1>
          <div className="bagelContainer">{allTheBagels}</div>
        </div>
        <div className="container">
          <h1>Add NEW Bagels</h1>
          <BagelForm addBagel={this.addBagel} />
        </div>
      </div>
    );
  }
}

export default App;
