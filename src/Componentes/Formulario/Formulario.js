import React, { useState } from 'react';
import Botao from '../Botao/Botao.js';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa.js';
import CamposTextos from './CamposTextos/CamposTextos.js';
import './Formulario.css';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (elemento) => {
        elemento.preventDefault();
        props.aoColaboradorCadastrado({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        });
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }


    return(
        <section className='bloco-formulario'>
            <form className='formulario' onSubmit={aoSalvar}>
                <h1 className='formulario__titulo'>Preencha os dados para criar o card do colaborador.</h1>
                <CamposTextos 
                label='Nome' 
                obrigatorio={true} 
                placeholder='Digite seu nome'
                valor={nome}
                aoAlterado={valor => setNome(valor)}
                />
                <CamposTextos 
                label='Cargo' 
                obrigatorio={true} 
                placeholder='Digite seu cargo'
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
                />
                <CamposTextos 
                label='Imagem' 
                placeholder='Digite o endereço da imagem'
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                label='Time' 
                obrigatorio={true} 
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
                />
                <Botao texto='Criar Card' classname='formulario__botao' type='submit'>
                    Criar Card
                </Botao>
                
            </form>
        </section>
    );
}

export default Formulario;


/* <div>
                    <label for='nome'>Nome:</label> <br />
                    <input type='text' className='input input-nome' placeholder='Digite seu nome' id='nome' />
                </div>
                <div>
                    <label for='cargo'>Cargo:</label> <br />
                    <input type='text' className='input input-cargo' placeholder='Digite seu cargo' id='cargo' />
                 </div>
                 <div>
                    <label for='imagem'>Imagem:</label> <br />
                    <input type='text' className='input input-imagem' placeholder='Informe o endereço da imagem' id='imagem' />
                 </div>
                 <div>
                    <label for='time'>Time:</label> <br />
                    <input type='text' className='input input-time' id='time' />
                 </div>

                 */