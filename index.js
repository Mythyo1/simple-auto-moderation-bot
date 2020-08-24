const { Client,Collection } = require('discord.js');
const fs =require('fs');
require('dotenv').config();
const bot = new Client({disableMentions: "everyone"});
bot.commands = new Collection()
bot.aliases = new Collection()
fs.readdir('./commands', (err, files) => {
   if (err) console.log(err)
   files.forEach((element,iterator) => {
       if(!element.includes(".")) {
           fs.readdir(`./commands/${element}`,(err,sub_files)=>{
               sub_files.forEach((elem,iterator)=>{
                   let props = require(`./commands/${element}/${elem}`);
                   bot.commands.set(props.help.name, props);
                   const alias = props.help.aliases
                   for (i = 0; i < alias.length; i++) {
                       bot.aliases.set(alias[i], props);
                   }
                   console.log(`[BOOT]${props.help.name} ✅`)
               })
           })
       }
   })
 })
 fs.readdirSync('./events/').filter(file => file.endsWith('.js')).forEach(file => {
const event = require(`./events/${file}`)
let eventName = file.split('.')[0]
bot.on(eventName, event.bind(null, bot))
delete require.cache[require.resolve(`./events/${file}`)]
});
bot.login(process.env.token).catch(err => console.log(`Бот не смог зайти в дискорд`));
