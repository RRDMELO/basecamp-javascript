function validaArrays(arr, num) {
  try {
    if (!arr || !num) throw new ReferenceError("Envie os parâmetros!");
    if (typeof arr !== "object")
      throw new TypeError("Envie um elemento do tipo Array!");
    if (typeof num !== "number")
      throw new TypeError("Envie um elemento do tipo Number!");
    if (!Array.isArray(arr)) throw new TypeError("Envie um array válido!");
    if (arr.length !== num) throw new RangeError("Tamanho do array inválido!");

    return arr;
  } catch (e) {	
    if (e instanceof ReferenceError) {
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log(e.message);
    } else {
      console.log(e.message);
    }
  }
}

const arr = [1, 2, 3];
console.log(validaArrays(arr, 3)); // Function will work
console.log(validaArrays(arr, 4)); // Should throw RangeError
console.log(validaArrays("null", 3)); // Should throw TypeError
console.log(validaArrays(arr, 'as')); // Should throw TypeError
console.log(validaArrays(arr)); // Should throw ReferenceError
