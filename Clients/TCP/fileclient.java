//Imports needed for the TCP client side for a text file transfer
import java.io.*;
import java.net.*;
import java.util.Timer;

//Class created for file client 
public class fileclient{
	//Main method created for TCP client
	public static void main(String[] argv) throws Exception {
		//Creating and starting timer
		long startTime = System.currentTimeMillis();
		long elapsedTime;
		byte []b=new byte[2002];
		//Creating the socket with server andress and port number
		Socket sr=new Socket("192.168.8.102",5643);
		//Creating the input stream to write the incoming text file.
		InputStream is=sr.getInputStream();
		//Setting the patch for the file to be written to
		FileOutputStream fr=new FileOutputStream("C:/Users/gvanw/Desktop/Jaar 3/Semester 2/ITRW 322 - Networks/Reports/Examples JAVA/itrw322-javaTCP/client.txt");
		is.read(b,0,b.length);
		fr.write(b, 0, b.length);
		//Print ou the length
		System.out.println("Bytes: " + b.length);
		
		elapsedTime = System.currentTimeMillis() - startTime;
		//Print ou the time that has elapsed
		System.out.println("Time: " + elapsedTime + "ms");
	}
}