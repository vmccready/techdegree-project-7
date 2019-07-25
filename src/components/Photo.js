import React from 'react';

const Photo = (props) => {
  return(
    <li>
      <img src={props.imageLink} alt="" />
    </li>
  )
}

export default Photo;