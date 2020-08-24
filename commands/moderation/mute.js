module.exports = {
name: 'mute',
aliases: ['mute'],
category: 'mod',
cooldown: 1000,
async run(bot, message, args) {
const ms = require("ms")
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
let rolemute = message.guild.roles.cache.find(r => r.name == 'Sakura-mute');
if (!rolemute) rolemute = await message.guild.roles.create({ data: { name: 'Sakura-mute' } })
message.guild.channels.cache.forEach(async (channel,id) => {
 await channel.updateOverwrite(rolemute,{
SEND_MESSAGES:false,
ADD_REACTIONS:false
});
});
let reason = args[1]
if(message.guild.me.roles.highest.rawPosition <= member.roles.highest.rawPosition) return message.channel.send(`У меня нету прав мутить  `)
if(member.roles.cache.has(message.guild.roles.cache.find(r => r.name == 'mute').id)) return message.channel.send(`Этот юзеру уже в муте`)
if(!member) return message.channel.send(`Укажите пользователя`)
if(!args[1])
member.roles.add(rolemute.id)
message.react('✅')
setTimeout(function(){
  member.roles.remove(rolemute.id)
  message.channel.send(`авто размут`)
}, ms(args[2]));
}
}
