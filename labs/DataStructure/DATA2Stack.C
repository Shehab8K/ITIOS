///////////////////// Data Structure Lab 2 Stack ///////////////////////
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
struct node{
	struct student std;
	struct node* pNext;
};

struct node *pHead, *pTail;

int pushNode(void);
struct node * createNode(void);

int popNode(void);
void freelist(void);

struct student fillstudent(void);
void printstudent(struct student);


int main()
{
int i=0, id, loc, del;
char myname[20];
int check=0;
struct node * temp = NULL;
do{
printf("please Enter : \n 1 for ADD \n 2 for Delete \n 3 for Show All \n 0 for Exit \n");
scanf("%d",&i);
clrscr();
switch(i)
 {
   case 1:
   check = pushNode();
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
   check = popNode();
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
   if(pHead)
     {
       temp = pHead;
       while(temp)
       {
	 printf("======== %d ========",temp->std.id);
	 printf("\n");
	 printstudent(temp->std);
	 printf("\n");
	 temp = temp->pNext;
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

freelist();
clrscr();
return 0;
}
/////////////////////// FUNCTIONS ///////////////////////////////
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

int pushNode(void)      // ADD
{
int retval = 0;
struct node *ptr;
ptr = createNode();
if(ptr)
{
retval =1;
if(pHead == NULL)
  {
    pHead = pTail = ptr;
  }
 else
  {
    pTail->pNext = ptr;
    pTail = ptr;
  }
}
return retval;
}

struct node * createNode(void)            // Create Student
{
   struct node * ptr;
   ptr = (struct node *) malloc(sizeof(struct node));
   if(ptr)
   {
     ptr->std = fillstudent();
     ptr->pNext = NULL;
   }
   return ptr;
}

int popNode(void)            // Delete
{
  int retval = 0;
  int i;
  int flag =1;
  struct node *ptr;
  if(pHead)
  {
    ptr = pHead;
    if(pHead == pTail)  // only one node
    {
      pHead = pTail = NULL;
      free(ptr);
      retval = 1;
    }
    else                // many nodes
    {
      while(flag)
	{
	  if((ptr->pNext->pNext) != NULL)
	  {
	    ptr = ptr -> pNext;
	  }
	  else
	  {
	   flag = 0;
	  }
	}
      free(pTail);
      ptr->pNext = NULL;
      pTail = ptr;
      retval = 1;
    }
  }

  return retval;
}

void freelist(void)                  // Free
{
  struct node *temp;
  while(pHead)
  {
    temp = pHead;
    pHead = pHead -> pNext;
    free(temp);
  }
  pTail = NULL;
}
