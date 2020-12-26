const Discord = require("discord.js");
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');


exports.run = async (client, message, args, guild) => {//wancy
    
    let d = ayarlar.prefix
    let abone = ayarlar.abonerol
    let yetkili = ayarlar.yetkili
    let galerichat = ayarlar.galerichat
    let abonelog = ayarlar.abonelog
    let kayıtsızcık = ayarlar.kayıtsız
    if(message.channel.id !== (abonelog))//wancy
    return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu Komudu Sadece **<#${abonelog}>** Adlı Kanalda Kullanabilirsin ! `)).setColor('#ff0000')



  
  let wancyy = new Discord.MessageEmbed()
 .setDescription(`**Bu komudu kullanabilmek için** <@&${yetkili}>  **yetkisine sahip olmalısın!**`).setColor('#ff0000')
 if (!message.member.roles.cache.get(yetkili)) return message.channel.send(wancyy) //wancy  
//wancy
let member = message.mentions.members.first()
  if (!member) return message.channel.send(new Discord.MessageEmbed().setColor('#ff0000').setDescription(`Abone Rolu Verecegin Kullanıcıyı Etiketlemelisin! \n\n **Örnek Kullanım:** ${d}abone @kullanıcı `))


  
   member.roles.add(abone) //wany 

//wanvy
  //wancy
const wancyyy = new Discord.MessageEmbed()
  .setDescription(`
 Verilen Kullanıcı : ${member.user} 
 Verilen Rol :<@&${abone}>
 Komutu Kullanan Yetkili : <@!${message.author.id}> `)
  .setFooter(`Wancy`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
  .setColor('#b2fae6')
db.add(`kayıtsayı_${message.author.id}`, 1) //wancy 
message.channel.send(wancyyy)
  //wancy
const wancy = new Discord.MessageEmbed()
   .setDescription(`
 Verilen Kullanıcı : ${member.user} 
 Verilen Rol :<@&${abone}>
 Komutu Kullanan Yetkili : <@!${message.author.id}> `).setColor('#0e3bfa')
   client.channels.cache.get(galerichat).send(wancy)}; //wancy 
//wancy
exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['a'],
permLevel: 0
};
exports.help = {
name: "abone",
description: "abone Kayıt", //wancy 
usage: "prefix!abone"
};