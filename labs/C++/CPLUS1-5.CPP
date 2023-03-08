#include<iostream.h>
#include<CONIO.H>

//int boxvolume1(int l, int w, int h);

int boxvolume2(int l, int w=3, int h=5);

//int boxvolume3(int l, int w=3, int h=5);

int main()
{
int v2;

//v1 = boxvolume1(3,3,5);

v2 = boxvolume2(3);
cout << v2;

//v3 = boxvolume3(3);

getch();
clrscr();
return 0;
}
/*
int boxvolume1(int l, int w=3, int h=5)
{
  return(l*w*h);
}
*/
int boxvolume2(int l, int w, int h)
{
  return(l*w*h);
}

/*int boxvolume3(int l, int w=3, int h=5)
{
  return(l*w*h);
}*/