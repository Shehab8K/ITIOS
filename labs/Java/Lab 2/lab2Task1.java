import java.util.Random;
import java.lang.System;

class First{
	public static void main(String args[])
	{
	  int NumArr[]= createArray(1000);
	  int max, min;
	  long BeforeOp, AfterOp, TimeDiff;
          max = min = NumArr[0];
	  BeforeOp = System.nanoTime();
	  for(int i=0; i<1000; i++)
	   {
		if(NumArr[i]>max)
		{
		   max = NumArr[i];
 
		}else if (NumArr[i] < min)
		{
		  min = NumArr[i];
		}		
	   }	   
	  AfterOp = System.nanoTime();
	  TimeDiff = AfterOp - BeforeOp;
	  System.out.print("Max = "+max+" Min = "+min+" Time was : "+TimeDiff);
	}

	public static int[] createArray(int size)
	{
	   Random ran = new Random();
	   int temp[] = new int[size];
	   for(int i=0; i<1000; i++)
		{
		   temp[i] = ran.nextInt();	
		}
	   return temp;
	}

}