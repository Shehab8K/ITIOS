import java.util.function.*;
import java.lang.Math;

class coe{
   public double a,b,c;
}

class Roots{
  public double root1, root2;
}

class Coefficient implements Function<coe, Roots>
{
    
    public Roots apply(Coefficient coeff)
	{
		Roots r = new Roots();
		 
		double d = coe.b * coe.b- 4 * coe.a * coe.c;
		if (d > 0) 
		{
			r.r1 = (-coeff.b + Math.sqrt(d)) / (2 * coeff.a);
			r.r2 = (-coeff.b - Math.sqrt(d)) / (2 * coeff.a);
		}

		else if (d == 0) 
		{
		  r.r1 = r.r2 = -coeff.b / (2 * coeff.a);
		}

		else 
		{
		  return null;
		}
		
		return r;
	}
}
       
 
class QuadraticEquationFunction

{
	public static void main(String arg[])
	{

		coe coeff = new coe();
		coeff.a = Double.parseDouble(arg[0]);
		coeff.b = Double.parseDouble(arg[1]);
		coeff.c = Double.parseDouble(arg[2]);

                Coefficient obj=new Coefficient(); 
 
		Roots r = new Roots();
		r = obj.apply(coeff);
		if(r == null)
		{
		    System.out.println("Complex Number");
		}
		else
		{
		
		   System.out.println("r1="+ r.r1);	
		   System.out.println("r2="+r.r2);
		}
	}
}