
const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();
// Настройка сервера Express
const options = {
    cert: fs.readFileSync('./sslcert/fullchain.pem','utf8'),
    key: fs.readFileSync('./sslcert/privkey.pem','utf8')
};


app.use('/',(req,res)=>{
    return res.send('hello')
})
app.use(require('helmet')());

const start = ()=>{
    https.createServer(options, app).listen(8443);
    app.listen(3001,()=>{
        console.log('server start')
    });


}

start()
