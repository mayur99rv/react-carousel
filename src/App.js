import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="head">
        <h1> Carousel demo </h1>
      </div>
      {/* <Counter /> */}
      <div className="carousel">
        <Carousel />
      </div>
    </>
  );
}

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state.currentIndex = 0;
  }
  state = {
    currentIndex: 0,
    imgs: [
      "./images/1.jpg",
      "./images/2.jpg",
      "./images/3.jpg",
      "./images/4.jpg",
      "./images/5.jpg",
      "./images/6.jpg",
      "./images/7.jpg",
    ],
  };
  updateImage() {
    this.setState({
      currentIndex: (this.state.currentIndex + 1) % this.state.imgs.length,
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.updateImage();
    }, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="carousel-container">
        <div className="carousel-slide">
          <img src={this.state.imgs[this.state.currentIndex]} alt="imagea" />
        </div>
        <div className="collection">
          {this.state.imgs.map((img, index) => {
            return (
              <div
                className={
                  index === this.state.currentIndex ? "slide active" : "slide"
                }
                key={index}
                onClick={() => {
                  this.setState({ currentIndex: index });
                }}
              >
                <img src={img} alt="imagea" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}


export default App;
