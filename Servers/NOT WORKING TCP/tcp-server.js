//TCP-Server
//This is the server side for the TCP file transfer
var net = require('net');
var fs = require('fs');

//Creation of the Server
var server = net.createServer(function(connection) {
    //Console.log to show the server is online
    console.log('Server connected');
    //Connection is established
    connection.on('data', function(data) {
        //Data was recieved from Client
        console.log('Data received');
        //Display the amount of data recieved
        console.log('Data is: \n' + data);
        //Creating a copy of the data
        var wData = data;
        
        //Writing/Saving the file to the location specified
        fs.writeFile('C:/Users/gvanw/Desktop/Jaar 3/Semester 2/ITRW 322 - Networks/Reports/Practical 3/Files Recieved/TCP_Recieved.jpg', wData, function(error) {
            //If to check if an error occured and the throw the error.
            if (error) throw error;
            //Console.log to say if the file was saved
            console.log('File Saved');
        })        
    });
});

//Creating variables for the host and port
var HOST = 'localhost';
var PORT = '9001'

//Creating the host and port number to listen on
server.listen(PORT, HOST, function() {
    //Bounding the server to the port number
    console.log('Server is bound to ' + PORT + '\n');

    //Waiting for a connection
    server.on('connection', function(){
        //Console.log to show when a connection is made
        console.log('Connection made.\n')
    })
});