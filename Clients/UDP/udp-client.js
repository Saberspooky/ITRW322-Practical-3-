//Creating variables for the needed API's
var fs = require("fs");
var dgram = require('dgram');
var Stopwatch = require("node-stopwatch").Stopwatch;

//Creating a socket for the udp transport
var client = dgram.createSocket('udp4');

//Variables for the port host and message
var PORT = 33333;
var HOST = '192.168.8.100';
var message;

//Creating the stopwatch
var stopwatch = Stopwatch.create();
//Starting the stopwatch
stopwatch.start();
//Setting the file to be read
fs.readFile('C:/Users/gvanw/Desktop/Jaar 3/Semester 2/ITRW 322 - Networks/Reports/Practical 3/Files to Send/UDP/UDP-TEST-1.jpg',(err,data)=>{
  //Message assigned to the buffer type
  message =  Buffer.from(data,'base64');
  //Sending the file and message to the server
  client.send(message, 0, data.length, PORT, HOST, function(err, bytes) {
    //If to check if an error occured  
    if (err) {
      //Console will be returned if an error has occured
      return console.log(err);
    }
    //Console.log to say where the file was send to
    console.log('UDP file sent to ' + HOST +':'+ PORT);
    //Console.log to say what the file size was
    console.log('File size: ' + data.length);

    //Console.log to tell the time that has expired to send the file to the server
    console.log("milliseconds: " + stopwatch.elapsedMilliseconds);
    console.log("seconds: " + stopwatch.elapsed.seconds);
  });
});

//Stopping the stopwatch
stopwatch.stop();