const express = require("express");
const app = express();
const axios = require("axios");
const cheerio = require("cheerio");

function scrape(url) {
  let FinalData;
  axios
    .get(url)
    .then(data => {
      return fetchData(data);
    })
    .catch(err => {
      console.log(err);
    });
  
  const fetchData = (data) => {
    let fData = [];
      const $ = cheerio.load(data.data);
      fData.sitename = $("meta[property='og:site_name']").attr("content");
      let site = {
        type: "Normal",
        title: $("title").text(),
        description: $("meta[name='description']").attr("content")
      };
      let og = {
        type: "OG",
        title: $("meta[property='og:title']").attr("content"),
        description: $("meta[property='og:description']").attr("content")
      };
      let tw = {
        type: "Twitter Card",
        title: $("meta[property='twitter:title']").attr("content"),
        description: $("meta[property='twitter:description']").attr("content")
      };
      fData.push(site);
      fData.push(og);
      fData.push(tw);
      return (fData);
  }
}

app.get("/", async (req, res) => {
  let data = await scrape(
    "https://blog.bitsrc.io/https-blog-bitsrc-io-how-to-perform-web-scraping-using-node-js-5a96203cb7cb"
  )
    console.log(data);
    res.json(data);
  });

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});