#include<stdio.h>
#include<CONIO.H>
int main ()
{
   int num1, num2, num3, num4, num5;
   int max, min;
   printf("Please enter 5 numbers to show max & min \n");
   scanf("%d"   ,&num1);
   scanf("\n %d",&num2);
   scanf("\n %d",&num3);
   scanf("\n %d",&num4);
   scanf("\n %d",&num5);

   if(num1==num2)
   {
     max = num1;
     min = num1;
   }
   else
   {
	// Checking for Max & Min
	if(num1> num2)
	{
	 max = num1;
	 min = num2;
	}else {
	 max = num2;
	 min = num1;
	}
   }
	// Num3
   if(num3 >max){ max = num3; } else{
   if(num3 <min){ min = num3; } }
	// Num4
   if(num4 >max){ max = num4; } else{
   if(num4 <min){ min = num4; } }
	// Num5
   if(num5 >max){ max = num5; } else{
   if(num5 <min){ min = num5; } }

   printf("\n Max number = %d Min number = %d",max, min);
   getch();
   clrscr();
   return 0;
}