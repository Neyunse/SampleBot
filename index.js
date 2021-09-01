const Discord = require("discord.js");
const client = new Discord.Client()

client.on("ready", () => {
  console.log("Ready"); // Bot is Ready
});

client.on("message", async (msg) => {
  var prefix = "!"; //the bot only respond if this exist in the comand
  if (msg.content === prefix + "love") {
    msg.reply("i love you <3");
  }
  // e.g: > !love
  //ouput > i love you <3
});

client.login(process.env.BOT_TOKEN); // Bot Token on .env file