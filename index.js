const express = require("express");
const app = express();
const scrape = require("./scrapper.js")

app.get("/", async (req, res) => {
    let data = await scrape(req.query.url)
    res.json(data);
  });

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});