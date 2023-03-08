import java.util.function.*;


class converter implements Function<Integer,Float>
{
    
    public Float apply(Integer t)
    { 
        return (t * 1.8f) + 32;
    }
       
} 
 
class main
{
public static void main(String args[])
{
 converter con = new converter();
 
 System.out.print("The degree is "+ con.apply(Integer.parseInt(args[0])) );
}
}