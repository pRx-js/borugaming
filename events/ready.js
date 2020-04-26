const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${client.user.username} AKTİF`);
    client.user.setStatus("dnd");
    client.user.setActivity("Börü Gaming | Made By pRx"); 
}