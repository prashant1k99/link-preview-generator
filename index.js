const express = require("express");
const app = express();
const scrape = require("./scrapper.js")

app.get("/", async (req, res) => {
    let data = await scrape(req.query.url)
    if(Array.isArray(data)){
      res.json(data);
    }
    res.status(400).send('Bad Request');
  });

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});