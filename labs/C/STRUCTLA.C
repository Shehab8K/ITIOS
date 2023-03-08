#include<stdio.h>
#include<CONIO.H>
#include<ALLOC.H>
#include<STDLIB.H>

struct student {
 int id;
 char name[20];
 int grade[3];
};

struct student fillstudent(void);
void printstudent(struct student e);

int main()
{
struct student *s;
int i,size;

printf("Please enter number of Students \n");
scanf("%d",&size);

s = (struct student*)malloc(size*sizeof(struct student));
clrscr();

if(s != 0)
{
 for(i=0; i<size; i++)
 {
  printf("======== Please Enter Student %d Data ======== \n",i+1);
  s[i]=fillstudent();
  printf("\n");
 }
 clrscr();

 for(i=0; i<size; i++)
 {
  printf("\n      Data of Student %d \n",i+1);
    printf("====================================== \n");
  printstudent(s[i]);
 }
}

free(s);
getch();
clrscr();
return 0;
}

struct student fillstudent(void)
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

void printstudent(struct student e)
{
int i;
printf("Student ID -> %d \n",e.id);
printf("Student Name -> %s \n", e.name);
for(i=0; i<3; i++)
 {
  printf("Student Grade %d -> %d \n",i+1,e.grade[i]);
 }
}