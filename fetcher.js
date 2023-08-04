/* eslint-disable no-irregular-whitespace */
/*

## GOAL ##
Implement a node app called fetcher.js.

It should take two command line arguments:

a URL
a local file path



##
Instruction

Run `npm init` and then `npm install request` within your new directory to install the library.
##

ideal result:
> node fetcher.js http://www.example.edu/ ./index.html
Downloaded and saved 3261 bytes to ./index.html



Question
How can you get the file size?

There are a couple of ways. If you dig into Node's documentation, you'll find there is a way to get statistics about a file that is sitting on your file system. However, you may not need to do that if you think about the fact that 1 character is equal to 1 byte.




*/

/*

const request = require("request");


const args = process.argv;

request("http://www.google.com", (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body); // Print the HTML for the Google homepage.
});

const fs = require("fs");

const content = "Some content!";

fs.writeFile("/Users/joe/test.txt", content, (err) => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});

fs.writeFile("/Users/joe/test.txt", content, { flag: "a+" }, (err) => {});


*/

const request = require("request");

// importing request library

const fs = require("fs");

// included in node, not needed to be installed, just need to require the import / use by default

const url = process.argv[2];

// taking in first argument - URL

const path = process.argv[3];

// taking path from command line

request(url, (error, response, body) => {
  // standard request call , first arg is url, second is a callback with 3 parameters, it'll do something then return error/response/body - then it becomes -> what am I going to do with this info

  if (error) {
    console.error(`Failed to request the URL: ${error}`);
    return;
  }

  // if there are any errors (url doesn't exist, not authorized) then request will fill that variable

  // if request retrieves, then it won't flag the condition

  fs.writeFile(path, body, (err) => {
    if (err) {
      console.error(`Failed to write to file: ${err}`);
      return;
    }
    // using FS library from node, it's like a big object with one of the keys is writefile and it's a function

    //write file takes in the path location (./index.html)

    console.log(`Downloaded and saved ${body.length} bytes to ${path}`);

    //summary of what happened - if there was no error this wouldn't be logged, body.length is going to tell size of the file and then path is from process.argv[3]
  });
});
