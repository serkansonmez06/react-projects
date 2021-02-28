import React, { Component } from "react";
import ImageList from "./component/ImageList";
import SearchBar from "./component/SearchBar";

 class App extends Component {
  state = { images: [], 
  baseUrl: "https://api.unsplash.com/search/photos",
  autorization:"Client-ID "}
  componentDidMount() { //invoke getProducts 
    this.getJsonData();
  }

  
    getJsonData() {
      fetch(
        "https://api.unsplash.com/search/photos?page=1&query=iphone&client_id=a322a1eeefcea7de09bd284c21489afcb274af47aed1dbda8a9e197546780f93"
      )
        .then(res => res.json())
        .then(res => this.setState({ items: res.results }));
    }
  
 

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar  />
        <p>Found {this.state.image} images</p>
        <ImageList images={this.state.images} />
     
      </div>
    );
  }
}


export default App