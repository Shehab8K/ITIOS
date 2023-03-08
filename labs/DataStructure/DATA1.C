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
	struct node* pPrev;
	struct node* pNext;
};

struct node *pHead, *pTail;

int addNode(void);
struct node * createNode(void);
int insertNode(int loc);
int deleteNode(int loc);
struct node * searchNodebyId(int id);
void searchNodebyChar(char *name);
int DeleteNode(int d);
void freelist(void);

struct student fillstudent(void);
void printstudent(struct student);


int main()
{
int i=0, id, loc, del;
char myname[20];
int check=0;
struct node * ptr = NULL;
struct node * temp = NULL;
do{
printf("please Enter : \n 1 for ADD \n 2 for Insert \n 3 for Search by ID \n 4 for Search by Name \n 5 for Show All \n 6 for Delete by Location \n 0 for Exit \n");
scanf("%d",&i);
clrscr();
switch(i)
 {
   case 1:
   check = addNode();
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
   printf("Please enter input location \n");
   scanf("%d",&loc);
   check = insertNode(loc);
   if(check == 1)
   {
     printf("Inserted Successfully");
   }else {
     printf("Insert Failed");
   }
   getch();
   break;
   ////////////////////////////////////////////
   case 3:
   printf("Please enter ID to search for \n");
   scanf("%d",&id);
   printf("\n");
   ptr = searchNodebyId(id);
   if(ptr)
   {
    printstudent(ptr->std);
   }else {
     printf("Not Found");
   }
   getch();
   break;
   ///////////////////////////////////////////
   case 4:
   printf("Please enter Name to search for \n");
   scanf("%s",myname);
   printf("\n");
   searchNodebyChar(myname);
 /*  if(ptr)
   {
    printstudent(ptr->std);
   }else {
     printf("Not Found");
   }
   getch(); */
   break;
   ////////////////////////////////////////////
   case 5:
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

   case 6:
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
	printf("\n Choose a Student location to delete \n");
	scanf("%d",&del);
        check = DeleteNode(del);
	if(del)
	{
	  printf("Deleted Successfully");
	}
	else
	{
	  printf("Delete Failed");
	}
	getch();
	break;
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

int addNode(void)      // ADD
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
    ptr->pPrev = pTail;
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
     ptr->pPrev = NULL;
   }
   return ptr;

}

int insertNode(int loc)       // Insert Student
{
   int retval =0;
   struct node *ptr, *pcur;
   int i;
   ptr = createNode();
   if(ptr)
   {
    retval = 1;
    if(pHead == NULL)  // No List
      {
	pHead = pTail = ptr;
      }
     else
      {
	if(loc == 0 ) // First Node
	{
	  ptr->pNext = pHead;
	  pHead->pPrev = ptr;
	  pHead = ptr;
	}
	else
	 {
	   pcur = pHead;
	   for(i=0; i<loc-1 && pcur; i++)
	     {
	       pcur = pcur -> pNext;
	     }
	    if(pcur == pTail || pcur == NULL)  // Last Node
	      {
		pTail -> pNext = ptr;
		ptr -> pPrev = pTail;
		pTail = ptr;
	      }
	     else                             // Middle
	       {
		 pcur->pNext->pPrev = ptr;
		 ptr->pNext = pcur->pNext;
		 ptr -> pPrev = pcur;
		 pcur -> pNext = ptr;
	       }
	 }
      }
   }
  return retval;
}


struct node * searchNodebyId(int id)     // Search by id
{
  struct node* ptr = NULL;
  if(pHead)
  {
   ptr = pHead;
   while(ptr->std.id !=id && ptr)
     {
       ptr = ptr->pNext;
     }
  }
  return ptr;
}

void searchNodebyChar(char *name)     // Search by name
{
  struct node* ptr = NULL;
  int found = 0;
  if(pHead)
  {
   ptr= pHead;
   while(ptr)
     {
	if(!(strcmp(ptr->std.name,name)))
	  {
	    printstudent(ptr->std);
	    printf("\n");
	    found++;
	  }
       ptr = ptr->pNext;
     }
     if(!(found))
     {
      printf("No Match for this Student name");
     }
  }
  getch();
}

int DeleteNode(int d)            // Delete By ID
{
  int retval = 0;
  int i;
  struct node *ptr;
  if(pHead)
  {
    ptr = pHead;
    if(d == 1)  // First Node
    {
      if(pHead == pTail)  // 1 Node only
      {
	pHead = pTail = NULL;
      }
      else                // More than Node
      {
	pHead = pHead -> pNext;
	pHead -> pPrev = NULL;
      }
      free(ptr);
      retval = 1;
    }
    else        // Not the First Node
    {
       for(i=0; i < d-1 && ptr; i++)
       {
	  ptr = ptr->pNext;
       }
       if(ptr)   // There is a node
       {
	 if(ptr==pTail)  // Last
	 {
	   pTail = pTail -> pPrev;
	   pTail-> pNext = NULL;
	 }
	 else     // Middle NOT first Not last
	 {
	   ptr->pPrev->pNext = ptr-> pNext;
	   ptr->pNext->pPrev = ptr -> pPrev;
	 }
	 free(ptr);
	 retval =1;
       }

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
