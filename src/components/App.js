import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SearchForm from './SearchForm';
import MainNav from './MainNav';
import PhotoContainer from './PhotoContainer';
import PageNotFound from './PageNotFound';
import apiKey from '../config.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  componentDidMount(searchTerm = 'cats') {
    // default images on page load
    this.handleSearchTag(searchTerm)
  }

  handleSearchTag = (searchTerm) => {
    this.fetchData(searchTerm);
  }

  fetchData = (searchTerm) => {
    this.setState({ loading: true });
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {
      this.setState({ 
        photos: responseData.photos.photo,
        loading: false 
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  // Show "loading" or images
  mountPhotos = (props) => {
    if(this.state.loading) {
      return (<h2>Loading...</h2>)
    } else {
      return(<PhotoContainer {...props} photos={this.state.photos} key="photos"/>)
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm searchTag={this.handleSearchTag}/>
          <MainNav searchTag={this.handleSearchTag}/>
          <Switch>
            <Route exact path="/" render={this.mountPhotos} />
            <Route path="/:tag" render={this.mountPhotos} />
            <Route component={PageNotFound} />
          </Switch>

        </div>      
      </BrowserRouter>
    );    
  }

}

export default App;
