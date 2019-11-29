const express = require("express");
const app = express();
const scrape = require("./scrapper.js")

app.get("/", async (req, res) => {
    // let data = await scrape("https://blog.bitsrc.io/https-blog-bitsrc-io-how-to-perform-web-scraping-using-node-js-5a96203cb7cb")
    let data = await scrape(req.body)
    res.json(data);
  });

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});