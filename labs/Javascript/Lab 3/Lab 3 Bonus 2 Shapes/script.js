alert("Choose a shape from (circle, square, rectangle, triangle, parallelogram, trapezium, ellipse)");
var shape = prompt("Enter name of shape");

var radius = 0, base = 0, height = 0, length = 0, width = 0, length1 = 0, length2 = 0, minor = 0, major = 0;

switch (shape) {
    case "circle":
        radius = Number(prompt("Enter the radius of the circle"));
        alert("Area of circle is " + (3.14 * (radius * radius)));
        break;

    case "triangle":
        base = Number(prompt("Enter the base of triangle"));
        height = Number(prompt("Enter the height of triangle"));
        alert("Area of triangle is " + (0.5 * base * height));
        break;

    case "square":
        length = Number(prompt("Enter the length of side"));
        alert("Area of square is " + (length * length));
        break;

    case "rectangle":
        width = Number(prompt("Enter the width of rectangle"));
        height = Number(prompt("Enter the height of rectangle"));
        alert("Area of Rectangle is " + (width * height));
        break;

    case "parallelogram":
        base = Number(prompt("Enter the base of parallelogram"));
        height = Number(prompt("Enter the vertical height of parallelogram"));
        alert("Area of parallelogram is " + (base * height));
        break;

    case "trapezium":
        length1 = Number(prompt("Enter the lenght1 of trapezium"));
        length2 = Number(prompt("Enter the lenght2 of trapezium"));
        height = Number(prompt("Enter the height of trapezium"));
        alert("Area of trapezium is " + (((length1 + length2) /2) * height));
        break;

    case "ellipse":
        minor = Number(prompt("Enter the minor of ellipse"));
        major = Number(prompt("Enter the major of ellipse"));
        alert("Area of Ellipse is " + (3.14 * minor * major));
        break;

    default:
        alert("Not valid shape")
        break;
}