#include<stdio.h>
#include<CONIO.H>
#include<STRING.H>
#include<iostream.h>

class point
{
  int x,y;
  public:
  point()
  { x=y=0; }

  point(int m)
  {
   x=y=m;
  }
  point(int m, int n)
  {
   x=m;
   y=n;
  }
  void setX(int l)
  {
    x=l;
  }
  void setY(int z)
  {
    y=z;
  }
  int getX()
  { return x; }

  int getY()
  { return y; }
};

class rectangle_c
{
 point p1, p2;
 int length, width;
 public:
 rectangle_c(int x1, int y1, int x2, int y2):p1(x1,y1),p2(x2,y2)
 {
/*   p1.setX(x1);
   p1.setY(y1);
   p2.setX(x2);
   p2.setY(y2);*/
   length = (x2-x1);
    width = (y2-y1);
 }
 void setp1(int x, int y)
 {
   p1.setX(x);
   p1.setY(y);
   length= (p2.getX()-x);
   width= (p2.getY()-y);
 }
 void setp2(int x, int y)
 {
   p2.setX(x);
   p2.setY(y);
   length= (x-p1.getX());
   width= (y-p1.getY());
 }
 int area()
 { return length*width; }
};

class rectangle_a
{
 point *p1, *p2;
 int length, width;
 public:

 rectangle_a()
 {
  p1=p2=NULL;
  length = width = 0;
 }
 rectangle_a(point *pa, point *pb)
 {
   p1 = pa;
   p2 = pb;
   if(p1 !=NULL && p2!=NULL)
   {
     length = (p2->getX()-p1->getX());
     width  = (p2->getY()-p1->getY());
   }
   else
   {
     length = width = 0;
   }
 }

 void setp1(point *p)
 {
   p1 = p;
   if(p1 !=NULL && p2!=NULL)
   {
     length = (p2->getX()-p1->getX());
     width  = (p2->getY()-p1->getY());
   }
   else
   {
     length = width = 0;
   }
 }

 void setp2(point *p)
  {
    p2 = p;
   if(p1 !=NULL && p2!=NULL)
     {
     length = (p2->getX()-p1->getX());
     width  = (p2->getY()-p1->getY());
     }
   else
     {
     length = width = 0;
     }
  }

  int area()
  { return length*width; }
};

int main()
{
			// Main for composition
   int myarea, x , y;
   rectangle_c rec(3,5,20,25);
   myarea = rec.area();
   cout<<"area is equal to : "<<myarea<<endl;
   getch();
   clrscr();
   cout<<"Enter Point 1 (x,y) : ";
   cin>>x;
   cin>>y;
   rec.setp1(x,y);

   cout<<"Enter Point 2 (x,y) : ";
   cin>>x;
   cin>>y;
   rec.setp2(x,y);

   myarea = rec.area();
   cout<<"area is equal to : "<<myarea<<endl;
   getch();
   clrscr();

  /* int area;
   rectangle_a recA;
   point pt1(3,5);
   point pt2(20,25);

   recA.setp1(&pt1);
   recA.setp2(&pt2);

   area = recA.area();
   cout<<"Area is equal to : "<<area<<endl;
   */
   getch();
   clrscr();
   return 0;
}









