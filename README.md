Hello, here's yours truly with another post. Today I'll show you how to create a simple Discord bot and deploy it in Qovery; all the material in this post will be downloadable from my GitHub repository.

#### Requirements

[NodeJS](https://nodejs.org/)
IDE (VSCODE is recomended)
Qovery account[](https://git-scm.com/)
[Git ](https://git-scm.com/)

> [How to deploy a project in Qovery](https://neyunse.kagarisoft.com/how-to-deploy-a-project-in-qovery/)

# Making a Bot

Well, first we will create a folder where we will create the files and we will open the code editor.
In our terminal we will enter this command to create the package file.

`npm init -y`

or

`yarn init -y`

![](https://i.imgur.com/9rSRzRw.png)

Once the package file is created we will start installing the discord.js library, to install it just enter the following command.

`npm install discord.js`

or

`yarn add discord.js`

> If you have problems to install discord.js in Ubuntu (as it is in my case) install an older version. I will install version 12, since version 13 won't let me install it. 
> To install the same version I will use you can use this command:

`npm install discord.js@12.5.3`

And the package file should look something like this.

```json
{
  "name": "SampleBot",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "discord.js": "12.5.3"
  }
}
```

Now we will create an `index.js` file in the same place as our package file and import the discord.js library.

```javascript
const Discord = require('discord.js');
```

Once imported we will create the client.

```javascript
const client = new Discord.Client()
```

Now we will add a function to check if the bot is active.

```javascript
client.on("ready", () => {
  console.log("Ready"); // Bot is Ready
});
```

Now we can start programming commands for our bot. We will add this function below the previous code.

```javascript
client.on("message", async (msg) => {

})
```

Creating commands for our bot is very easy, just add conditionals that check what the user writes in the chat and if a message matches the bot will return a message.

```javascript
client.on("message", async (msg) => {
  var prefix = "!" //the bot only respond if this exist in the comand
  if (msg.content === prefix+"love"){
    msg.reply("i love you <3");
  }
  // e.g: > !love
  //ouput > i love you <3
})
```

Now we will add the token so that our bot can connect to discord.

> The token should never be disclosed, and if you upload it to github you have to create the repository privately.
> to get your token go to <https://discord.com/developers> and create a new application. Then go to the "bot" section and click on the create bot button. Under the name of our bot you will find the token.

```javascript
client.login('XXXXXXX');
```

Our index.js file should look something like this.

```javascript
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
client.login('XXXXXXX');
```

Now we can run our bot. But without first configuring our package file to run the bot. 

We will add **scripts** and inside we will add **start.** Then we will add the following.

```json
{
  "name": "SampleBot",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "start": "node ."
  },
  "dependencies": {
    "discord.js": "12.5.3"
  }
}
```

Now we can run our bot with the following command:

`npm run start` 

or 

`yarn start` 

and in the console we will see "Ready" indicating that the bot was successfully connected:

![](https://i.imgur.com/QvwquVt.png)

Now we will create an invitation link as follows.

We will go to <https://discord.com/developers> and enter the application we created. Then we will select **OAuth2** from the menu and scroll down a bit.

In **OAuth2 URL Generator** we will choose **"bot"** and in permissions we will choose **Administrator**, this way we are giving it all the permissions. (it is advisable to mark as Administrator)

Once you have chosen the permissions, above you will find the bot invitation link, and you will be able to add it to your server by pasting it in the browser.

# Deploying in Qovery

For this part, I decided to record a video (note that the video does not have a voice)

https://drive.google.com/file/d/1jnwZibyUbh57cNsiGYwOcumKmyX9L5en/preview
