const nomes = ["Ana", "Bruno", "Carlos"];
nomes.forEach(nome => console.log(`Olá, ${nome}!`));
const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());

const precos = [10, 25, 40, 5, 60];
const precosAcimaDe20 = precos.filter(preco => preco > 20);
const somaPrecos = precos.reduce((acumulador, preco) => acumulador + preco, 0);

const produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Mochila", preco: 80 },
    { nome: "Estojo", preco: 25 }
];
const nomesProdutos = produtos.map(p => p.nome);
const produtosBaratos = produtos.filter(p => p.preco < 50);
const somaProdutos = produtos.reduce((acumulador, p) => acumulador + p.preco, 0);
produtos.forEach(p => console.log(`${p.nome}: R$ ${p.preco}`));


document.querySelector("#titulo").textContent = "Blog do Aluno";

const paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach(p => console.log(p.textContent));

const lista = document.querySelector("#lista");
lista.innerHTML += "<li>Item inserido via innerHTML 1</li><li>Item inserido via innerHTML 2</li>";

const terceiroItem = document.createElement("li");
terceiroItem.textContent = "Terceiro item";
lista.append(terceiroItem);

terceiroItem.classList.add("destaque");
console.log(terceiroItem.classList.contains("destaque"));

const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];
tarefas.forEach(tarefa => {
    const li = document.createElement("li");
    li.textContent = tarefa;
    lista.append(li);
});

const primeiroLi = lista.querySelector("li");
if (primeiroLi) {
    primeiroLi.classList.add("feito");
}

console.log(document.querySelectorAll("li").length);


const botao = document.querySelector("#botao");
botao.addEventListener("click", () => console.log("Clicou!"));
botao.addEventListener("mouseover", () => botao.textContent = "Pode clicar!");

const inputNome = document.querySelector("#nome");
inputNome.addEventListener("keyup", (e) => console.log(e.target.value));

lista.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("feito");
        console.log(e.target.textContent);
    }
});

const novoLiDinamico = document.createElement("li");
novoLiDinamico.textContent = "Novo item para testar Event Delegation";
lista.append(novoLiDinamico);

const formulario = document.querySelector("#formulario");
const inputTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const textoTarefa = inputTarefa.value.trim();
    
    if (textoTarefa !== "") {
        const novaLi = document.createElement("li");
        novaLi.textContent = textoTarefa;
        lista.append(novaLi);
        inputTarefa.value = "";
    }
});