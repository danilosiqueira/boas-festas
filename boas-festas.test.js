const boasfestas = require('./boas-festas');

const anoContagem = new Date().getFullYear();

test('Deve retornar os dias restantes para o natal quando for dia 01/01 do mesmo ano de contagem.', () => {
  expect(boasfestas.felicitar(anoContagem, new Date(anoContagem, 0, 1))).toBe('Falta(m) 358 dias para o Natal.');
});

test('Deve retornar os dias restantes para o natal quando for dia 24/12 do mesmo ano de contagem.', () => {
  expect(boasfestas.felicitar(anoContagem, new Date(anoContagem, 11, 24))).toBe('Falta(m) 1 dias para o Natal.');
});

test('Deve retornar feliz natal quando for dia 25/12 do mesmo ano de contagem.', () => {
  expect(boasfestas.felicitar(anoContagem, new Date(anoContagem, 11, 25))).toBe('Feliz Natal!');
});

test('Deve retornar os dias restantes para o ano novo quando for dia 26/12 do mesmo ano de contagem.', () => {
  expect(boasfestas.felicitar(anoContagem, new Date(anoContagem, 11, 26))).toBe('Falta(m) 6 dias para o Ano Novo.');
});

test('Deve retornar feliz ano novo quando for dia 01/01 do próximo ano de contagem.', () => {
  expect(boasfestas.felicitar(anoContagem, new Date(anoContagem + 1, 0, 1))).toBe('Feliz Ano Novo!');
});
