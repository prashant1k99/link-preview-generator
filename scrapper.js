const axios = require('axios');
const cheerio = require('cheerio');

const url = "https://blog.bitsrc.io/https-blog-bitsrc-io-how-to-perform-web-scraping-using-node-js-5a96203cb7cb"

axios.get(url)
  .then( data => {
    let fData = [];
    let si = fData.site;
    let og = fData.o_g;
    let tw = fData.twitter;
    const $ = cheerio.load(data.data);
    fData.sitename = $("meta[property='og:site_name']").attr("content");
//   Normal
    fData.site.title = $('title').text();
    fData.site.description = $("meta[name='description']").attr("content");
  
//     OG
    og.title = $("meta[property='og:title']").attr("content");
    og.description = $("meta[property='og:description']").attr("content");
  
//   Twitter Card
    tw.title = $("meta[property='twitter:title']").attr("content");
    tw.description = $("meta[property='twitter:description']").attr("content");
  
    console.log(fData)
  })
  .catch( err => {
    console.log(err)
  }) 