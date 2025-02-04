import React from 'react'
import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS 임포트

export const ThComponent = ({title}) => {

    console.log("title : ", title[0]);
    for(const name of title) {
        console.log("title ? ", name);
    }
  return (
    <>
      {title.map((name, index) => (
        <th key={index}>{name}</th> 
      ))}
    </>

  )
}

export default ThComponent;