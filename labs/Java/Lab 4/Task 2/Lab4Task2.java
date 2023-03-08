import java.util.ArrayList;
import java.util.List;


abstract class Shape {
    public abstract void draw();
}



class Rectangle extends Shape {
    public void draw() {
        System.out.println("Drawing the rectangle is done");
    }
}
class Circle extends Shape {
    public void draw() {
        System.out.println("Drawing the circle is done");
    }
}


class  Test{
    public static void dealWithShape(List<? extends Shape> Shapes) {
        for (int i = 0; i < Shapes.size(); i++) {
            Shape shape = Shapes.get(i); 
            shape.draw();
        }
    } 
}


 class Second
{
	public static void main(String[] args) {
		List<Shape> shapes= new ArrayList<Shape>();
		List<Rectangle> rectangle= new ArrayList<Rectangle>();
		List<Circle> circle= new ArrayList<Circle>();

    		Rectangle myRec = new Rectangle();
     		shapes.add(myRec);
		Circle myCir = new Circle();
		shapes.add(myCir);
		Test TestShape=new Test();
        TestShape.dealWithShape(shapes);
		rectangle.add(myRec);
	}
}