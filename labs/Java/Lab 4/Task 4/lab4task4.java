import java.lang.*;
import java.util.function.BiFunction;

interface Checker {

	 public void BetterString();

}

class MyString{
	
	public String BetterString(String s1,String s2,BiFunction<String,String,Boolean> bs){
		if(bs.apply(s1,s2)){
			
			return s1;
		}else{
			return s2;
		
		}
	}
			
}

class Fourth
{
		public static void main(String[] args)
	{	
	
		MyString Compare= new MyString();	
		if(args.length>1)
		{
			String longerSring=Compare.BetterString(args[0],args[1],(s1,s2)->s1.length()>s2.length());
			System.out.println(longerSring);
		}else
		{
			System.out.println("Please Enter two strings");
		}

	}
}