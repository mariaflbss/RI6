import * as readline from 'readline';
import Soma from './soma';
import Subtracao from './subtracao';
import Multiplicacao from './multiplicacao';
import Divisao from './divisao';
import Potenciacao from './potenciacao';
import Radiciacao from './radiciacao';
import Bhaskara from './bhaskara';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

async function main() {
    const operacao = String(await ask(`Qual a sua operação?\n`))
    let calculo
    switch (operacao.toLowerCase()) {
        case 'somar':
            calculo = new Soma()
            break;
        case 'subtrair':
            calculo = new Subtracao()
            break;
        case 'multiplicar':
            calculo = new Multiplicacao()
            break;
        case 'dividir':
            calculo = new Divisao()
            break;
        case 'potenciar':
            calculo = new Potenciacao()
            break;
        case 'radicalizar':
            calculo = new Radiciacao()
            break;
        case 'bhaskara':
            calculo = new Bhaskara()
            break;
    }
    let numeros = String(await ask(`Quais os seus números?\n`)).split(' ')
    let numero1 = Number(numeros[0])
    let numero2 = Number(numeros[1])
    let numero3 = Number(numeros[2])
    if (numero3 == null){
        console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}`)
    }else{
        console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2, numero3)}`)
    }
    
    rl.close();
}

main();