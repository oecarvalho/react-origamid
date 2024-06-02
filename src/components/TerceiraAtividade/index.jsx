import { useState } from "react";
import Produtos from "./Produtos";

const TerceiraAtividade = () =>{
    const [dados, setDados] = useState(null);
    const [carregando, setCarregando] = useState(null);

    async function handleClick(event){
        setCarregando(true);
        const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
        const json = await response.json();

        setDados(json);
        setCarregando(false)
    }
    
    return(
        <>
            <button style={{margin: '.5rem'}} onClick={handleClick}>smartphone</button>
            <button style={{margin: '.5rem'}} onClick={handleClick}>notebook</button>
            <button style={{margin: '.5rem'}} onClick={handleClick}>tablet</button>
            {carregando && <p>Carregando...</p>}
            {!carregando && dados && <Produtos dados={dados}/>}
        </>
    );
}

export default TerceiraAtividade;