module.exports = {
  name: 'ping',
  description: 'Pong!',
  devOnly: true,
  // testOnly: Boolean,
  // options: Object[],

  callback: (client, interaction) => {
    interaction.reply(`Pong! ${client.ws.ping}ms`)
  }
}