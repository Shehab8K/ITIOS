import java.math.BigDecimal;
class Complex <T extends BigDecimal>{
	T real, imag;

	Complex(T r, T i){
		this.real = r;
		this.imag = i;
	}

	public String toString(){
		StringBuffer sb= new StringBuffer();
		sb.append(real);
		sb.append('+');
		sb.append(imag);
		sb.append('i');
		return sb.toString();
	}
	
	public T getReal()
    {
        return real;
    }

    public T getImag()
    {
        return imag;
    }
    
	public Complex<T> add(Complex<T> second){
		return new Complex(real.add(second.real),imag.add(second.imag));
	}
	
	public Complex<T> subtract(Complex<T> second){
		return new Complex(real.subtract(second.real),imag.subtract(second.imag));
	}
	
	public Complex<T> multiply(Complex<T> second){
		return new Complex(real.multiply(second.real),imag.multiply(second.imag));
	}
}
 class Third
{
	public static void main(String args[])
	{
        BigDecimal number1 = new BigDecimal(args[0]);
        BigDecimal number2 = new BigDecimal(args[1]);
        Complex<BigDecimal> comp1 = new Complex<>(number1,number2);
        Complex<BigDecimal> comp2 = new Complex<>(number1,number2);
		////// Operations //////////
        Complex<BigDecimal> total = comp2.add(comp1);
        Complex<BigDecimal> sub = comp2.subtract(comp1);
		Complex<BigDecimal> multy = comp2.multiply(comp1);

		
        System.out.println("The Real sum is " + total.getReal());
        System.out.println("The Imag sum is " + total.getImag());

		System.out.println("The Real sum is " + sub.getReal());
        System.out.println("The Imag sum is " + sub.getImag());
		
		System.out.println("The Real sum is " + multy.getReal());
        System.out.println("The Imag sum is " + multy.getImag());
    }

}