
// © 2025 Debraj. All Rights Reserved.
// respect the work, don’t just copy-paste.

const fs = require('fs')

const fquoted = {
    channel: {
        key: {
            fromMe: false,
            participant: "",
            remoteJid: ""
        },
        message: {
            newsletterAdminInviteMessage: {
                newsletterJid: "",
                newsletterName: " X ",
                caption: "Zᴀʜɪᴅ Kɪɴɢ",
                inviteExpiration: "0"
            }
        }
    }
};

module.exports = { fquoted };

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})

