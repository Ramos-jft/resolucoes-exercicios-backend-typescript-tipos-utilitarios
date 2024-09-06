type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao
}

type Endereco = {
    cep: string,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string
}

type NovoCarrinho = Omit<Carrinho, 'tipoTransacao'> & {
    endereco: Endereco
    tipoTransacao: Lowercase<'credito' | 'Debito'>;
};

const venda: NovoCarrinho = {
    item: {
        nome: 'Celular',
        descricao: 'Ihpne 15',
        valor: 800000
    },
    qtd: 2,
    desconto: 10,
    frete: 10000,
    tipoTransacao: 'debito',
    cartao: {
        numero: 1234 - 5678 - 9101,
        validade: '12/30',
        nome: 'Lucas Ramos',
        cvv: 123
    },
    endereco: {
        cep: '12345-678',
        rua: 'Marginal Santana',
        bairro: 'Nova Europa',
        cidade: 'Catanduva',
        estado: 'SP'
    }
};

// type NovoCarrinho = {
//     item: Item,
//     qtd: number,
//     desconto: number,
//     frete: number,
//     tipoTransacao: Lowercase<'credito' | 'Debito'>,
//     cartao: Cartao,
//     endereco: Endereco
// };