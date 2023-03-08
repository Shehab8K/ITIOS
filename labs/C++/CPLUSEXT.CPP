#include<iostream.h>
#include<CONIO.h>
#include<string.h>

class shape
{
  protected:
  int dim1,dim2;
  public:
  shape()
  {dim1=dim2=0;}

  shape(int d)
  {dim1=dim2=d;}

  shape(int d1,int d2)
  { dim1=d1;
    dim2=d2;}


  void setdim1(int d1)
  {dim1=d1;}
  void setdim2(int d2)
  {dim2=d2;}

  int getdim1()
  {return dim1;}
  int getdim2()
  {return dim2;}

  virtual float Area()=0;

};

class circle:public shape
{
 public:
 circle()
 {  }
 circle(int r):shape(r)
 {  }
 float Area()
 {return (3.14*dim1*dim2);}
};

class rectangle:public shape
{
 public:
 rectangle()
 {  }
 rectangle(int w,int h):shape(w,h)
 {  }
 float Area()
 {return (1.0*dim1*dim2);}
};

class square :public rectangle
{
 public:
 square()
 {  }
 square(int s):rectangle(s,s)
 {  }
};

class triangle:public shape
{
  public:
  triangle()
  {  }
  triangle(int b, int h):shape(b,h)
  { }
  float Area()
  {return (0.5*dim1*dim2);}
};

class Geoshape
{
 shape **ptr;
 int size;
 public:
 Geoshape(shape* p[], int s)
 {
   ptr = p;
   size =s;

 }
 float TotalArea(int size);

};

int main()
{
 int num;
 shape *myshape[4];
// cout<<"enter number of shapes"<<endl;
// cin>>num;

 circle c(10);
 rectangle R(10,2);
 triangle T(10,20);
 square S(10);

 myshape[0] = &c;
 myshape[1] = &R;
 myshape[2] = &T;
 myshape[3] = &S;

 Geoshape g(myshape, num);
/* circle c(10);
 rectangle R(10,2);
 triangle T(10,20);
 square S(10);
 Geoshape g(&c, &R, &T, &S);  */
 cout<<g.TotalArea(4);
 getch();
 return 0;
}

//// Function ////////
float Geoshape::TotalArea(int size){

 float total=0;
   for (int i=0; i<size; i++)
   {
     total += ptr[i]->Area();
   }
   return total;

}
