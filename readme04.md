# Entregável da Semana 04 - Arrays, DOM e Eventos

Breve descrição do projeto e das tecnologias aplicadas durante a resolução dos desafios propostos.

## Métodos de Array Utilizados
*   **map:** Utilizado para percorrer o array original e transformar os seus dados, retornando sempre um novo array com o mesmo número de elementos (ex: extrair apenas os nomes dos objetos).
*   **filter:** Utilizado para testar cada elemento do array mediante uma condição, retornando um novo array apenas com os elementos que passaram no teste (ex: filtrar preços acima de 20).
*   **reduce:** Utilizado para iterar sobre o array e acumular os valores num único resultado final (ex: somar o valor total de todos os preços).

## Lógica de Manipulação do DOM
A manipulação do DOM foi feita através da seleção de elementos com `querySelector` e `querySelectorAll`. O conteúdo de texto foi alterado com `textContent`, e estruturas HTML foram injetadas com `innerHTML`. Para uma criação mais segura de elementos dinâmicos, foi utilizada a combinação de `document.createElement()` e `append()`, além da gestão de estilos dinâmicos com `classList`.

## A Importância do Event Delegation
O *Event Delegation* (Delegação de Eventos) é crucial para a otimização de performance e escalabilidade. Em vez de adicionar um *Event Listener* individual a cada elemento `<li>` de uma lista, adicionamos um único *listener* ao elemento pai (`<ul id="lista">`). 

Utilizando a propriedade `e.target.tagName === "LI"`, conseguimos identificar exatamente qual o filho que foi clicado. Isto é especialmente importante porque garante que elementos criados dinamicamente via JavaScript (após o carregamento inicial da página) continuem a responder aos eventos sem a necessidade de lhes anexar novos *listeners*.