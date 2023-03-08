#include<stdio.h>
#include<CONIO.H>
#include<ALLOC.H>
#include<STDLIB.H>

struct node{
  int d;
  struct node *pLeft;
  struct node *pRight;
};

struct node* createNode(int d);
struct node* insertNode(struct node*pNode, int d);

void inOrder(struct node* ptr);
void preOrder(struct node* ptr);
void postOrder(struct node* ptr);

int main()
{
struct node* pRoot = NULL;
int i;

for(i=1; i<6; i++)
{
  pRoot = insertNode(pRoot, i);
}

printf("In Order : ");
inOrder(pRoot);

printf("\n Pre order : ");
preOrder(pRoot);

printf("\n Post order : ");
postOrder(pRoot);

getch();
clrscr();
return 0;
}

struct node*createNode(int d)                      // create
{
  struct node*ptr;
  ptr = (struct node*)malloc(sizeof(struct node));
  if(ptr)
  {
    ptr->d = d;
    ptr->pLeft = ptr->pRight = NULL;
  }
  return ptr;
}

struct node* insertNode(struct node*pNode, int d)  // insert
{
  if(pNode == NULL)
  {
    pNode = createNode(d);
  }
  else
  {
    if(pNode->d >= d)
    {
      pNode->pLeft = insertNode(pNode->pLeft, d);
    }
    else
    {
      pNode->pRight = insertNode(pNode->pRight, d);
    }
  }
  return pNode;
}


void inOrder(struct node* ptr)    // in Order
{
  if(ptr == NULL)
  {
    printf("");
  }
  else
  {
    inOrder(ptr->pLeft);
    printf("%d", ptr->d);
    inOrder(ptr->pRight);

  }
}

void preOrder(struct node* ptr)    // pre Order
{
  if(ptr == NULL)
  {
    printf("");
  }
  else
  {
    printf("%d", ptr->d);
    preOrder(ptr->pLeft);
    preOrder(ptr->pRight);

  }
}

void postOrder(struct node* ptr)    // post Order
{
  if(ptr == NULL)
  {
    printf("");
  }
  else
  {
    postOrder(ptr->pLeft);
    postOrder(ptr->pRight);
    printf("%d", ptr->d);

  }
}