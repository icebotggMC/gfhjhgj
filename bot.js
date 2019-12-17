const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = !
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('وعليكم السلام');
  }
});

 client.on('message', msg => {
  if (msg.content === 'كيف الحال') {
    msg.reply('بخير عساك بخير');
  }
});
 
 client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
 
 client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
 
 


const developers = ["457732668155494402","",""]
const adminprefix = "ww!";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});









client.login("NDU3NzMyNjY4MTU1NDk0NDAy.Dqs2AA.eWJL1JoKwl__NwNQm4XZeMwMHsQ");