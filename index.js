const { Client } = require('discord.js');
const client = new Client({ intents: [3276799]});

const config = require("./config.json");

let quotes = new Array();
quotes[0]= "eiouuuu babyyyyyyyyy";
quotes[1]= "traficando rimas B)";
quotes[2]= "god no¿?";
quotes[3]= "anashiiiiii";
quotes[4]= "pudiesen?";
quotes[5]= "ndeaaAAAAAAAH";

client.on('messageCreate', message => {
    if (message.content === 'hola') {
        let Q = quotes.length;
        let whichQuote = Math.round(Math.random()*(Q - 1));
        message.channel.send(quotes[whichQuote]);
    }
})

client.on('messageCreate', message => {
    if (message.content === 'chau') {
        message.channel.send("chau babyyyyyyyyy");
    }
})

client.login(config.token);
console.log("Bot is online!");