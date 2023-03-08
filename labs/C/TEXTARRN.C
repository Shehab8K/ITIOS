#include<stdio.h>
#include<CONIO.H>
#include<STRING.H>
#include<CTYPE.H>
#include <ALLOC.H>
#include<STDLIB.H>

int mydelete(char *arr,int pos,int state);

int main()
{
char input;
int position=1, i, arrsize;
int flag =1;
//int insflag = 0;
int x;
char *ptr;
//char *sec;

printf("Please enter number of letters \n");
scanf("%d",&x);
x = x + 1;
ptr = (char*) malloc(sizeof(char)*x);

if(ptr != 0) // Allocated and program runs
{
clrscr();

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
    if(position< (x-1))
    {
      position++;
    }
  }
  if(input == 116)
  {
    arrsize = strlen(ptr);
    position = arrsize+1;
  }
  if(input == 115)
  {
    position = 1;
  }
 //////////////// Bounus ////////////////
 /* if(input == 83)      // Delete   status 2
  {
    position = mydelete(ptr,position,2);
  }

 /* if(input == -94)        // Insert (alt+ins)
  {
   if(insflag)
     {
      insflag = 0;
     }
   else
     {
      insflag = 1;
     }
  }   */
 gotoxy(position,1);
}

else
 {
  if(input == 13)
  {
    clrscr();
    arrsize = strlen(ptr);
    ptr[arrsize+1]=0;
    printf("Your string is : \n");
   /* for(i=0; i<arrsize; i++)
    {
     printf("%c",ptr[i]);
    }*/
   for(i=0; i<position-1; i++)
   {
    printf("%c",ptr[i]);
   }
    printf("\n");
    flag = 0;
  }
  // check here

  if(input == 8)            // BackSpace state = 1
    {
      position = mydelete(ptr,position,1);
    }
  // end
  else
   {
   if(isprint(input))
     {
       if(position < x)
	 {

	     printf("%c",input);
	     ptr[position-1] = input;
	     position++;

	 }
     }
   }
 }
}

free(ptr);

getch();
clrscr();
return 0;
}     // end of if
else  // Allocation failed
{
printf("Memory reservation failed");
clrscr();
getch();
return 0;
} // end of else
} // end main

int mydelete(char *arr,int pos,int state)
{
  int position = pos;
  int status = state;
  int arrsize,i;
  if(status == 1) //backspace
  {

    position--;
    arr[position-1]=0;
    arrsize = strlen(arr);
    clrscr();
    for(i=0; i<arrsize; i++)
    {
     printf("%c",arr[i]);
    }
  }
  return position;
}

