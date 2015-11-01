// From "The Node Beginner Book: A comprehensive Node.js tutorial":
// 
// User should:
//    - Be able to use application with a web browser
//    - See a welcome page when requesting http://localhost:8888/start which
//      displays a file upload form
//    - Choose an image file to upload ane submitting the form, it should then
//      be uploaded to http://localhost:8888/upload, where it is displayed once
//      the upload is finished

var http = require('http');
var url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + ' received.');
    route(handle, pathname, response, request);
  }

  http.createServer(onRequest).listen(8888);
  console.log('Server has started.');
}

exports.start = start;