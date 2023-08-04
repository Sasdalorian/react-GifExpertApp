import { useState } from "react"

export const AddCategoria = ({ onNewCategoria }) => {

  const [inputValue, setInputValue] = useState('')
  
  const InputChange = (event) => {
    setInputValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    
    if( inputValue.trim().length <= 1) return;

    setInputValue('');
    onNewCategoria( inputValue.trim());
  }


  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text"
        placeholder="Buscar gifs"  
        value={inputValue}
        onChange={ (event) => InputChange(event)}
      />
    </form>
  )
}
