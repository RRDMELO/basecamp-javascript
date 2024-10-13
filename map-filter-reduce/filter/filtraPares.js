function filtraPares(arr, callback) {
    if (!arr || !arr.length) {
        return callback(new Error('Array inválido'), null);
    }

    const filteredArr = arr.filter(item => item % 2 === 0);
    return callback(null, filteredArr);
}

function resultado(err, result) {
    if (err) {
        console.error('Erro:', err.message);
    } else {
        console.log('Números pares:', result);
    }
}

filtraPares([1, 2, 3, 4, 5, 6, 7, 8, 9], resultado);