import {
  SlashCommandBuilder,
  ChannelType,
  TextChannel,
  EmbedBuilder,
} from 'discord.js'
import { getThemeColor } from '../functions'
import { SlashCommand } from '../types'

const command: SlashCommand = {
  command: new SlashCommandBuilder().setName('greet').setDescription('Say Hi'),
  execute: (interaction) => {
    interaction.reply({
      content: `Hi ${interaction.user.username}`,
      tts: true,
    })
  },
  cooldown: 10,
}

export default command
