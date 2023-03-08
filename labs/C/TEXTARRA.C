#include<stdio.h>
#include<CONIO.H>
#include<STRING.H>
#include<CTYPE.H>

int main()
{

char mytext[11]={0};
char input;
int position=1;
int flag =1;
while(flag != 0)
{
input = getch();
if(input == 0)
{
input = getch();
  if(input == 75) // left
  {
    if(position>1)
      {
	position--;
      }
  }

  if(input == 77) //right
  {
    if(position<strlen(mytext)+1)
    {
      position++;
    }
  }
 gotoxy(position,1);
}
/* if(input == 116)
 {
   position = strlen(mytext)+1;
 }
 if(input == 115)
 {
  position = 1;
 }
*/
else
 {
  if(input == 13)
  {
    clrscr();
    printf("Your input is: %s", mytext);
    flag = 0;
  }
else
  {
   if(isprint(input))
     {
       if(position <11)
	 {
	   if(isalpha(input))
	     {
		printf("%c",input);
		mytext[position-1] = input;
		position++;
	     }
	 }
     }
   }
 }
}

getch();
clrscr();
return 0;
}