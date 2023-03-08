///////////////////////// Data Structure Lab 3 //////////////////////////
#include<stdio.h>
#include<CONIO.H>
#include<STRING.H>
#include<ALLOC.H>
#include<STDLIB.H>
#include<CTYPE.H>

struct Node {
	int data;
};

int pos;

void printstudent(struct Node e);
struct Node CreateNode(int d);
int InsertInSorted(int d);


/////////////////////////// MAIN ///////////////////////////////////
int main()
{
int size, i, num, temp;

struct Node *std;
printf("Please Enter number of Nodes \n");

scanf("%d",&size);
size++;

std = (struct Node*)malloc(sizeof(struct Node)*size);
clrscr();

do{
printf("1) for enter number \n 2) for show all \n 0 for exit \n");
scanf("%d",&i);
clrscr();

switch(i)
{
  case 1:
  printf("Enter numer \n");
  scanf("%d",&num);
  temp = InsertInSorted(num);
  break;

  case 2:
     if(pos)
     {
       for(temp=0; temp<pos; temp++)
       {
	 printf("======== %d ========",std[temp].id);
	 printf("\n");
	 printstudent(std[temp]);
	 printf("\n");
       }
     }
     else
     {
     printf("There are no Students");
      }
     getch();
     break;
}

}while(i);


free(std);
clrscr();
return 0;
}

/////////////////////// FUNCTIONS ///////////////////////////////


void printstudent(struct Node e)   // Print Student
{
printf("%d",e->data);
}


struct Node CreateNode(int d)
{
  struct Node ptr;
  ptr->data=d;
  ptr->pnext = ptr->prev = NULL;
  pos++;
  return ptr;
}

//////////////////////////////////////////////////////////////
int InsertInSorted(int d)
{
    struct Node* ptr, * temp;
    int retval = 0;

    ptr = CreateNode(d);

    if(ptr)
    {
	retval=1;

	if(phead == NULL)
	{
	    phead = ptail = ptr;
	}
	else if (phead->data >= ptr->data)
	{
	    phead->pprev = ptr;
	    ptr->pnext = phead;
	    phead = ptr;

	}
	else
	{
	    temp = phead;
	    while(temp->pnext != NULL && temp->pnext->data < ptr->data)
	    {
		temp = temp->pnext;
	    }

	    if(phead == ptail || temp->pnext == NULL)
	    {
		if(ptr->data > ptail->data)
		{
		    ptail->pnext = ptr;
		    ptr->pprev = ptail;
		    ptail = ptr;
		}
		else
		{
		    phead->pprev = ptr;
		    ptr->pnext = phead;
		    phead = ptr;
		}
	    }
	    else
	    {
		temp->pnext->pprev = ptr;
		ptr->pnext = temp->pnext;
		ptr->pprev = temp;
		temp->pnext = ptr;
	    }
	}
    }
    return retval;
}

