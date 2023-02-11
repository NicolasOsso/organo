import React from 'react';
import './Botao.css';

const Botao = (props) => {
    return (
        <button className={props.classname}>{props.children}</button>
    );
}

export default Botao;