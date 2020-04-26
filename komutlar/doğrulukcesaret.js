const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
      if(message.channel.id != "699296334917664778") return message.channel.send("Lütfen komutlarınızı <#699296334917664778> kanalında kullanınız!").then(msg => msg.delete(3000));
    var dogruluk = ['Telefonunda arattığın en son şey nedir ?', 'Bir sabah karşı cins olarak uyansaydın ilk yapacağın şey ne olurdu ?', 'Sokakta yere bir şey düşürdüğünde hiç bir şey olmamış gibi alıp ağzına attın mı ?', 'Daha önce hiç komşudan birşey çaldın mı?',"Bakir/bakire misin?","Hiç fetişin var mı? Varsa açıkla!","Daha önce gördüğün en açık seçik rüya neydi? Detayıyla açıkla!","Seni en çok tahrik eden şey nedir?","Sağ tarafında oturan insanın en çok hangi özelliğini sevmiyorsun?","İlk ne zaman öpüştün?","Bu odadaki birini kölen olarak alabilme şansın olsaydı, kim olurdu ve ne yapmasını isterdin?","Deseler ki sana “geçmişte bir anı seç ve seni oraya döndüreceğiz” Tekrar yaşamak istediğin an nedir?","Sağ tarafındaki kişiyi öpme düşüncesi seni heyecanlandırıyor mu?","Facebook’ta engelli ve kısıtlanmış kimseler listende kimler var?","Vücudunun en çok hangi tarafıyla gurur duyuyorsun?","Yapıpta tamamen utanç duyduğun birşeyden bahset."]
    var cesaret = ['İğrenç bir ses tonuyla şarkı söyle', 'Bugün yaptığın bir şeyle alakalı uydurma kısa, komik bir hikaye anlat', 'Whatsappındaki son mesajlaşmanı bize oku', 'Çok yüksek bir sesle 3 saniye bağır',"Sana en yakın kişiyle iç çamaşırlarını değiştir.","Pencereyi aç ve sokaktaki birinin sana el sallamasını sağla","Biriyle nasıl flört edeceğini göster.","İki kolunun üzerine tükenmez kalem ile “Ben bir eziğim” yaz","Solundaki kişiye onunla ne yapmaktan hoşlandığını kulağına fısılda"]
    var dogrulukcevap = dogruluk[Math.floor(Math.random() * dogruluk.length)];
    var cesaretcevap = cesaret[Math.floor(Math.random() * cesaret.length)]

    message.channel.send('\`Doğruluk\` mu yoksa \`cesaret\` mi?')
    let uwu = false;
    while (!uwu) {
        const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 });
        const choice = response.first().content
        if (choice == 'doğruluk' || choice == 'd') return message.channel.send(`${dogrulukcevap}`)
        if (choice !== 'cesaret' && choice !== 'c') {
            message.channel.send(`Lütfen sadece **doğruluk (d)** veya **cesaret (c)** ile cevap verin.`) 
        }
        if (choice == 'cesaret' || choice == 'c') uwu = true
    }
    if (uwu) {
        message.channel.send(`${cesaretcevap}`)

    }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['doğruluk-cesaret','dogruluk','doğruluk','cesaret','doğrulukcesaret','doğrulukmucesaretmi'],
    permLevel: 0
};

exports.help = {
    name: 'doğrulukcesaret',
    description: 'Doğruluk cesaret oynarsınız',
    usage: 'doğrulukcesaret'
};