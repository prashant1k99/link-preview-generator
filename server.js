const express = require("express");
const app = express();
const axios = require("axios");
const cheerio = require("cheerio");

function scrape(url) {
  axios
    .get(url)
    .then(data => {
      let fData = [];
      const $ = cheerio.load(data.data);
      fData.sitename = $("meta[property='og:site_name']").attr("content");
      //   Normal
      let site = {
        type: "Normal",
        title: $("title").text(),
        description: $("meta[name='description']").attr("content")
      };
      //     OG
      let og = {
        type: "OG",
        title: $("meta[property='og:title']").attr("content"),
        description: $("meta[property='og:description']").attr("content")
      };
      //   Twitter Card
      let tw = {
        type: "Twitter Card",
        title: $("meta[property='twitter:title']").attr("content"),
        description: $("meta[property='twitter:description']").attr("content")
      };

      fData.push(site);
      fData.push(og);
      fData.push(tw);
      console.log(fData);
      return fData;
    })
    .catch(err => {
      console.log(err);
    });
}

app.get("/", function(request, response) {
  let data = scrape(
    "https://blog.bitsrc.io/https-blog-bitsrc-io-how-to-perform-web-scraping-using-node-js-5a96203cb7cb"
  );
  response.json()
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
