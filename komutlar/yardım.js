const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
  message.delete();

  let sayfalar = [`Prefix: **!**\nBottaki Komut Sayısı: ${client.commands.size}`,'**Eğlence Komutları**\n**!8top:** Sihirli top sorduğunuz sorulara cevap verir.\n**!adamasmaca:** Adam asmaca oynarsınız.\n**!doğrulukcesaret:** Doğruluk mu cesaret mi oynarsınız.\n**!duello:** Etiketlediğiniz kişi ile duello atarsınız.\n**!emojiyazı:** Emojili yazı yazarsınız.\n**!espri:** Bot espri yapar.\n**!kaçcm:** Çavuşu ölçersiniz.\n**!rastgelerenk:** Bot size rastgele renk söyler.\n**!yazmaoyunu:** İlk yazan kazanır yarışmasını başlatır.\n**!yazıtura:** Yazı tura atarsınız.','**Kullanıcı Komutları**\n**!afk:** Afk olursunuz ve sizi etiketleyenlere afk nedeninizi söyler.\n**!avatar:** Bot etiketlediğiniz kişinin veya sizin avatarını gösterir.\n**!bitcoin:** Bot size güncel bitcoin fiyatlarını gösterir.\n**!döviz:** Bot güncel kur fiyatlarını gösterir.\n**!gif:** Yazdığınız kelimeye göre gif atar.\n**!havadurumu:** Bot yazdığınız yerin hava durumunu gösterir.\n**!hesapla:** Yazdığınız matematik işlemini bot hesaplar.\n**!instagram:** Kullanıcı adını yazdığınız hesabın bilgilerini görürsünüz.\n**!istatistik:** Bot ile ilgili istatistikleri gösterir.\n**!kullanıcı:** kendinizin veya başkasının discord bilgilerini görürsünüz.\n**!rank:** Sunucudaki rankınızı gösterir.\n**!rastgelerenk:** Bot size rastgele renk verir.\n**!spotify:** Etiketlediğiniz kişinin veya sizin dinlediğiniz şarkı bilgilerini gösterir.\n**!roller:** Sunucuda bulunmakta olan rolleri gösterir.\n**!steamstore:** Yazdığınız oyunun steamdaki bilgilerini gösterir.\n**!sunucu:** Bot discord sunucusu hakkında bilgi verir.\n**!wikipedia:** Arattığınız kelimenin wikipediadaki bilgilerini gösterir.\n**!uyarılar:** Kendinizin veya başkasının uyarısını görürsünüz.\n**!üye:** Discord sunucusu üye durumlarını gösterir.\n**!yapımcı:** Yapımcıyı gösterir.','**Yetkili Komutları**\n**!ayarlar:** Ayarları gösterir.\n**!ban:** Etiketlediğiniz kişiyi sunucudan banlarsınız.\n**!banlist:** Sunucudaki banlı kişilerin listesini gösterir.\n**!duyuru:** Özelden herekese duyuru atarsınız.\n**!forceban:**  ID ile ban atarsınız.\n**!gag:** Gag atarsınız\n**!hgbbayarla/!hgbbsıfırla:** HG-BB yi ayarlarsınız.\n**!lock/!unlock:** Yazdığınız yazı kanalını kilitler veya kilidini açar.\n**!kayıt:** Yeni gelen kişileri kayıt edersiniz.\n**!kick:** Etiketlediğniz kişiyi kicklersiniz.\n**!küfüraç/!küfürkapat:** Küfür engelini ayarlarsınız.\n**!mute:** Etiketlediğiniz kişiyi ses kanallarında susturursunuz.\n**!otorol ayarla/!otorol sıfırla:** Otorlü ayarlarsınız.\n**!sil:** Belirtdiğiniz miktarda mesajı siler.\n**!slowmode:** Yavaşmodu ayarlarsınız.\n**!uyar/!uyarısil:** Uyarı verip silersiniz.\n**!yaz:** Yazdığınız metni bot yazar.\n**!özelkomutekle/!özelkomutsil:** Özel komut ekleyip silersiniz.','**Müzik**\nEklenicek','**NSFW**\nEklenicek',`**Yapımcı**\n<@385001389119504384>`]; 
  let sayfa = 1;

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`Sayfa ${sayfa} - ${sayfalar.length}`)
    .setDescription(sayfalar[sayfa-1])
    .setThumbnail(client.user.avatarURL)

  message.channel.send(embed).then(msg => {

    msg.react('⏪').then( r => {
      msg.react('⏩'),
      msg.react('⏹')

      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;
      const stopFilter = (reaction, user) => reaction.emoji.name === '⏹' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter);
      const forwards = msg.createReactionCollector(forwardsFilter);
      const stop = msg.createReactionCollector(stopFilter);


      backwards.on('collect', r => {
        r.remove(message.author.id);
        if (sayfa === 1) return;
        sayfa--;
        embed.setDescription(sayfalar[sayfa-1]);
        embed.setFooter(`Sayfa ${sayfa} - ${sayfalar.length}`);
        msg.edit(embed)
      })

      forwards.on('collect', r => {
        r.remove(message.author.id);
        if (sayfa === sayfalar.length) return;
        sayfa++;
        embed.setDescription(sayfalar[sayfa-1]);
        embed.setFooter(`Sayfa ${sayfa} - ${sayfalar.length}`);
        msg.edit(embed)
      })
      
      stop.on('collect', r => {
        r.remove(message.author.id);
        msg.delete(embed);
      })

    })

  })
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım","help","y","h"],
  category: "admin",
  permLevel: 0
};

module.exports.help = {
  name: 'yardım',
  description: 'Gelişmiş Sayfalı Yardım.',
  usage: 'yardım'
};