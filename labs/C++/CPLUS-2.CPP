#include<iostream.h>
#include<string.h>
#include<CONIO.h>

class base
{
  protected:
  int z;

  public:
  base()
  {
    z=0;
  }

  base(int m)
  {
    z = m;
  }

  void setZ(int m)
  {
    z= m;
  }

  int getZ()
  {
    return z;
  }

};

class derived1:virtual public base
{
  protected:
  int a;

  public:
  derived1()
  { a=0; }
  derived1(int m):base(m)
  {
    a= m;
  }

  void setA(int m)
  { a=m; }
  int getA()
  { return a; }

};

class derived2:virtual public base
{
  protected:
  int b;

  public:
  derived2()
  { b=0; }
  derived2(int m):base(m)
  {
    b= m;
  }

  void setB(int m)
  { b=m; }
  int getB()
  { return b; }

};

class derived3:public derived1, public derived2
{
  public:
  derived3(){}
  derived3(int l, int m):derived1(l),derived2(m)
  { }

  int product()
  {
    return (x*y);
  }

  int sum()
  {
    return (x+y);
  }
};
////////////////////////

int main()
{
 derived3 drv(3,4);
 cout<<"Product = "<<drv.product()<<endl;
 cout<<"Sum = "<<drv.sum()<<endl;

 getch();
 clrscr();
 return 0;
}

//////// Print ////////

///// Setters ///////

//// Getters ///////
