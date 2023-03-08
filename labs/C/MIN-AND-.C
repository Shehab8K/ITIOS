#include<stdio.h>
#include<CONIO.H>

int main()
{
  int max,min,i;
  int num[5];

  for(i=0; i<5; i++)
  {
   printf("Please enter Number %d \n",i+1);
   scanf("%d",&num[i]);
  }
   max = num[0];
   min = num[0];

  for(i=0; i<5; i++)
  {
   if(num[i]>max)
   {
    max=num[i];
   }
   else
   {
    if(num[i]<min)
    {
     min = num[i];
    }
   }
  }
  printf("max number = %d and Min number = %d",max,min);
  getch();
  clrscr();

  return 0;
}