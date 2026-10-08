let pontos = 50;
pontos += 10;
console.log("Pontos:", pontos);

const MAX_PONTOS = 100;
try {
    MAX_PONTOS = 150;
} catch (erro) {
    console.error("Erro capturado:", erro.name);
    // Explicação exigida pela atividade:
    // O erro TypeError é gerado porque uma variável declarada com 'const' 
    // não pode sofrer reatribuição de valor após a sua inicialização.
}

let tipoString = "Desenvolvimento";
let tipoNumber = 2026;
let tipoBoolean = true;
let tipoUndefined = undefined;
let tipoNull = null;

console.log(typeof tipoString);
console.log(typeof tipoNumber);
console.log(typeof tipoBoolean);
console.log(typeof tipoUndefined);
console.log(typeof tipoNull);

let linguagem = "JavaScript";
let dificuldade = "prática";
let fraseTemplate = `Aprender ${linguagem} requer muita ${dificuldade}.`;
let fraseConcat = "Aprender " + linguagem + " requer muita " + dificuldade + ".";

console.log(fraseTemplate);
console.log(fraseConcat);

console.log(ehMaiorDeIdade(22)); 

function ehMaiorDeIdade(idade) {
    return idade >= 18;
}

try {
    console.log(ehMaiorDeIdadeExpressao(15));
} catch (erro) {
    console.error("Erro capturado:", erro.name);
}

const ehMaiorDeIdadeExpressao = function(idade) {
    return idade >= 18;
};

function dobroDeclarada(n) { return n * 2; }
const dobroExpressao = function(n) { return n * 2; };
const dobroArrow = n => n * 2;

const triplo = (n = 1) => n * 3;
console.log(triplo());

function classificarNota(nota) {
    if (nota >= 6) {
        console.log(`Nota ${nota}: Aprovado`);
    } else {
        console.log(`Nota ${nota}: Reprovado`);
    }
}
classificarNota(7.5);
classificarNota(4);

let corSemaforo = "amarelo";
switch (corSemaforo) {
    case "vermelho":
        console.log("Pare");
        break;
    case "amarelo":
        console.log("Atenção");
        break;
    case "verde":
        console.log("Siga");
        break;
    default:
        console.log("Cor inválida");
}

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

let contador = 5;
while (contador >= 1) {
    console.log(contador);
    contador--;
}

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} é par`);
    } else {
        console.log(`${i} é ímpar`);
    }
}

let numeroTeste = 1;
while (numeroTeste <= 20) {
    if (numeroTeste % 2 === 0) {
        console.log(`${numeroTeste} é par`);
    } else {
        console.log(`${numeroTeste} é ímpar`);
    }
    numeroTeste++;
}

function diaDaSemana(numero) {
    switch (numero) {
        case 1: return "Domingo";
        case 2: return "Segunda-feira";
        case 3: return "Terça-feira";
        case 4: return "Quarta-feira";
        case 5: return "Quinta-feira";
        case 6: return "Sexta-feira";
        case 7: return "Sábado";
        default: return "Número inválido";
    }
}

console.log(diaDaSemana(1));
console.log(diaDaSemana(8));
