const pedidos = [
    { cliente: "Bia", valor: 120.00, status: "pago" },
    { cliente: "", valor: 50.00, status: "pago" },
    { cliente: "Carlos", valor: -10, status: "pendente" },
    { cliente: "Daniel", valor: 80.50, status: "pago" }
];

const pedidosValidos = pedidos.filter(p => p.cliente.trim() !== "" && p.valor > 0);
const pedidosPagos = pedidosValidos.filter(p => p.status === "pago");
const totalFaturado = pedidosPagos.reduce((acc, p) => acc + p.valor, 0);

pedidosPagos.forEach(p => console.log(`${p.cliente} - R$ ${p.valor.toFixed(2)}`));
console.log(`Total Faturado: R$ ${totalFaturado.toFixed(2)}`);


const formCep = document.querySelector("#form-cep");
const inputCep = document.querySelector("#input-cep");
const btnCep = document.querySelector("#btn-cep");
const statusCep = document.querySelector("#status-cep");
const resultadoCep = document.querySelector("#resultado-cep");
const historicoCepLista = document.querySelector("#historico-cep");
let historicoCEPs = [];

formCep.addEventListener("submit", async (e) => {
    e.preventDefault();
    const cepRaw = inputCep.value.trim();
    const cep = cepRaw.replace(/\D/g, "");

    if (cep.length !== 8) {
        statusCep.textContent = "CEP inválido. Digite exatamente 8 dígitos.";
        return;
    }

    btnCep.disabled = true;
    statusCep.textContent = "Buscando...";
    resultadoCep.replaceChildren();

    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
            signal: AbortSignal.timeout(5000)
        });

        if (!resposta.ok) {
            throw new Error("Falha na conexão HTTP.");
        }

        const dados = await resposta.json();

        if (dados.erro) {
            statusCep.textContent = "CEP não encontrado.";
        } else {
            statusCep.textContent = "";
            
            const campos = [
                { termo: "Rua", definicao: dados.logradouro },
                { termo: "Bairro", definicao: dados.bairro },
                { termo: "Cidade", definicao: dados.localidade },
                { termo: "UF", definicao: dados.uf }
            ];

            campos.forEach(campo => {
                const dt = document.createElement("dt");
                dt.textContent = campo.termo;
                const dd = document.createElement("dd");
                dd.textContent = campo.definicao;
                resultadoCep.append(dt, dd);
            });

            historicoCEPs.push({ cep: dados.cep, cidade: dados.localidade });
            historicoCepLista.replaceChildren();
            historicoCEPs.forEach(item => {
                const li = document.createElement("li");
                li.textContent = `${item.cep} - ${item.cidade}`;
                historicoCepLista.append(li);
            });
        }
    } catch (erro) {
        statusCep.textContent = `Erro: ${erro.message}`;
    } finally {
        btnCep.disabled = false;
    }
});


const formPoke = document.querySelector("#form-poke");
const inputPoke = document.querySelector("#input-poke");
const btnPoke = document.querySelector("#btn-poke");
const statusPoke = document.querySelector("#status-poke");
const resultadoPoke = document.querySelector("#resultado-poke");

formPoke.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nome = inputPoke.value.trim().toLowerCase();

    if (nome === "") {
        statusPoke.textContent = "Digite o nome de um Pokémon.";
        return;
    }

    btnPoke.disabled = true;
    statusPoke.textContent = "Buscando Pokémon...";
    resultadoPoke.replaceChildren();

    try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);

        if (!resposta.ok) {
            if (resposta.status === 404) {
                throw new Error("Pokémon não encontrado.");
            }
            throw new Error("Falha na conexão.");
        }

        const dados = await resposta.json();
        statusPoke.textContent = "";

        const h3 = document.createElement("h3");
        h3.textContent = dados.name;

        const img = document.createElement("img");
        img.src = dados.sprites.front_default;
        img.alt = dados.name;

        const pTipos = document.createElement("p");
        const tiposStr = dados.types.map(t => t.type.name).join(", ");
        pTipos.textContent = `Tipos: ${tiposStr}`;

        resultadoPoke.append(h3, img, pTipos);

    } catch (erro) {
        statusPoke.textContent = erro.message;
    } finally {
        btnPoke.disabled = false;
    }
});