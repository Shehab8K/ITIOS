#include <iostream.h>

class A
{
public:
    int data;

    A() //Data member is initialized using the default constructor
    {
	cout << "Constructor of Class A is invoked" << endl;
	data = 0;
    }

    A(int a)
    {
	data = a;
    }
};

class B
{
private:
    int b;
    A obj2;

public:
    B()
    {
      cout << "Constructor of Class B is invoked" << endl;
    }
    B(int a) : obj2(a) //Constructor of class B
    {
	b = a;
    }

    //printing values of data members
    void printData()
    {
	cout << "Data of class B object is " << b << endl;
	cout << "Data of class A object in class B is " << obj2.data;
    }
};

int main()
{
    B obj;
  //  B obj1(25); //object of class B
  //  obj1.printData();
    return 0;
}
