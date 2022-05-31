const Discord = require('discord.js');

const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.DIRECT_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Discord.Intents.FLAGS.GUILDS
  ],
});

client.on("ready", () => {
    console.log("ready");
});

client.on("messageCreate", (message) => {
    if (message.content.endsWith("quoi") ) {
        message.channel.send("feur");
    };
    if (message.content.endsWith("quoi ?") ) {
        message.channel.send("feur");
    };
    if (message.content.endsWith("quoi?") ) {
        message.channel.send("feur");
    };
    if (message.content.endsWith("Quoi") ) {
        message.channel.send("feur");
    };
    if (message.content.endsWith("Quoi?") ) {
        message.channel.send("feur");
    };
    if (message.content.endsWith("Quoi ?") ) {
        message.channel.send("feur");
    };



    console.log(message);
});

client.login(process.env.token);




