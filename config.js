const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254743416283";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_06_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA0MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjksXG4gICAgICAgIDI1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIwLFxuICAgICAgICA2OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgODcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODksXG4gICAgICAgIDIwMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDMwLFxuICAgICAgICA5NixcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDkwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDMyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDgyLFxuICAgICAgICA4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwLFxuICAgICAgICA2LFxuICAgICAgICAxNzksXG4gICAgICAgIDc3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDM2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDg5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4MCxcbiAgICAgICAgODksXG4gICAgICAgIDk2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDkwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxODIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjU1LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NixcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgODUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm96c3dJRWNqWXdkS2piUkFvYTBLTm80TnRHd2lpbS9xUUYrNzdFc0txaVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIll5QzljNnFEU1NlWF9zbTc4WXNlZlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjBjZDZlNTQtNTQyYS00ZmI3LTljZjYtZDg5ZWRlYmRjZGE2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMSxcbiAgICAgIDU1LFxuICAgICAgMTg3LFxuICAgICAgMTA3LFxuICAgICAgMjQ0LFxuICAgICAgNTEsXG4gICAgICAyNDAsXG4gICAgICAyNTUsXG4gICAgICAxMSxcbiAgICAgIDk5LFxuICAgICAgODYsXG4gICAgICAxOTIsXG4gICAgICA4OCxcbiAgICAgIDg4LFxuICAgICAgMTQsXG4gICAgICAxNDIsXG4gICAgICAyNTEsXG4gICAgICAyLFxuICAgICAgMTMxLFxuICAgICAgMjA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNyxcbiAgICAgIDIyOSxcbiAgICAgIDk5LFxuICAgICAgMzUsXG4gICAgICAxNzAsXG4gICAgICAyMzIsXG4gICAgICAxMTcsXG4gICAgICAxNzcsXG4gICAgICAxNjksXG4gICAgICAyMjIsXG4gICAgICA2OSxcbiAgICAgIDI0LFxuICAgICAgMTE4LFxuICAgICAgMjEzLFxuICAgICAgMjE0LFxuICAgICAgNTQsXG4gICAgICA0NCxcbiAgICAgIDIxMSxcbiAgICAgIDE1NSxcbiAgICAgIDc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZBVEJCRjJFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNzczMTQxNzA1MzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDU5OTEzNzk0NzY2Mzk6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJDLkZST1NUIPCfpbbwn6W2XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3lmeGVFSEVNdmdpclVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJEWWxxUXJQblV3a3pZbHdqeU8yNzg3UXZGOEMvSHR2SldkZzd2N2IwMkRnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm5oM1NNZWtaNC9yZzd1YlZMWmkvSE96WllEWjdVakRJWDlwNm0yMHd0ZkNkOVIwbzB6ZHB0dlJQcVRsTDJzVnl2eFhMNk1WZWxNQ2l5TmVodnl4ZUJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjM4MkQ0RkczZTVyZllBNkxjbVh5M2dwamtLbndNZDVLQTdVdWlxcFplOUxmcG9yQlJOZmwyZG1RMGUzZGtJY2YyaE9ZbHI3dlRHcm1MaElVbGR1UWdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3NzMxNDE3MDUzOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5Mzc5OTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLWklcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtaSS5qc29uIjogIntcImtleURhdGFcIjpcIi9EZjF0ZVdCbXF5cFh4SkRlZ2cxaHdIZ1B1em5GVlRIUk5SRnExSWNCKzA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA4MzYwNjUwOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxOTM4MDAwMzA3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "CYNUX",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
