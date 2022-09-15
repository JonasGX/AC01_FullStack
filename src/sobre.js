import React from 'react';
import { Link } from "react-router-dom";

export default function Sobre(){
   return (
       <div>
           <h1>Falando Sobre a página</h1>
           <Link to="/home">retornar a página inicial</Link>
       </div>
   );
}