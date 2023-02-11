import React from 'react';

const CamposTextos = (props) => {

    let classname = `input input-${props.label}`;

    // let valor = 'Nicolas';


    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div>
            <label for={props.label}>{props.label}:</label>
            <input value={props.valor} onChange={aoDigitado} type='text' required={props.obrigatorio} className={classname} placeholder={props.placeholder} id={props.label} />
        </div>
    );
}

export default CamposTextos;