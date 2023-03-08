class Fourth
{
   public static void main(String args[])
	{
		String ip = new String("192.168.1.1");
		String arrsize[] = ip.split("\\.");
		for(int i = 0; i<arrsize.length; i++)
		{
		   System.out.println(arrsize[i]);
		}
	}
}