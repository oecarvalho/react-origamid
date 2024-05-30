// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };
  
  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };
  
  const PrimeiraAtividade = () => {
    const dados = mario;
    const total = dados.compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b)
  
    return (
      <div>
        <p> Cliente: {dados.cliente}</p>
        <p>Idade: {dados.idade}</p>
        <p>Situação: {''} 
          <span style={{color: dados.ativa ? 'green' : 'red' }}>
            {dados.ativa ? 'Ativa' : 'Inativa'} 
          </span> 
        </p>
        <p>Total Gasto: R$ {total}</p>
  
        {/**o && verifica se é verdadeiro e continua, se não ele trava e não faz mais nada. */}
        {total > 10000 && <strong>Você está gastando muito!</strong>} 
      </div>
    )
  };
  
  export default PrimeiraAtividade;