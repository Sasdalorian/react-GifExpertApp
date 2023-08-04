import { useState } from "react";

import { AddCategoria, GifGrid } from "./components";


export const GifExpertApp = () => {

  const [categorias, setCategorias] = useState(['One Punch'])

  const onAddCategoria = (newCategoria) => {
    if ( categorias.includes(newCategoria)) return;
    
    setCategorias([newCategoria, ...categorias]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategoria onNewCategoria={ (value) => onAddCategoria(value)} />
      {categorias.map( categoria => (
        <GifGrid key={categoria} categoria={categoria}/>
      ))}   
    </>
  );
}