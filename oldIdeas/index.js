const express = require('express')

const CONFIG = require('./config')

const google = require('googleapis').google

const cookieParser = require('cookie-parser')

const jwt = require('jsonwebtoken')

const app = express()

app.set('view engine', 'ejs')

app.set('views',__dirname)
app.use(cookieParser())

const OAuth2 = google.auth.OAuth2

app.get('/',(req,res) => {
    const oauth2client = new OAuth2(
        CONFIG.oauth2Credentials.client_id,
        CONFIG.oauth2Credentials.client_secret,
        CONFIG.oauth2Credentials.redirect_uri[0]
    )

    const loginLink =  oauth2client.generateAuthUrl({
        access_type: 'offline',
        scope: CONFIG.oauth2Credentials.scopes
    })

    return res.render('index', {loginLink:loginLink})
})
app.listen(5000, ()=>{
    console.log('App escuchando en puerto 5000');
})