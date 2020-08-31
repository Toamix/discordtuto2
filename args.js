const Discord = require("discord.js");
const {PREFIX} = require("../config.js");


module.exports.run = (client, message, args) => {


    let user = message.author


    if(!args[0]) return message.channel.send("Vous n'avez pas mis d'argument")



    if(args[0] === "help") {
    const embed = new Discord.MessageEmbed()
    .setDescription(`${user}, voici la page d'help`)
    return message.channel.send(embed)
}

    if(args[0] === "toamix") {
    const toamix = new Discord.MessageEmbed()
    .setDescription(`${user}, je suis toamix`)
    return message.channel.send(toamix)
}




}

module.exports.help = {
    name: 'args',
  };