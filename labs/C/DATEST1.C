#include<stdio.h>
#include<CONIO.H>
#include<ALLOC.H>
#include<STDLIB.H>

//////////////////// Sort Linked List ///////////////

struct Node{
	int id;
	struct Node *pnext;
	struct Node *pprev;
};

struct Node *phead, *ptail;

int sorted;

int createNode(void);
void showAll(void);
int countNodes(void);
void printOdd(void);
int sortNode(void);
/////////////////// Main ////////////////
int main()
{
int i, size, check =0;
//struct Node *ptr;
//printf("Enter number of nodes\n");
//scanf("%size",&size);
//ptr = (struct Node*)malloc(sizeof(struct Node)*size);

do{
printf("1) add Node \n2) show all \n3) count Nodes\n4) print odd\n5) sort Nodes \n0) Exit\n");
scanf("%d",&i);
clrscr();
   switch(i)
   {
     case 1:      // Create Node
     check = createNode();
     if(check)
     {
       printf("Added successfully");
       check =0;
       getch();
       clrscr();
     }
     break;

     case 2:     // Show all
     showAll();
     getch();
     clrscr();
     break;

     case 3:    // Count
     check = countNodes();
     if(check)
     {
       printf("Number of nodes = %d", check);
     }
     else
     {
       printf("There are no Nodes");
     }
     getch();
     clrscr();
     check = 0;
     break;

     case 4:   // print odd
     printOdd();
     break;

     case 5:  // Sort
     check = sortNode();
     if(check)
     {
       printf("Sorted");
     }
     else
     {
       printf("Not sorted");
     }
     check = 0;
     getch();
     clrscr();
     break;
   }

}while(i);

getch();
clrscr();
return 0;
}

int createNode(void)
{
   int num, retval = 0;
   struct Node *ptr;
   ptr = (struct Node*)malloc(sizeof(struct Node));
   if(ptr)
   {
   retval =1;
   printf("Please enter number \n");
   scanf("%d",&num);
   ptr->id = num;
   ptr->pnext= ptr->pprev = NULL;
     if(phead == NULL)
       {
	 phead = ptail = ptr;
       }
     else
       {
	 ptr->pprev = ptail;
	 ptail->pnext = ptr;
	 ptail = ptr;
       }
   }
   return retval;
}

void showAll(void)
{
  struct Node *ptr;

  if(phead)
  {
    ptr = phead;
    while(ptr)
    {
      printf("==================== \n");
      printf("%d \n", ptr->id);
      ptr=ptr->pnext;
    }
  }

}

int countNodes(void)
{
  int count=0;
  struct Node *ptr;
  if(phead)
  {
    ptr = phead;
    while(ptr)
    {
      count++;
      ptr = ptr->pnext;

    }
  }
  return count;
}

void printOdd(void)
{
 struct Node *ptr;

 if(phead)
 {
   ptr = phead;
   while(ptr)
   {
     if(ptr->id%2==1)
     {
       printf("======== %d =========\n",ptr->id);
     }
    ptr= ptr->pnext;
   }
 }
 else
 {
   printf("There are no Nodes");
 }
 getch();
 clrscr();
}

int sortNode(void)
{
  int retval = 0;
  int flag=1;
  struct Node *temp, *pcur;
  if(phead)
  {
    temp = phead;
    pcur = phead;
    while(pcur->pnext && flag)
    {
      retval = 1;
      flag = 0;
      temp = pcur;
      while(temp->pnext)
      {
	flag=1;
	if(temp->id > temp->pnext->id)
	{
	  if(phead == temp)
	  {
	    phead = temp->pnext;
	  }
	  if(ptail == temp->pnext )
	  {
	    ptail = temp;
	  }
	  temp->pprev->pnext = temp->pnext;
	  temp->pnext->pnext->pprev = temp;
	  temp->pnext->pnext = temp;
	  temp->pprev = temp->pnext;
	}
       temp = temp->pnext;
      }
     pcur= pcur->pnext;
    }
  }
   return retval;
}











