const boasfestas = require('./boas-festas');

const anoContagem = new Date().getFullYear();

setInterval(() => {
  console.log(boasfestas.felicitar(anoContagem));
}, 1000);
