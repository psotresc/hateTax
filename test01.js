var sentiment = require('sentiment-multilang');
const fetch = require('node-fetch')

require('dotenv/config')
var Twitter = require('twitter');

const express = require("express");
const app = express();
const router = express.Router();
var port = process.env.PORT || 8080;
var ejs = require('ejs');

const language = require('@google-cloud/language');
const client = new language.LanguageServiceClient();
const {Storage} = require('@google-cloud/storage');

const EventEmitter = require('events');
const { text } = require('body-parser');

// VARIABLES ------------ 
var perfil = 'walamagna'
var video = 'BpobjOFkt8E'
var descuento = 25;

consultarTwitter(perfil)
// consultarYoutube(video)


//  TWITTER *****************************************************************************

function consultarTwitter(perfil){
    var arrTweets = []
    var client = new Twitter({
        consumer_key: process.env.apiKey,
        consumer_secret: process.env.apiSecretKey,
        access_token_key: process.env.accessToken,
        access_token_secret: process.env.accessTokenSecret
    });
    
    var params = {screen_name: perfil};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            // consultarDatos(tweets[5].text)
            for (let i=0; i<10; i++){
                arrTweets.push(tweets[i].text)
            }
            analyzeSentimentOfText(arrTweets)
        }
    });
}

// FACEBOOK


// YOUTUBE ****************************************************************************


function consultarYoutube(video){
    let liga = `https://youtube.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&videoId=${video}&maxResults=10&${process.env.twitterKey}` 
    // console.log(liga);
    fetch(liga)
        .then((res) => res.json())
        .then(output => {
            const data = output;
            var resultado = data.items[1].snippet.topLevelComment.snippet.textDisplay
            consultarDatos(resultado)
        })

}

// ANALISISx ***************************************************************************
// function consultarDatos(data){
        
//         var sentimiento = sentiment(data, 'es')
//         console.log(sentimiento)

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
// }
// Instantiates a client. If you don't specify credentials when constructing
// the client, the client library will look for credentials in the
// environment.

// ANALISIS GOOGLE **********************************************************
const storage = new Storage();
// Makes an authenticated API request.
async function listBuckets() {
  try {
    const results = await storage.getBuckets();

    const [buckets] = results;

    console.log('Buckets:');
    buckets.forEach(bucket => {
      console.log(bucket.name);
    });
  } catch (err) {
    console.error('ERROR:', err);
  }
}
listBuckets();

async function analyzeSentimentOfText(text) {
    // [START language_sentiment_text]
    // Imports the Google Cloud client library
    const language = require('@google-cloud/language');
  
    // Creates a client
    const client = new language.LanguageServiceClient();
  
    /**
     * TODO(developer): Uncomment the following line to run this code.
     */
    // const text = 'Your text to analyze, e.g. Hello, world!';
  
    // Prepares a document, representing the provided text
    const document = {
      content: text,
      type: 'PLAIN_TEXT',
    };
  
    // Detects the sentiment of the document
    const [result] = await client.analyzeSentiment({document});
  
    const sentiment = result.documentSentiment;
    console.log('Document sentiment:');
    console.log(`  Score: ${sentiment.score}`);
    console.log(`  Magnitude: ${sentiment.magnitude}`);
  
    const sentences = result.sentences;
    sentences.forEach(sentence => {
      console.log(`Sentence: ${sentence.text.content}`);
      console.log(`  Score: ${sentence.sentiment.score}`);
      console.log(`  Magnitude: ${sentence.sentiment.magnitude}`);
    });

    var resultado = Math.round(sentiment.score + sentiment.magnitude * (descuento/2)) 
    console.log(`El resultado es:${resultado}`)
    return resultado
    // [END language_sentiment_text]
  }
//CONEXIONES *****************************************************************************
router.get('/',function(req,res){
    res.send('<h1>Test</h1>');
});

var getData = function() {
    return Math.random().toString();
}

app.get('/ajax', function(req, res) {
    res.send(getData());
});

router.post('/youtube',function(req,res){
    var id = req.body.videoYoutube
    res.redirect('/youtube.html')
});

app.listen(port);
console.log('Servidor escuchando en :' + port);
// app.set('view engine', 'ejs');

// app.get('/', function(req,res){
//     res.render("index");
// })

// app.post('/youtube', function(req,resp){
//     console.log()
//     resp.render('youtube')
// })

// app.post('/youtube', function(req,resp){
//     console.log()
//     resp.render('youtube')
// })
// app.listen(port, function(){
//     console.log(`Escuchando en puerto ${port}`);
// })
