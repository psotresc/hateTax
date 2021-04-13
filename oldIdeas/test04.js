var http = require('http');

//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
var options = {
  host: 'https://youtube.googleapis.com/youtube/v3/commentThreads?',
  path: '?textFormat=plainText&part=snippet&videoId=BpobjOFkt8E&maxResults=50&key=AIzaSyDcGHTBl5S-BZr6LimGx52ZuU8FYhyGdtk'
};

callback = function(response) {
  var str = '';

  //another chunk of data has been received, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been received, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
}

http.request(options, callback).end();