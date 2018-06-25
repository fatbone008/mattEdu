const fs = require('fs')

fs.createReadStream('../wechatTest/MP_verify_5Wvcg0Pz0fw9WY2E.txt').pipe(fs.createWriteStream('../wechatTest/dist/MP_verify_5Wvcg0Pz0fw9WY2E.txt'));
