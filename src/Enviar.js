import React from 'react';
import { Link } from "react-router-dom";
import './cadastro.js'

export default function Enviar() {
    return (
        <div>
            <Link to="/home">retornar a página inicial</Link>
            <p>Lidando com dados do cadastro</p>
        </div>
    );
}
