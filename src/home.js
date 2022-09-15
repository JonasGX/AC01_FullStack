import React from 'react';
import { Link } from "react-router-dom";

export default function Usuario(){
   return (
       <div>
           <h1>Home</h1>
           <Link to="/home">retornar a página inicial</Link>
       </div>
   );
}
