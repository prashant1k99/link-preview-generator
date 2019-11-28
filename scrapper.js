const axios = require('axios');
const cheerio = require('cheerio');

const url = "https://blog.bitsrc.io/https-blog-bitsrc-io-how-to-perform-web-scraping-using-node-js-5a96203cb7cb"

axios.get(url)
  .then( data => {
    let fData = [];
    let og = fData.og;
    let tw = fData.twitter;
    const $ = cheerio.load(data.data);
    fData.title = $('title').text();
    og.title = $("meta[property='description']").attr("content");
    tw.title = $("meta[property='twitter:title']").attr("content");
    console.log(fData.description)
  })
  .catch( err => {
    console.log(err)
  }) 