module.exports = {
name: 'ping',
aliases: ['ping'],
category: 'info',
cooldown: 1000,
async run(bot, message, args) {
message.channel.send("🕐").then((m) => {
    m.edit(`Мой пинг: \`${Math.round(bot.ws.ping)}\` ms`);
});
}
};
