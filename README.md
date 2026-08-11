# Bot de Atendimento Simples

Bot base para atendimento com personalidade configurável.

## Estrutura

- `config.js` — configura nome da empresa, estilo e regras do bot.
- `bot.js` — lógica de atendimento e geração do prompt.

## Personalizar o jeito de falar

Abra `config.js` e altere:

```js
style: 'amigavel'
```

Opções prontas:

- `profissional` — formal, claro e comercial.
- `informativo` — didático e organizado.
- `amigavel` — natural, educado e receptivo.
- `personalizado` — usa o texto definido em `customStyle`.

Exemplo:

```js
style: 'personalizado',
customStyle: `
Fale de maneira profissional, mas amigável.
Use frases curtas.
Não use gírias.
Use no máximo um emoji por resposta.
`
```

## Teste rápido

Com Node.js instalado:

```bash
node bot.js "Olá, gostaria de saber mais sobre os serviços"
```

A função `buildPrompt()` também pode ser conectada a uma API de IA para transformar o bot em um atendimento com respostas geradas por modelo. A conexão com WhatsApp, Telegram ou outro canal pode ser adicionada depois.
