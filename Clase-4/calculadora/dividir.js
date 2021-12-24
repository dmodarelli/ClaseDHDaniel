//operacion de dividir con 2 numeros

let dividir = function (num1,num2){
    if (num2 === 0) {
        return 'No se puede dividir por 0';
    }
    return num1 / num2;

}
module.exports = dividir;