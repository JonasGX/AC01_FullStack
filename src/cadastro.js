import React from 'react';
import { Link } from "react-router-dom";
import './cadastro.css'
import './Enviar.js'

export default function Cadastro() {
    return (
        <div>
            <Link to="/home">retornar a página inicial</Link>
            <form name="meu_form" class="corpo">
                <h1>Cadastre</h1>
                <input type="text" id="nomeid" placeholder="Exemplo Sobrenome" required="required" name="nome" />
                <label for="nome">Nome</label>
                <input type="tel" id="foneid" placeholder="(xx)xx-xx-xx-xx" name="fone" />
                <label for="fone">Telefone</label>
                <input type="email" id="emailid" placeholder="exemplo@mail.com" name="email" />
                <label for="email" id="enailid">Email</label> 
                <textarea placeholder="Escreva um pouco sobre você"></textarea>
                <Link to='/Enviar' type="submit" id="enviar">Enviar</Link>
            </form>
        </div>
    );
}
