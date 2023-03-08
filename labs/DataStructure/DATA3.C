///////////////////////// Data Structure Lab 3 //////////////////////////
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
int sorted;

int inqueue(struct student *std, int size);
int dequeue(struct student *std, int size);
void printstudent(struct student e);
struct student fillstudent(void);

void BubbleSort(struct student *std,int size);

int mergeSort(struct student *std, int Lb, int Ub);
void merge(struct student *std,int low,int mid,int high);
int binarySearch(struct student *std, int Lb, int Ub, int search);

/////////////////////////// MAIN ///////////////////////////////////
int main()
{
int size, i, check, temp, sorted, foundID;
int search;
struct student *listByID;

struct student *std;
printf("Please Enter number of students \n");

scanf("%d",&size);
size++;

std = (struct student*)malloc(sizeof(struct student)*size);
clrscr();
do{
printf("please Enter : \n 1 for ADD \n 2 for Delete \n 3 for Show All \n 4 Sort by ID \n 5 Sort by Name \n 6 Search by ID \n 0 for Exit \n");
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
   case 4:
   BubbleSort(std, pos);
   printf("Sorted by ID");
   getch();
   break;
   ///////////////////////////////////////////
   case 5:
   sorted = mergeSort(std, 0, pos-1);
   if(sorted){ printf("Sorted by Name"); }
   else{ printf("There are no students");}
   getch();
   break;
   ///////////////////////////////////////////
   case 6:
   printf("Please enter ID to search for \n");
   scanf("%d",&search);

   foundID = binarySearch(std ,0 ,pos-1 ,search);
   if(foundID>-1)
   {
     printstudent(std[foundID]);
   }
   else
   {
    printf("Student not found");
   }
   getch();
   break;
 }
clrscr();
}while(i);

free(std);
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

void BubbleSort(struct student *std, int size) // Sort by ID
{
 int i, j;
 struct student *temp;
 int flag=1;

 for(i=0; i<size && flag; i++)
 {
   flag =0;
   for(j=0; j<size-i; j++)
   {
     if(std[j].id>std[j+1].id)
     {
       temp[j] = std[j];
       std[j] = std[j+1];
       std[j+1] = temp[j];
       flag =1;
     }
   }
 }
}

int mergeSort(struct student *std, int Lb, int Ub) // Merge&sort1
{
  int retval =0;
  int middle;
  if(Lb<Ub)
  {
    middle = (Lb + Ub)/2;
    mergeSort(std, Lb, middle);
    mergeSort(std, middle+1, Ub);
    merge(std, Lb, middle, Ub);
    retval =1;
  }
  return retval;
}

void merge(struct student *std,int low,int mid,int high)//Merge&sort2
{
  struct student *temp;
  int list1, list2, i;
  temp = (struct student*)malloc(sizeof( struct student)*(high+1) );
  list1 = low;
  list2 = mid+1;
  i = low;
  while(list1 <= mid && list2 <= high)
  {
    if(strcmp(std[list1].name, std[list2].name)<0)
    {
      temp[i] = std[list1];
      list1++;
      i++;
    }
    else
    {
      temp[i] = std[list2];
      list2++;
      i++;
    }
  }
  while(list1<=mid)
  {
    temp[i] = std[list1];
    list1++;
    i++;
  }
  while(list2<=high)
  {
    temp[i] = std[list2];
    list2++;
    i++;
  }
  for(i=low; i<= high; i++)
  {
    std[i] = temp[i];
  }
  free(temp);
}
					   // Search by ID
 int binarySearch(struct student *std,int Lb,int Ub,int search)
{
   int middle;
   int loc=-1;
    BubbleSort(std, pos);
     while(Lb<=Ub && loc == -1)
     {
       middle = (Lb+Ub)/2;
       if(std[middle].id == search)
       {
	 loc = middle;
       }
       else
       {
	 if(std[middle].id<search)
	 {
	   Lb = middle +1;
	 }
	 else
	 {
	   Ub = middle-1;
	 }
       }
     }
   return loc;
}


