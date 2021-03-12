import React from 'react';
import imagem from './../assets/img/doguito.svg';

import './../assets/css/componentes/cabecalho.css';

function Cabecalho() {

    return (
        <header className="cabecalho container">
            <div className="menu-hamburguer">
                <span className="menu-hambuguer__icone">                    
                </span>
            </div>
            <div className="cabecalho-container">
                <a href="/" className="flex flex--centro">
                    <img className="cabecalho__logo" src={imagem} alt="Logo Doguito"/>
                    <h1 className="cabecalho__titulo">Petshop</h1>
                </a>
            </div>
            <nav className="menu-cabecalho">
                <ul className="menu-items">
                    <li><a href="/" className="menu-item menu-item--entrar">Entrar</a></li>
                    <li><a href="/" className="menu-item menu-item">Produtos</a></li>
                    <li><a href="/" className="menu-item menu-item">Blog</a></li>
                    <li><a href="/sobre" className="menu-item menu-item">Sobre</a></li>
                </ul>
            </nav>
            <div className="menu-cabecalho"></div>
        </header>
    );
}

export default Cabecalho;