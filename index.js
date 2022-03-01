const Discord = require("discord.js")
require("dotenv").config()
const TOKEN = "OTQ4MjQzNDIwNjA0OTIzOTM0.Yh4-gA.8022gcf98l8Ne7eBy_mk6BDecwY"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag} on Imperial-Evolution.`)
})

client.on("messageCreate", (message) => {
    if (message.content == "Shop?"){
        message.reply("This bot is currently in development!")
    }
})



client.login(process.env.token)