import React, { useState } from 'react';
import Banner from '../../Banner/Banner.js';
import Footer from '../../Footer/Footer.js';
import Formulario from '../../Formulario/Formulario.js';
import Time from '../../Time/Time.js';

function Home(){

    const times = [
        {
            Nome: 'Programação',
            corPrimaria: '#57C278',
            corSecundaria: '#D9F7E9'
        },
        {
            Nome: 'Front-End',
            corPrimaria: '#82CFFA',
            corSecundaria: '#E8F8FF'
        },
        {
            Nome: 'Data Science',
            corPrimaria: '#A6D157',
            corSecundaria: '#F0F8E2'
        },
        {
            Nome: 'Devops',
            corPrimaria: '#E06B69',
            corSecundaria: '#FDE7E8'
        },
        {
            Nome: 'UX e Design',
            corPrimaria: '#D86EBF',
            corSecundaria: '#FAE5F5'
        },
        {
            Nome: 'Mobile',
            corPrimaria: '#FEBA05',
            corSecundaria: '#FFF5D9'
        },
        {
            Nome: 'Inovação e Gestão',
            corPrimaria: '#FF8A29',
            corSecundaria: '#FFEEDF'
        }

    ]

    const [colaboradores, setColaboradores] = useState([])

    const aoNovoColaboradorAdicionado = (colaborador) => {
        setColaboradores([...colaboradores, colaborador]);
    }

    return (
        <>
            <Banner />
            <Formulario times={times.map(time => time.Nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
            {
                times.map(time => {
                    return <Time 
                    nome={time.Nome} 
                    key={time.Nome} 
                    corPrimaria={time.corPrimaria} 
                    corSecundaria={time.corSecundaria}
                    colaboradores={colaboradores.filter(colaborador => colaborador.time === time.Nome)}
                    />
                })
            }
            <Footer />
        </>
    );
}

export default Home;