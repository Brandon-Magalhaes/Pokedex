# Pokédex

Listagem dos **151 primeiros Pokémon** consumindo a [PokéAPI](https://pokeapi.co), em JavaScript puro.

## Como funciona

- `app.js` dispara as 151 requisições em paralelo com `Promise.all`.
- Os cards são montados com `reduce`, exibindo número, nome, sprite e tipos.
- A classe do card segue o **tipo principal** do Pokémon, e o CSS pinta cada tipo com sua cor.
- Se a API falhar, a lista simplesmente não é montada — não há tratamento de erro nem estado de carregamento visível.

## Arquivos

`index.html` · `style.css` · `app.js`

## Como rodar

Sem build e sem dependências: abra `index.html` no navegador. É necessário acesso à internet para consultar a API.
