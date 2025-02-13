import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


export const ButtonComponent = (props) => {

    const {name, color, onAction} = props;
    let label = '';
    let icon = '';
    let width = '100px';

    switch(name) {
        case 'add' :
            label = '등록하기';
            icon = 'la la-plus';
            width = '105px';
            break;
    }

  return (
    <div onClick={() => onAction(`button-click-${name}`)}>
        <button className={`${color}`} style={{width}}>
            <i className={icon}></i>
        </button>
    </div>
  )
}
