#include<stdio.h>
#include<CONIO.H>

int add(int,int);
int sub(int,int);
int multiply(int,int);
int divide(int,int);
void myprint(void);
int main ()
{

// int myoptions[5];
int num1, num2, res;
char user_input;
int row=5;
int flag = 1;

myprint();

do
{
 user_input = getch();
 if(user_input == 0)
 {
   user_input = getch();

   if(user_input == 80) //down
   {
     if(row < 6)
     {
       row++;
       gotoxy(1, row);
     }
   }

   if(user_input == 72) //up
   {
     if(row > 0)
     {
       row--;
       gotoxy(1,row);
     }
   }

   if(user_input== 116) //End
   {
     flag = 0;
   }

 }
  else
   {
     if(user_input == 13) // Enter
     {
       switch(row)
       {
	 case 1:
	 clrscr();
	 printf("Please enter 2 numbers to ADD \n");
	 scanf("%d",&num1);
	 scanf("%d",&num2);
	 res = add(num1, num2);
	 printf("Your Sum = %d \n",res);
	 getch();
	 clrscr();
	 break;

	 case 2:
	 clrscr();
	 printf("Please enter 2 numbers to Substract \n");
	 scanf("%d",&num1);
	 scanf("%d",&num2);
	 res = sub(num1, num2);
	 printf("Your sub = %d \n",res);
	 getch();
	 clrscr();
	 break;

	 case 3:
	 clrscr();
	 printf("Please enter 2 numbers to Multiply \n");
	 scanf("%d",&num1);
	 scanf("%d",&num2);
	 res = multiply(num1, num2);
	 printf("Your product = %d \n",res);
	 getch();
	 clrscr();
	 break;

	 case 4:
	 clrscr();
	 printf("Please enter 2 numbers to Divide \n");
	 scanf("%d",&num1);
	 scanf("%d",&num2);
	 res = divide(num1, num2);
	 printf("Your quotient = %d \n",res);
	 getch();
	 clrscr();
	 break;

	 case 5:
	 clrscr();
	 flag = 0;
	 break;

	}
	myprint();
     }
     if(user_input == 27) //Esc
     {
	flag = 0;
     }
   }
}while(flag!=0);
clrscr();
return 0;
}


//ADD
int add(int a, int b)
{ return a+b; }
// SUB
int sub(int a, int b)
{ return a-b; }
// MULTIPLY
int multiply(int a, int b)
{ return a*b; }
// DIVIDE
int divide(int a, int b)
{ return a/b; }

//my print
void myprint(void)
{
gotoxy(1,1);
printf("ADD");

gotoxy(1,2);
printf("Substract");

gotoxy(1,3);
printf("Multiply");


gotoxy(1,4);
printf("Divide");

gotoxy(1,5);
printf("Exit");
}