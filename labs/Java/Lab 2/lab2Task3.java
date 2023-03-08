import java.util.*;
class Third
{
 public static void main(String args[])
 {   
     int count = 0;
     String myStr = new String("ITI develops people and ITI house of developers and ITI for people");
     StringTokenizer str = new StringTokenizer(myStr);
     while(str.hasMoreTokens())
     {
	if(str.nextToken().equals("ITI"))
	{
	   count++;
	}
     }
	System.out.println("Number of ITI = "+ count);
 }
}