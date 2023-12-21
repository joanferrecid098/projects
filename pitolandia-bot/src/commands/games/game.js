const { Client, Interaction, ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');

module.exports = {
  /** 
   * @param {Client} client
   * @param {Interaction} interaction
  */
  name: 'game',
  description: 'Ask who wants to play a game.',
  // devOnly: true,
  // testOnly: Boolean,
  options: [
    {
      name: 'game',
      description: 'The game you want to play.',
      required: true,
      type: ApplicationCommandOptionType.String,
    },
  ],

  callback: (client, interaction) => {
    const game = interaction.options.get('game').value;

    const embed = new EmbedBuilder()
      .setTitle("Game Request")
      .setDescription("<@&1187484625665278023>\n\nAnyone up for a game?")
      .setColor(0x00FFFF)
      .setFooter({ text: "Join Musica VC" })
    
    embed.addFields(
      {
        name: 'Person Asking',
        value: `<@${interaction.user.id}>`
      },
      {
        name: 'Game',
        value: `${game}`
      }
    )

    interaction.reply({ embeds: [embed] })
  }
}