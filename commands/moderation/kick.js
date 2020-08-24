module.exports = {
name: 'kick',
aliases: ['apiban'],
category: 'mod',
cooldown: 1000,
async run(bot, message, args) {
try {
if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`У вас нету прав для этого надо право
> \`KICK_MEMBERS\``);
if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(`У меня нету прав мне надо права
> \`KICK_MEMBERS\``);
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(!member || message.guild.owner) return message.channel.send(`Укажите пользователя`)
let reason = args.slice(1).join(' ') || 'None'
await member.kick({ reason: `${message.author.tag} [${reason || 'None'}]`});
message.channel.send(`Пользователь: ${member.user.tag}(\`${member.id}\`)
Причина: \`${reason}\`
Кикнули: ${message.author.tag}(\`${message.author.id}\`)`)
} catch (err) {
message.channel.send(`${err}`)
}
}
}
