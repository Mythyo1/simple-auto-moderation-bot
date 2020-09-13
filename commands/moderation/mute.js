module.exports = {
name: 'mute',
aliases: ['mute'],
category: 'mod',
cooldown: 1000,
async run(bot, message, args) {
const ms = require("ms")
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
let rolemute = message.guild.roles.cache.find(r => r.name == 'Mued);
if (!rolemute) rolemute = await message.guild.roles.create({ data: { name: 'Muted)
message.guild.channels.cache.forEach(async (channel,id) => {
 await channel.updateOverwrite(rolemute,{
SEND_MESSAGES:false,
ADD_REACTIONS:false
});
});
let reason = args[1]
if(message.guild.me.roles.highest.rawPosition <= member.roles.highest.rawPosition) return message.channel.send(`I have no right to stir up  `)
if(member.roles.cache.has(message.guild.roles.cache.find(r => r.name == 'mute').id)) return message.channel.send(`This user is already muted`)
if(!member) return message.channel.send(`Specify a member`)
if(!args[1])
member.roles.add(rolemute.id)
message.react('✅')
setTimeout(function(){
  member.roles.remove(rolemute.id)
  message.channel.send(`auto blurred`)
}, ms(args[2]));
}
}
