const axios = require("axios");
const cheerio = require("cheerio");

// const url = "https://blog.bitsrc.io/https-blog-bitsrc-io-how-to-perform-web-scraping-using-node-js-5a96203cb7cb"

const validateURL = url => {
  ^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$
}

const scrape = url => {
  return axios
    .get(url)
    .then(data => {
      let fData = [];
      const $ = cheerio.load(data.data);
      fData.sitename = $("meta[property='og:site_name']").attr("content");
      //   Normal
      let site = {
        type: "Simple",
        title: $("title").text(),
        description: $("meta[name='description']").attr("content"),
        icon: $("link[rel='icon']").attr("href")
      };
      //     OG
      let og = {
        type: "OG",
        title: $("meta[property='og:title']").attr("content"),
        description: $("meta[property='og:description']").attr("content"),
        image: $("meta[property='og:image']").attr("content")
      };
      //   Twitter Card
      let tw = {
        type: "Twitter Card",
        title: $("meta[property='twitter:title']").attr("content"),
        description: $("meta[property='twitter:description']").attr("content"),
        image: $("meta[property='twitter:image:src']").attr("content")
      };
      fData.push(site);
      fData.push(og);
      fData.push(tw);
      return(fData);
    })
    .catch(err => {
      return(err);
    });
};
module.exports = scrape;