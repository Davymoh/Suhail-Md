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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_36_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDg5LFxuICAgICAgICA2NixcbiAgICAgICAgMTE1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc2LFxuICAgICAgICA3LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDcwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NixcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDM3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQwLFxuICAgICAgICA5MSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDg2LFxuICAgICAgICA1MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTksXG4gICAgICAgIDQ5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDY3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODcsXG4gICAgICAgIDExLFxuICAgICAgICA2NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1LFxuICAgICAgICA5MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MCxcbiAgICAgICAgNCxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDgzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwLFxuICAgICAgICA3MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NixcbiAgICAgICAgMjEyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA2OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNixcbiAgICAgICAgMjE2LFxuICAgICAgICA3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDkzLFxuICAgICAgICAxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDksXG4gICAgICAgIDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODYsXG4gICAgICAgIDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqTmFPb3ZBYXpCbGg4dEk2SEUxREVRRzNmeEpTNE1HTDhsN1dnM24wYnBJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJRQkJFdEQybVI4bWxCN0k4XzdsTjVBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBlYmM4MjdkLTczYjYtNGUxOC1hOTJhLTBkMDQyMzMxNTdiZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MixcbiAgICAgIDEwNSxcbiAgICAgIDI1MCxcbiAgICAgIDE1NixcbiAgICAgIDE1OSxcbiAgICAgIDIwMyxcbiAgICAgIDE2NSxcbiAgICAgIDU4LFxuICAgICAgMjEyLFxuICAgICAgMTgwLFxuICAgICAgMTI3LFxuICAgICAgMTEyLFxuICAgICAgMTk5LFxuICAgICAgMjIzLFxuICAgICAgMTI3LFxuICAgICAgMTU2LFxuICAgICAgMyxcbiAgICAgIDE5LFxuICAgICAgMTQ2LFxuICAgICAgMjQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg3LFxuICAgICAgMjA0LFxuICAgICAgMjI2LFxuICAgICAgMzUsXG4gICAgICA0OCxcbiAgICAgIDEzMixcbiAgICAgIDE4LFxuICAgICAgMTUxLFxuICAgICAgMjQ5LFxuICAgICAgNTUsXG4gICAgICA4NCxcbiAgICAgIDQ3LFxuICAgICAgMTg1LFxuICAgICAgMzksXG4gICAgICAzOSxcbiAgICAgIDEyOCxcbiAgICAgIDY2LFxuICAgICAgOTEsXG4gICAgICA2MixcbiAgICAgIDIxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOMUNIVFo5WVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2ODA3MTY4Mjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4MDYwODQzMjc1MDgwMTo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BUQyt0QUhFSzZXZzdVR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidXFJK0UxVGp1ZTNlVllHYnkvSHVoRjhSMG9uSGFZWXRoeDNhelRkb0dVaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJOS3NPZ0hOS0pFTnJzbXFONUxXcUJTUjc3YnBjU25WSFZkQUE5cTdVVUJsTUZ5bU1rcUZKVVBRNzc3dWJGdXVJbytXcDdYcFA0anNvb0dtVWNpL01Ddz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxY24zVWE1R3gvdzFTa200WlJRQUxLZnZLekJmdlhDYkUrUlJZWTMwbjBpa1k4QzM4Qit2RjBvYlJDTEZuTzdxUFFHNzJURG5uWHBkZWgxdWM0SEpqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTY4MDcxNjgyOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxODEzODA5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRzdZXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHN1kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTNkg2enNwRlZLYkQrT1orL293cnJuUlZUdmxDYWdlSFh2NzUweS9mTTRjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNDg4Mjc3NjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE3OTMzMzA0MjJcIn0iCn0="  // PUT your SESSION_ID 


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
