import { Client, GatewayIntentBits, Collection, PermissionFlagsBits } from 'discord.js'
const { Guilds, MessageContent, GuildMessages, GuildMembers, GuildMessageReactions } =
  GatewayIntentBits
import { Command, SlashCommand } from './types'
import { config } from 'dotenv'
import { readdirSync } from 'fs'
import { join } from 'path'

const client = new Client({
  intents: [Guilds, MessageContent, GuildMessages, GuildMembers, GuildMessageReactions],
})
config()

client.slashCommands = new Collection<string, SlashCommand>()
client.commands = new Collection<string, Command>()
client.cooldowns = new Collection<string, number>()

const handlersDir = join(__dirname, './handlers')
readdirSync(handlersDir).forEach((handler) => {
  require(`${handlersDir}/${handler}`)(client)
})

client.login(process.env.TOKEN)
