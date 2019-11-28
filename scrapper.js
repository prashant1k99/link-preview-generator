const axios = require('axios');

const url = "https://blog.bitsrc.io/https-blog-bitsrc-io-how-to-perform-web-scraping-using-node-js-5a96203cb7cb"

axios.get(url)
  .then( data => {
    console.log(data)
  })
  .catch( err => {
    console.log(err)
  }) 