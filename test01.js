var sentiment = require('sentiment-multilang');
const fetch = require('node-fetch')

require('dotenv/config')
var Twitter = require('twitter');

var perfil = 'ChumelTorres'
var video = 'BpobjOFkt8E'

// consultarTwitter(perfil)
consultarYoutube(video)
//  TWITTER *****************************************************************************

function consultarTwitter(perfil){
    var client = new Twitter({
        consumer_key: process.env.apiKey,
        consumer_secret: process.env.apiSecretKey,
        access_token_key: process.env.accessToken,
        access_token_secret: process.env.accessTokenSecret
    });
    
    var params = {screen_name: perfil};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            consultarDatos(tweets[2].text)
        }
    });
}

// FACEBOOK


// YOUTUBE ****************************************************************************


function consultarYoutube(video){
    let liga = `https://youtube.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&videoId=${video}&maxResults=10&${process.env.twitterKey}` 
    console.log(liga);
    // fetch(liga)
    //     .then((res) => res.json())
    //     .then(output => {
    //         const data = output;
    //         var resultado = data.items[1].snippet.topLevelComment.snippet.textDisplay
    //         consultarDatos(resultado)
    //     })

}

// ANALISIS ***************************************************************************
function consultarDatos(data){
        
        var sentimiento = sentiment(data, 'es')
        console.log(sentimiento)

        // console.log(data);
        // console.log()
        // console.log(data.items[0].snippet.topLevelComment.snippet.authorDisplayName)
        // console.log(data.items[0].snippet.topLevelComment.snippet.likeCount)
        // const comment = new Comment({
        //     usuario: data.items[0].snippet.topLevelComment.snippet.authorDisplayName,
        //     comentarios: data.items[0].snippet.topLevelComment.snippet.textDisplay,
        //     puntaje: 5
        // });
        // comment.save();
        // console.log('Se guardaron datos');
}