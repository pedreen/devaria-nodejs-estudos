try{

    /* Criando lista de produtos */
const listaDeProdutosDisponiveis = [
    'Pão',
    'Leite',
    'Café',
    'Laranja',
    'Macarrão',
    'Sabonete',
    'Detergente'    
];

/* Criando lista de argumentos */
const listaDeArgumentos = process.argv.slice(2);

const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto =>{
    return listaDeArgumentos.find(argumento => argumento === produto);
})

listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nós temos: ${produto}`));

const listaDeProdutosSolicitadoNaoDisponiveis = listaDeArgumentos.filter(argumento => {
    return !listaDeProdutosDisponiveis.find(produto => produto === argumento)
})

listaDeProdutosSolicitadoNaoDisponiveis.forEach(argumento => console.log(`Este produto nós não temos: ${argumento} `));

listaDeProdutosDisponiveis.sort();
listaDeProdutosDisponiveis.forEach(produto => console.log(`Este produto está disponível: ${produto}`));


} catch(e){
    console.log('Não foi possível executar o pedido de compra.')
}
