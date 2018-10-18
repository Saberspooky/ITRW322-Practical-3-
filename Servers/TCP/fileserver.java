//Import data 
import java.io.*;
import java.net.*;

//Creating the class for the TCP server
public class fileserver {
	//Creating the main method for the TCP server
	public static void main(String[] args) throws Exception {
		//Creating the socket to send the text file on the port number
		ServerSocket s=new ServerSocket(5643);
		Socket sr=s.accept();
		//Path to the file you want to send
		FileInputStream fr=new FileInputStream("C:/Users/Jacques/Desktop/itrw322-javaTCP/server.txt");
		byte b[]=new byte[2002];
		fr.read(b, 0, b.length);
		OutputStream os=sr.getOutputStream();
		os.write(b, 0, b.length);
	}
}