const cooldown = new Map();
module.exports = async (bot,message) => {
if(message.author.bot) return;
if(message.channel.type == 'dm') return;
if (!message.member.hasPermission('ADMINISTRATOR')) {
if(message.content.includes('discord.gg')|| message.content.includes('discord.com/invite') || message.content.includes('discordapp.com/invite')) {
if(!message.content.includes('discord.gg') && !message.content.includes('discord.com/invite') && !message.content.includes('discordapp.com/invite')) return;
let inviteblit = await bot.fetchInvite(message.content).catch(() => null);
if(inviteblit.guild.id == message.guild.id) return;
message.delete();
message.channel.send(`Тут спамили ссылкай на сервер ${inviteblit} ОТ ${message.author}`);
};
};
let prefixe111 = [`!`,`<@${bot.user.id}>`, `<@!${bot.user.id}>`]
prefix22 = prefixe111.find(p => message.content.toLowerCase().startsWith(p))
if (!message.content.startsWith(prefix22)) return
const args = message.content.slice(prefix22.length).trim().split(/ +/g)
const cmdName = args.shift().toLowerCase()
if(bot.commands.get(cmdName) ||  bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName))
){
let cw = cooldown.get(message.author.id);
if((cw - Date.now()) / 1000 > 1) return message.react("⏱️")
const command = bot.commands.get(cmdName) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName));
if(!command) return
if (command) command.run(bot,message,args);
command.uses++
cooldown.set(message.author.id, Date.now() + command.cooldown * 5)
if(cooldown === command.cooldown) return cooldown.delete()
}
}
