import React from 'react';

const Produto = ({nome, propriedades}) =>{
    return(
        <div style={{border: '1px solid white', margin: "1rem 0", padding: '1rem', width: '100%'}}>
            <p>{nome}</p>
            <ul>
                {propriedades.map((propriedade)=>(
                    <li key={propriedade}>{propriedade}</li>
                ))}
            </ul>
        </div>
    );
}

export default Produto;