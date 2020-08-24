module.exports = {
name: 'ban',
aliases: ['apiban'],
category: 'mod',
cooldown: 1000,
async run(bot, message, args) {
try {
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`У вас нету прав для этого надо право
> \`BAN_MEMBERS\``);
if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(`У меня нету прав мне надо права
> \`BAN_MEMBERS\``);
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(!member || message.guild.owner) return message.channel.send(`Укажите пользователя`)
let reason = args.slice(1).join(' ') || 'None'
await member.ban({ reason: `${message.author.tag} [${reason || 'None'}]`});
message.channel.send(`Пользователь: ${member.user.tag}(\`${member.id}\`)
Причина: \`${reason}\`
Забанил: ${message.author.tag}(\`${message.author.id}\`)`)
} catch (err) {
message.channel.send(`${err}`)
}
}
}
