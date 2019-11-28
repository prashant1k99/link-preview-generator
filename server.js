const express = require("express");
const app = express();
const axios = require("axios");
const cheerio = require("cheerio");

function scrape(url){
  axios.get(url)
  .then( data => {  
    let reqData = data => {
      data = [];
      const $ = cheerio.load(data.data);
      data.title = $('title').text;
      console.log(data)
    }
    return data;
  })
  .catch( err => {
    console.log(err)
  })  
}

app.get("/", function(request, response) {
  let data = scrape('https://blog.bitsrc.io/https-blog-bitsrc-io-how-to-perform-web-scraping-using-node-js-5a96203cb7cb');
  
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
