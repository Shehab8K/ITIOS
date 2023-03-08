import java.util.function.Function;
import java.lang.Math;

class Coefficient
{
    double a,b,c;
}

class Roots
{
	double r1, r2;
}


class solution implements Function<Coefficient, Roots>
{
	public Roots apply(Coefficient coeff)
	{
		Roots r = new Roots();
		
		double d = coeff.b * coeff.b- 4 * coeff.a * coeff.c;
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


class main

{
	public static void main(String arg[])
	{

		Coefficient coeff = new Coefficient();
		coeff.a = Double.parseDouble(arg[0]);
		coeff.b = Double.parseDouble(arg[1]);
		coeff.c = Double.parseDouble(arg[2]);

              solution obj=new solution(); 

		Roots r ;
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