import React, { Component } from 'react'

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      images: this.props.images
    }

    this.handleNextImage = this.handleNextImage.bind(this);
    this.handlePreviousImage = this.handlePreviousImage.bind(this);
  }

  handleNextImage() {
    this.setState({ index: this.state.index + 1 });
  }

  handlePreviousImage() {
    this.setState({ index: this.state.index - 1 });
  }

  render() {
    
    return (
      <div className="carousel">
        <div className="carousel-container">
          <div className="brush-edges"></div>
          
          <div className="slider" style={{
            'transform': `translateX(calc(-100% * ${this.state.index}))`
          }}>
            {
              this.state.images.map((image, i) => <img key={i} src={image} />)
            }
          </div>

          <div className="actions">
            <button
              className={`action previous ${this.state.index === 0 ? 'disabled' : ''}`}
              onClick={this.handlePreviousImage}
              disabled={this.state.index === 0}
            ></button>

            <button
              className={`action next ${this.state.index === this.state.images.length - 1 ? 'disabled' : ''}`}
              onClick={this.handleNextImage}
              disabled={this.state.index === this.state.images.length - 1}
            ></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Carousel