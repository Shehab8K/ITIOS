class Second{
   public static void main(String args[])
   {
      int count = 0;
      String myStr = new String("ITI develops people and ITI house of developers and ITI for people");
      String words[] = myStr.split(" ");
      for(int i=0; i<words.length; i++)
      {
	  if(words[i].equals("ITI"))
           {
              count++;
           }	
      }
	System.out.println("Number of ITI = "+ count);
   }
}