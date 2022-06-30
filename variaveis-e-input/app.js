/* Criando uma interface de comunicação com o usuário */
const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const minhaPrimeiraConstanteString = 'Minha primeira constante';
console.log(minhaPrimeiraConstanteString);

/* Criando uma variável de escopo e interagindo com o usuário   */
let leituraDeCampo;
readLine.question('Informe sua idade:', input => {
    leituraDeCampo = input;
    console.log(`O usuário possui: ${leituraDeCampo} anos`);
});