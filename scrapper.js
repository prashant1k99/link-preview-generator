const axios = require('axios');
const cheerio = require('cheerio');

const url = "https://blog.bitsrc.io/https-blog-bitsrc-io-how-to-perform-web-scraping-using-node-js-5a96203cb7cb"

axios.get(url)
  .then( data => {
    let fData = [];
    const $ = cheerio.load(data.data);
    fData.title = $('title').text();
    fData.description = $('')
    console.log(fData.title)
  })
  .catch( err => {
    console.log(err)
  }) 