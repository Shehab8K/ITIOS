#include<stdio.h>
#include<CONIO.H>

int main()
{
 int student[3][4];
 int sum=0,avg=0,row,col;
 int x=1;
 int y=1;
// hena ana 2st5dmt x we y 3lshan 23ml increment lel student&subject
// f2ol student 1 subject 3 we kda

 for(row=0; row<3; row++)
 {
   //subjects
   for(col=0; col<4; col++)
   {
    printf("Please enter subject %d for student %d \n",x,y);
    scanf("%d",&student[row][col]);
    x++;
   }
   x=1;
   y++;
 }
 // hena 5las d5lt el data kolaha


 //Proccess for sum calculation
  for(row=0; row<3; row++)
  {
   for(col=0; col<4; col++)
   {
    sum+=student[row][col];
   }

     printf("sum for student %d is equal to %d \n",row+1,sum);
     //used row+1 cuz row was 0
     sum=0;
  }


   //Proccess2 for Avg calculation
  for(col=0; col<4; col++)
  {
   for(row=0; row<3; row++)
   {
    avg+=student[row][col];
   }
   avg= avg/3;
     printf("The average number for subject %d is equal to %d \n",col+1, avg);
     avg=0;
  }
   getch();
   clrscr();
return 0;
}