class Second2{
   public static void main(String args[])
   {
       int count = 0;
       String myStr = new String("ITI develops people and ITI house of developers and ITI for people");
       int index=0;
	//System.out.println(myStr.indexOf("ITI",53));
       while(myStr.indexOf("ITI",index)!= -1)
	{
	  index = myStr.indexOf("ITI",index);
	  count++;
	  index++;
	}
	System.out.println("Number of ITI = "+ count);
   }
} // myStr.substring(myStr.indexOf("ITI")