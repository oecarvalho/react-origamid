// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado

import Produto from "../Produto";
import Titulo from "../Titulo";

// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];


const Produtos = () => {
    return(
        <section>
            <Titulo texto='Produtos'/>
            {produtos.map((produto) =>(
                <Produto key={produto.nome} nome={produto.nome} propriedades={produto.propriedades}/>
            ))}
        </section>
    )
}

export default Produtos;