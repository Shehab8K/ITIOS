import java.lang.*;

interface Checker {

	 boolean Alphabets(String myStr, int size);

}

class Fifth
{
		public static void main(String[] args)
	{
		String str = new String(args[0]);
		int len = str.length(); 

		Checker alpha = (myStr, size) ->{
		if (myStr.equals("")) 
		{ 
			return false;
		}

		for (int i = 0; i < size; i++) 
		{
			if (!Character.isLetter(myStr.charAt(i))) 
			{
				return false;
			}
		}
		return true;
	};
		System.out.print(alpha.Alphabets(str, len));
	}
}