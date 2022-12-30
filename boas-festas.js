exports.felicitar = (anoContagem = 2022, agora = new Date()) => {
  natal = new Date(anoContagem, 11, 25);
  anoNovo = new Date(anoContagem + 1, 0, 1);

  agora.setHours(0, 0, 0);

  if(agora.getTime() <= natal.getTime()) {
    evento = 'Natal';
    diasRestantes = natal.getTime() - agora.getTime();
  } else {
    evento = 'Ano Novo';
    diasRestantes = anoNovo.getTime() - agora.getTime();
  }

  if(diasRestantes <= 0) {
    return `Feliz ${evento}!`;
  } else {
    return `Falta(m) ${Math.ceil(diasRestantes / (1000 * 3600 * 24))} dias para o ${evento}.`;
  }
}
