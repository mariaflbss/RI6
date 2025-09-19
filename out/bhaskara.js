"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var divisao_1 = require("./divisao");
var radiciacao_1 = require("./radiciacao");
var soma_1 = require("./soma");
var subtracao_1 = require("./subtracao");
var potenciacao_1 = require("./potenciacao");
var multiplicacao_1 = require("./multiplicacao");
var Bhaskara = /** @class */ (function () {
    function Bhaskara() {
    }
    Bhaskara.prototype.calcular = function (a, b, c) {
        var multiplicacao = new multiplicacao_1.default();
        var potenciacao = new potenciacao_1.default();
        var radiciacao = new radiciacao_1.default();
        var soma = new soma_1.default();
        var subtracao = new subtracao_1.default();
        var divisao = new divisao_1.default();
        var delta = subtracao.calcular(potenciacao.calcular(b, 2), multiplicacao.calcular(multiplicacao.calcular(4, a), c));
        return "".concat(divisao.calcular(soma.calcular(-b, radiciacao.calcular(delta, 2)), multiplicacao.calcular(2, a)), " e ").concat(divisao.calcular(subtracao.calcular(-b, radiciacao.calcular(delta, 2)), multiplicacao.calcular(2, a)));
    };
    return Bhaskara;
}());
exports.default = Bhaskara;
