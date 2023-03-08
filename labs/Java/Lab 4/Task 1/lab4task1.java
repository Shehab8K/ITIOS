//import java.io.IOException;

    class ExceptionMsg extends Exception {   // Exception class
    public ExceptionMsg(){}
    public ExceptionMsg(String message)
	{
	   super(message);
	}
}

       class ExcTest{    // Class throwing exceptions by 3 methods

	//public ExcTest(){} // should be generated auto
	public void low(String item)throws ExceptionMsg
	{
	  if(item.equals("shehab")) throw new ExceptionMsg("Input Can't be shehab");
	}
	public void mid(String item)throws ExceptionMsg
	{
	  if(item.equals("ITI")) throw new ExceptionMsg("Value can't be ITI");
	}
	public void high(String item)throws ExceptionMsg
	{
	  if(item.equals("failed")) throw new ExceptionMsg("You failed in Exam");
	}
}

      class First{
	public static void main(String args[])
	{
	   ExcTest test = new ExcTest();
	   try{
		test.low(args[0]);
	      }
	    catch(ExceptionMsg e)
	      {
			e.printStackTrace();
	      }
		  try{
		test.mid(args[1]);
	      }
	    catch(ExceptionMsg e)
	      {
			e.printStackTrace();
	      }
		  
		   try{
		test.high(args[2]);
	      }
	    catch(ExceptionMsg e)
	      {
			e.printStackTrace();
	      }
	}
}