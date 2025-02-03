import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS 임포트

export const ThComponent = ({title}) => {

  return (
    <div>
        <th>{title}</th>
    </div>
  )
}

export default ThComponent;