#include<stdio.h>
#include<CONIO.H>
#include<MATH.H>

int main ()
{
float a, b, c;
float x1, x2, checker;

printf("Please enter coeffient a:");
scanf("%f",&a);

printf("\n Please enter coeffient b:");
scanf("%f",&b);

printf("\n Please enter coeffient c:");
scanf ("%f", &c);

checker = b*b-4*a*c;

if(checker > 0)
{
  x1 = (-b + sqrt(checker)/2*a);
  x2 = (-b - sqrt(checker)/2*a);
  printf("you have two solutions first = %f and second = %f",x1,x2);
}else{
   if(checker == 0)
   {
     x1 = -b/2*a;
     printf("you have one solution = %f",x1);
   }
   else{
   printf("you have an imaginary solution");
   }
}

getch();
clrscr();

return 0;
}