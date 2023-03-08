#include<stdio.h>
#include<CONIO.H>

int main ()
{
int size;
int num;
int col, row;
int i;
printf("Please Enter odd number \n");
scanf ("%d",&size);

while(size%2 == 0 || size==1)
{
printf("wrong number please enter ONLY odd Numbers \n");
scanf("%d",&size);
}

// Col & Row Values
clrscr();
col = (size+1)/2;
row = 1;
gotoxy(col*3,row*3);
printf("1");
num = size*size; // Highest Number for matrix
for(i=2; i<=num; i++)
{
  if((i-1)%size)
   {
    row--;
    col--;
    // Checking Row
    if(row<1)
    { row = size; }
    // Checking Col
    if(col<1)
    { col = size; }

   }
   else
   {
     row++;
     if(row>size)
     {
	row =1;

     }

   }
	gotoxy(col*3,row*3);
	printf("%d",i);
}
getch();
clrscr();
return 0;
}