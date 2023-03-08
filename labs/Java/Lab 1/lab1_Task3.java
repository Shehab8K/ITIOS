class Third{
   public static void main(String args[])
   {
      if(args.length > 0)
	{
          try{
                int NumberOfLoops = Integer.parseInt(args[1],10);
                for(int i=0; i<NumberOfLoops; i++)
                {
                  System.out.println(args[0]);
                 }
             }
           catch(Exception ex)
             {
                System.out.println("Don't enter float number , Integer Only");
             }
        }
   }
}