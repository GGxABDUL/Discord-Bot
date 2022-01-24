const Discord = require('discord.js');
const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ]
});

client.on('message', async message => {
  if(message.content === "ping") {
    message.channel.send("pong")
  }
})

client.on('ready', () => {
  console.log('Ready!')
});
client.login(process.env.token);
