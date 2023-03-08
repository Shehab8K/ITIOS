#include<stdio.h>
#include<CONIO.H>

int main()
{

char ch;
ch = getch();

if(ch==0)
{
ch = getch();
printf("Extended key code = %d",ch);
}

else
{
printf("Normal key With ASCII %d",ch);
}

getch();
clrscr();
return 0;
}