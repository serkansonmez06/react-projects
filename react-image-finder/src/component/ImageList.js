import React, { Component } from "react";
import ImageCard from "./ImageCard";


class ImageList extends Component {
  render() {
    console.log(this.props);
    const images = this.props.images.map(image => {
      return <ImageCard key={image.id} image={image} />;
    });
    return (
      <div>
        <div className="image-list"  >{images[0]}</div>
       
      </div>
    );
  }
}

export default ImageList