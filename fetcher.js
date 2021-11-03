const fs = require('fs');
const request = require('request');
const readline = require('readline');

const inputs = process.argv.slice(2);
const url = inputs[0];
const path = inputs[1];

  request(url, (error, response, body) => {

    fs.writeFile(path, body, err => {
      console.log(`Downloaded and saved ${body.length} bytes to ${path}`)
      if (err) {
        console.error(err)
        return
      }
      //file written successfully
    })
  });
  
