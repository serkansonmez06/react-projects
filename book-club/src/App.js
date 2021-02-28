import React, { Component } from 'react';
import Header from '../src/component/Header';
import './App.css';
import Books from '../src/component/Books';
import Favorites from '../src/component/Favorites';
import LogIn from '../src/component/LogIn'
import SignUp from '../src/component/SignUp'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


export default class App extends Component {

  state= {
    favorites: [],
    isLoggedIn: false,  
    isFavorite: true
  }

  setIsLoggedIn = (value) => {
    this.setState({isLoggedIn: value})
  }

  setIsFavorite = (value) => {
    this.setState({isFavorite: value})
  }

  displayFavorite = (book) => {
    this.setState({
      favorites: [...this.state.favorites, book]
    })
  }

  removeFromFavorites = (book) => {
    const filtered = this.state.favorites.filter(fav => fav.id !== book.id)
    this.setState({
      favorites: filtered
    })
  }
 
  getBooks = () => {
    fetch("http://localhost:3000/favorites", {
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    }).then(response => response.json())
        .then(books => this.setState({favorites: books}))
        .catch(error => console.error(error))
  }
  
  componentDidMount(){
    this.getBooks()
  }


  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route 
              path="/books" 
              render={(props) => 
                <Books
                  {...props}
                  displayFavorite={this.displayFavorite}
                  setIsFavorite={this.setIsFavorite}
                />
              }
            />
            <Route 
              path='/favorites'
              render={(props) =>
                <Favorites
                  {...props} 
                  favorites={this.state.favorites} 
                  removeFromFavorites={this.removeFromFavorites}
                />
              }
            />
            <Route 
              path='/login'
              render={(props) =>
                <LogIn
                getBooks={this.getBooks}
                setIsLoggedIn={this.setIsLoggedIn} {...props}
                />
              }
            />
            <Route 
              path='/signup'
              render={(props) =>
                <SignUp
                 
                />
              }
            />
          </Switch>
        </Router>
       
      </div>
    )
  }
}
