const Discord = require("discord.js");
const { Intents } = require("discord.js");
const doteenv = require("dotenv");

doteenv.config();

const client = new Discord.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.login(process.env.TOKEN);

client.on("ready", () => {
  console.log("Bot Is Ready!");
});

client.on("messageCreate", (msg) => {
  if (msg.content === "Oi") {
    msg.reply({
      content:
        "Olá Bem Vindo Ao Bar do Zé Seja bem vindo! Caso queira saber mais mande, 'Quanto ta os preços?'.",
    });
  }
  if (msg.content === "Quanto ta os preços?") {
    msg.reply({
      content:
        "Cerveja mais barata que tem 3, Agua 10, Coca 5, Latão 20, pra gringo é mais caro!!!!! Para fazer um pedido mande 'fazer um pedido' ",
    });
  }
  if (msg.content === "fazer um pedido") {
    msg.reply({
      content: "O que deseja? (escreva o item exatamente como esta no menu!)",
    });
  }
  if (msg.content === "Cerveja mais barata que tem") {
    msg.reply({
      content: "Ta chegando chefia! pode descer mais uma?",
    });
  }
  if (msg.content === "Agua") {
    msg.reply({
      content:
        "Ta chegando, se quiser algo mais pode pedir " + msg.author.username,
    });
  }
  if (msg.content === "Coca") {
    msg.reply({
      content: "Coquinha gelada, boa escolha " + msg.author.username,
    });
  }
  if (msg.content === "Latão") {
    msg.reply({
      content: "Latão? tem certeza? mary mary pra gringo é mais caro!",
    });
  }
});
