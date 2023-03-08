///////////////// Data Structure Lab 2.2 Queue with Array ///////////////
#include<stdio.h>
#include<CONIO.H>
#include<STRING.H>
#include<ALLOC.H>
#include<STDLIB.H>
#include<CTYPE.H>

struct student {
	int id;
	char name[20];
	int grade[3];
};

int pos;

int inqueue(struct student *std, int size);
int dequeue(struct student *std, int size);
void printstudent(struct student e);
struct student fillstudent(void);

int main()
{

int size, i, check, temp;
struct student *std;
printf("Please Enter number of students \n");

scanf("%d",&size);
size++;

std = (struct student*)malloc(sizeof(struct student)*size);
clrscr();
do{
printf("please Enter : \n 1 for ADD \n 2 for Delete \n 3 for Show All \n 0 for Exit \n");
scanf("%d",&i);
clrscr();
switch(i)
 {
   case 1:
   check = inqueue(std, size);
   if(check == 1)
   {
     printf("Added Successfully");
   }else {
     printf("Adding Failed");
   }
   getch();
   break;
   /////////////////////////////////////////////
   case 2:
   check = dequeue(std, size);
     if(check)
	{
	  printf("Deleted Successfully");
	}
	else
	{
	  printf("Delete Failed");
	}
	getch();
	break;
   ////////////////////////////////////////////
   case 3:
   if(pos)
     {
       for(temp=0; temp<pos; temp++)
       {
	 printf("======== %d ========",std[temp].id);
	 printf("\n");
	 printstudent(std[temp]);
	 printf("\n");
       }
     }else{
	 printf("There are no Students");
	     }
     getch();
     break;
   ////////////////////////////////////////////
 }
clrscr();
}while(i);

free(std);
getch();
clrscr();
return 0;
}
////////////////////// FUNCTIONS /////////////////////////

struct student fillstudent(void)     // Fill Student
{
int i;
struct student s;
printf("Student ID : ");
scanf("%d", &s.id);

printf("Student Name : ");
scanf("%s",s.name);

for(i=0; i<3; i++)
{
printf("Student Grade %d : ",i+1);
scanf("%d", &s.grade[i]);
}
return s;
}
void printstudent(struct student e)   // Print Student
{
int i;
printf("Student ID -> %d \n",e.id);
printf("Student Name -> %s \n", e.name);
for(i=0; i<3; i++)
 {
  printf("Student Grade %d -> %d \n",i+1,e.grade[i]);
 }
}

int inqueue(struct student *std, int size)   // ADD Student
{
   int retval =0;
   if(pos<size-1)
   {
     std[pos] = fillstudent();
     pos++;
     retval = 1;
   }
   return retval;
}

int dequeue(struct student *std, int size)   // Delete Student
{
   int retval =0, i;
   if(pos>0)
   {
     for(i=0; i<size; i++)
     {
      std[i] = std[i+1];
     }
     pos--;
     retval = 1;
   }
   return retval;
}