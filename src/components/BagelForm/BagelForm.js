import React, { Component } from "react";
import starFull from "../../media/star_full.png";
import starEmpty from "../../media/star_empty.png";
import "./bagelForm.css";
import axios from "axios";

export default class BagelForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      imageUrl: "",
      rating: 1
    };

    this.add = this.add.bind(this);
  }

  /*
        Change ADD to do AXIOS call
    */
  add() {
    const { name, imageUrl, rating } = this.state;
    /*
            Change ADD to do AXIOS call
        */
    const newBagel = {
      name,
      imageUrl: imageUrl
        ? imageUrl
        : "https://images-na.ssl-images-amazon.com/images/I/31tvh-7KXoL.jpg",
      rating
    };
    axios.post("/api/bagel", newBagel).then(response => {
      // console.log("addBagel", this.props.addBagel());
      this.props.addBagel();
    });
    // this.props.addBagel(name,
    //     imageUrl ? imageUrl : 'https://images-na.ssl-images-amazon.com/images/I/31tvh-7KXoL.jpg',
    //     rating);
    // clear input
    this.setState({
      name: "",
      imageUrl: "",
      rating: 1
    });
  }

  render() {
    const { name, imageUrl, rating } = this.state;

    const stars = [1, 2, 3, 4, 5].map(n => (
      <img
        key={"star" + n}
        className="star"
        src={n <= rating ? starFull : starEmpty}
        onClick={() => this.setState({ rating: n })}
        alt="star"
      />
    ));
    return (
      <div className="bagelForm">
        <label>Bagel Name</label>
        <input
          value={name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <label>Image Url</label>
        <input
          value={imageUrl}
          onChange={e => this.setState({ imageUrl: e.target.value })}
        />
        <label>Rating</label>
        <div className="rating">{stars}</div>
        <button onClick={this.add}>Add Bagel</button>
      </div>
    );
  }
}
