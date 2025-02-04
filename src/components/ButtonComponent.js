import React from 'react'

export const ButtonComponent = (props) => {

    const {name, type, color, onAction} = props;
    let label = '';
    let icon = '';
    let width = '100px';

    switch(type) {
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
