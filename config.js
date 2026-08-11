// Configuração principal do bot.
// Altere estes valores para personalizar o comportamento sem mexer na lógica.

module.exports = {
  botName: 'GB Bot',

  // Estilos disponíveis: profissional, informativo, amigavel ou personalizado
  style: 'amigavel',

  // Usado somente quando style = 'personalizado'
  customStyle: `
Fale de forma educada, natural e objetiva.
Use linguagem simples e ajude o cliente sem parecer robótico.
`,

  company: {
    name: 'GB TECH',
    description: 'Tecnologia, automação e soluções digitais.'
  },

  behavior: {
    concise: true,
    useEmojis: true,
    maxResponseLines: 8
  }
};
