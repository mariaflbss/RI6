import Divisao from "./divisao"
import Radiciacao from "./radiciacao"
import Soma from "./soma"
import Subtracao from "./subtracao"
import Potenciacao from './potenciacao';
import Multiplicacao from './multiplicacao';

export default class Bhaskara {
    public calcular(a: number, b: number, c: number): string {
        let multiplicacao = new Multiplicacao()
        let potenciacao = new Potenciacao()
        let radiciacao = new Radiciacao()
        let soma = new Soma()
        let subtracao = new Subtracao()
        let divisao = new Divisao()
        let delta = subtracao.calcular(potenciacao.calcular(b, 2), multiplicacao.calcular(multiplicacao.calcular(4, a), c))
        return `${divisao.calcular(soma.calcular(-b, radiciacao.calcular(delta, 2)), multiplicacao.calcular(2, a))} e ${divisao.calcular(subtracao.calcular(-b, radiciacao.calcular(delta, 2)), multiplicacao.calcular(2, a))}`
    }
}
