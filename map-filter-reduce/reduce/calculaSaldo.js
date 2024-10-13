const lista = [
    { nome: 'sabao em po', preco: 25 },
    { nome: 'cereal', preco: 18 },
    { nome: 'toalha', preco: 25 }
];

const saldo = 100;

function calculaSaldo(saldo, itens) {
    if (typeof saldo !== 'number' || !Array.isArray(itens) || itens.length === 0) {
        return 'Envie todos os parâmetros';
    }

    const saldoFinal = itens.reduce((acc, item) => {
        if (typeof item.preco !== 'number') {
            throw new TypeError('Todos os preços devem ser números');
        }
        console.log('Saldo acumulado anterior:', acc);
        console.log('Preço do item atual:', item.preco);
        return acc - item.preco;
    }, saldo);

    return `O saldo final será de ${saldoFinal} reais`;
}

try {
    console.log(calculaSaldo(saldo, lista));
} catch (e) {
    console.error(e.message);
}
