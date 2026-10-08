# Entregável da Semana 05 - Objetos, Dados e Assincronismo

## Reflexão (Para Pensar)

**Por que Promise.all pode ser mais rápido que vários await seguidos?**

A utilização de `await` de forma sequencial obriga o JavaScript a pausar e esperar que uma Promise seja totalmente resolvida antes de poder iniciar a requisição seguinte. 

Por outro lado, o `Promise.all` dispara todas as requisições em paralelo (em simultâneo). Desta forma, o sistema espera apenas que todas terminem o seu processamento juntas, aproveitando ao máximo o tempo de rede e reduzindo drasticamente o tempo total de espera quando as requisições não dependem dos resultados umas das outras.