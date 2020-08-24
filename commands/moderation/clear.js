module.exports = {
name: 'clear',
aliases: ['clear'],
category: 'mod',
cooldown: 1000,
async run(bot, message, args) {
  try {
   if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`У вас недостаточно прав для выполнения данного действия
Нужны права
  > \`MANAGE_MESSAGES\``)
  if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`У меня нету прав
  > \`MANAGE_MESSAGES\``);
  if (!args[0] || args[0] > 100) return message.channel.send(`Укажить кол-во`,message)
  if (args[0] > 100) return ErrorEmbed(`${msgs[3]}`,message)
  message.channel.bulkDelete(args[0]).then((messages) => {
  message.channel.send(`Я удалил \`${messages.size}\``)
  });
  } catch (err) {
  ErrorEmmessage.channel.sendbed(`${err}`)
  }
  }
  }
