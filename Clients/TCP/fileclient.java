/* File Client *********************************************************/

import java.io.*;
import java.net.*;
import java.util.Timer;

public class fileclient{
	public static void main(String[] argv) throws Exception {
		long startTime = System.currentTimeMillis();
		long elapsedTime;
		byte []b=new byte[2002];
		Socket sr=new Socket("192.168.8.102",5643);
		InputStream is=sr.getInputStream();
		FileOutputStream fr=new FileOutputStream("C:/Users/gvanw/Desktop/Jaar 3/Semester 2/ITRW 322 - Networks/Reports/Examples JAVA/itrw322-javaTCP/client.txt");
		is.read(b,0,b.length);
		fr.write(b, 0, b.length);
		
		System.out.println("Bytes: " + b.length);
		
		elapsedTime = System.currentTimeMillis() - startTime ;
		System.out.println("Time: " + elapsedTime + "ms");
	}
}