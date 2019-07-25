import React, { Component } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';


class PhotoContainer extends Component {

  render() {
    // create url string for image links
    const imageLinks = this.props.photos.map( photo => {
      return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
    })

    return(        
        <div className="photo-container">
          <h2>{this.props.match.params.tag}</h2>
          <ul>
            {imageLinks.map( (link, index) => <Photo imageLink={link} key={index}/> )}
            { imageLinks.length < 1 && <NotFound /> }
          </ul>
        </div>        
    )     
  }

}

export default PhotoContainer;