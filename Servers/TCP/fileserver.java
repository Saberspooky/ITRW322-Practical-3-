/*TCP SERVER*
JACQUES VOSLOO
27236285
ITRW322
2018/10/18
*/

import java.io.*;
import java.net.*;

public class fileserver {
public static void main(String[] args) throws Exception {
ServerSocket s=new ServerSocket(5643);
Socket sr=s.accept();
FileInputStream fr=new FileInputStream("C:/Users/Jacques/Desktop/itrw322-javaTCP/server.txt");
byte b[]=new byte[2002];
fr.read(b, 0, b.length);
OutputStream os=sr.getOutputStream();
os.write(b, 0, b.length);
}
}
