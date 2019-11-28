const express = require("express");
const app = express();
const axios = require("axios");

function scrape(url){
  let data;
  axios.get(url)
  .then( data => {
    this.data = data;
  })
  .catch( err => {
    console.log(err)
  }) 
  return data
}

app.get("/", function(request, response) {
  
  const res = scrape('https://blog.bitsrc.io/https-blog-bitsrc-io-how-to-perform-web-scraping-using-node-js-5a96203cb7cb');
  console.log("Fire");
  response.send("Hello");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
