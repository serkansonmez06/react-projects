// // import React, { useState } from "react";
// // import axios from "axios";
// // import ReactDOM from "react-dom";

// // import "./styles.css";

// // function App() {
// //   const [imageArray, setImageArray] = useState([]);
// //   const [searchItem, setSearchItem] = useState([]);
 
// //   const Search = async () => {
// //     const response = await axios.get("https://api.unsplash.com/search/photos", {
// //       params: { query: searchItem },
// //       headers: {
// //         Authorization:
// //           "Client-ID age-dmYcxYinzenv4oHzL4f9_NJWqU3otOzhdlhAQYA"
// //       }
// //     });
// //     setImageArray(response.data.results);
// //     console.log(response.data.results)
// //   };
// //   return (
// //     <div>
// //       <input
// //         placeholder="enter item here"
// //         onChange={event => setSearchItem(event.target.value)}
// //       />
// //       <button onClick={Search}>Click here</button>
// //       <div>
       
// //         <br />
// //         {imageArray.map(image => {
// //           return (
// //             <img key={image.id} alt="" src={image.urls.small} height="100px" />
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // }

// // const rootElement = document.getElementById("root");
// // ReactDOM.render(<App />, rootElement);

// import React, { Component } from "react";

// import ImageList from "./component/ImageList";
// import SearchBar from "./component/SearchBar";
// //   componentDidMount() { //invoke getProducts 
// // this.getJsonData();
// // }

// // getJsonData() {
// //   fetch(
// //     "https://api.unsplash.com/search/photos?page=1&query=iphone&client_id=a322a1eeefcea7de09bd284c21489afcb274af47aed1dbda8a9e197546780f93"
// //   )
// //     .then(res => res.json())
// //     .then(res => this.setState({ items: res.results }));
// // }

// export default class App extends Component {
//   state = { images: [], 
//   baseUrl: "https://api.unsplash.com/search/photos",
//   autorization:"Client-ID "}
//   componentDidMount() { //invoke getProducts 
//     this.getJsonData();
//   }

  
//     getJsonData() {
//       fetch(
//         "https://api.unsplash.com/search/photos?page=1&query=iphone&client_id=a322a1eeefcea7de09bd284c21489afcb274af47aed1dbda8a9e197546780f93"
//       )
//         .then(res => res.json())
//         .then(res => this.setState({ items: res.results }));
//     }
  
 

//   render() {
//     return (
//       <div className="ui container" style={{ marginTop: "10px" }}>
//         <SearchBar  />
//         <p>Found {this.state.image} images</p>
//         <ImageList images={this.state.images} />
//         <button onClick={this.onSearchSubmit}>subnit</button>
//       </div>
//     );
//   }
// }


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(

    <App />
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
