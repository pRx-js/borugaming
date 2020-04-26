exports.run = (client, message, args) => {
  let command;
  if (client.commands.has(args[0])) {
    command = args[0];
  } else if (client.aliases.has(args[0])) {
    command = client.aliases.get(args[0]);
  }
  if (!command) {
    return message.channel.sendMessage("`" + args[0] + "` adında bir komut yok.");
  } else {
    message.channel.sendMessage("`" + command + "` adlı komut yeniden başlatılıyor...").then(msg => msg.delete(5000))
      .then(m => {
        client.reload(command)
          .then(() => {
            m.edit("`" + command + "` adlı komut başarıyla yeniden başlatıldı.");
          })
          .catch(e => {
            m.edit(`Komut yeniden başlatılırken bir hata oluştu: ${command}\n\`\`\`${e.stack}\`\`\``);
          });
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reload'],
  permLevel: 4
};

exports.help = {
  name: 'reload',
  description: 'İstediğiniz bir komutu yeniden başlatır.',
  usage: 'reload <komut adı>'
};
