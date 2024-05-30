import Header from "./Header";
import Home from "./Home";
import Produtos from "./Produtos";


const DesafioUnidade = () => {
    const pathName = window.location.pathname;

    let Paginacao;
    
    if(pathName === '/produtos'){
        Paginacao = Produtos;
    } else {
        Paginacao = Home;
    }

    return(
        <>
            <Header/>
            <Paginacao/> 
        </>
    );
}

export default DesafioUnidade;