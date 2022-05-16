const Discord = require("discord.js")
require("dotenv").config()
welcomeChannelId = "975482100847370270"

const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi") {
        message.reply("Hello World!")
    }
})

const WelcomeChannelID = "975482100847370270"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
})

client.login(process.env.TOKEN)