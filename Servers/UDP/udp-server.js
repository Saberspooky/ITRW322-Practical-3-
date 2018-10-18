//Creating variables for the API's
var dgram = require('dgram');
var fs = require("fs");
var Stopwatch = require("node-stopwatch").Stopwatch;

//Setting the server to UDP
var server = dgram.createSocket('udp4');

//Variables for the host and port
var PORT = 33333;
var HOST = '192.168.8.100';

//Setting the path for the file to be saved
var wstream = fs.createWriteStream('C:/Users/gvanw/Desktop/Jaar 3/Semester 2/ITRW 322 - Networks/Reports/Practical 3/Files Recieved/UDP/UDP_Recieved.jpg');


//Creating the stopwatch
var stopwatch = Stopwatch.create();

//Creating the server
server.on('message', function (message, remote) {
  //Starting the stopwatch
  stopwatch.start(); 
  //Writing/Saving the file
  wstream.on('finish', function () {  
  //Console.log to say when the file has been written
  console.log('file has been written');
  });
  //Writing the file that is recieved to the location
  wstream.write(message);
  //Ending the writing process
  wstream.end();
  //console.log to say the file size length
  console.log('File size recieved: ' + message.length)

  //Console.log to tell the time that has expired to send the file to the server
  console.log("milliseconds: " + stopwatch.elapsedMilliseconds);
  console.log("seconds: " + stopwatch.elapsed.seconds);
});

//Stopping the stopwatch
stopwatch.stop();

//Binding the server to the host and port numbers
server.bind(PORT, HOST);
//console.log saying where the udp transfer is bound to
console.log('Server is bound to: ' + HOST +':'+ PORT)
