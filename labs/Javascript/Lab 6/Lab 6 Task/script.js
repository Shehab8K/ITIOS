// Part 1
class Shape {
    constructor(name, sides, sideLength){
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
    calcPerimeter(){
       console.log(this.sideLength*this.sides);
    }
}

// let square = new Shape("square",4,5);
// square.calcPerimeter();

// let triangle = new Shape("triangle",3,3);
// triangle.calcPerimeter();

// part 2
class Square extends Shape{
    constructor(sideLength){
        super(sideLength);
        this.name = "square";
        this.sides = 4;
        this.sideLength = sideLength;
    }

    calcArea(){
       console.log(this.sideLength*this.sideLength);
    }
}

// let square = new Square(6);
// square.calcPerimeter();
// square.calcArea();


// Part 3
class Triple{
    static customName = "Tripler";
    static description = "I triple any number you provide";

    static calculate(n=1){
        return n*3;
    }
}

class SquaredTriple extends Triple{
    static longDescription;
    static description = "square the triple of any number you provide";

    static calculate(n){
       return Triple.calculate(n) * Triple.calculate(n);
    }
}

console.log(Triple.description); // 'I triple any number you provide'
console.log(Triple.calculate()); // 3
console.log(Triple.calculate(6)); // 18

console.log(SquaredTriple.calculate(3)); // 81 (not affected by parent's instantiation)
console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName); // Tripler
