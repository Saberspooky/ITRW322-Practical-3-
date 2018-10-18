//Variables to load the needed API's 
var net = require('net');
var fs = require('fs');

//Creating variables for the port number and host address as well as the filepath to the file we want to send
var PORT = 9001;
var HOST = 'localhost';
var FILEPATH = 'C:/Users/gvanw/Desktop/Jaar 3/Semester 2/ITRW 322 - Networks/Reports/Practical 3/Files to Send/TCP/TCP-TEST.jpg';

var client = new net.Socket()

//Connecting to the TCP server
client.connect(PORT,HOST,function() {
    //Console.log to say the client connected to the server
    Console.log('Client Connected to server');

    //Sending the file to the server
    var fileStream = fs.createReadStream(FILEPATH);
    //Streaming the file and checking if an error occurs
    fileStream.on('error', function(err){
        console.log(err);
    })
    //Streaming the file
    fileStream.on('open',function() {
        fileStream.pipe(client);
    });
});

//Closing the connection if the file has been sent
client.on('close', function() {
    //Console.log to say the connection is closed
    console.log('server closed connection')
});

//checking when an error occurs
client.on('error', function(err) {
    //Console.log to say an error has occured
    console.log(err);
});