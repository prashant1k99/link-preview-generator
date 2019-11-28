const express = require("express");
const app = express();
const axios = require("axios");
const cheerio = require("")

function scrape(url){
  let data;
  
}

app.get("/", function(request, response) {
  axios.get('https://blog.bitsrc.io/https-blog-bitsrc-io-how-to-perform-web-scraping-using-node-js-5a96203cb7cb')
  .then( data => {  
    response.send(data);
  })
  .catch( err => {
    console.log(err)
  })  
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
