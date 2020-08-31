// pour commencer il faut add les const de la librairie discord et le config.js (ce n'est pas obligatoire pour le config mais je le fais par habitude !


const Discord = require("discord.js");
const {PREFIX} = require("../config.js");


module.exports.run = (client, message, args) => {

    // la personne qui fait la commande = message.author (j'ajoute l'objet avec let user)
    let user = message.author

    // pas d'args = return (anti erreur obligatoire quand vous manipulez des args)
    if(!args[0]) return message.channel.send("Vous n'avez pas mis d'argument")
    
    // pour faire un args étendu : let content = args.join(" ")


    // si !args help ->
    if(args[0] === "help") {
    const embed = new Discord.MessageEmbed()
    .setDescription(`${user}, voici la page d'help`)
    return message.channel.send(embed)
        
} // je pourrais meme mettre un else ici
    
    // si !args toamix ->
    if(args[0] === "toamix") {
    const toamix = new Discord.MessageEmbed()
    .setDescription(`${user}, je suis toamix`)
    return message.channel.send(toamix)
}




}

module.exports.help = {
    name: 'args',
  };
