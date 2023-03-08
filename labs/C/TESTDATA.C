/////////////////////// Data Structure Testing Lab //////////////////////////
#include<stdio.h>
#include<CONIO.H>
void mergeSort(int lb, int ub);
void merge(int low, int mid, int high);

int ar[9] = {1,2,4,6,8,1,3,5,9};

int main()
{
int i;
mergeSort(ar[0],ar[9]);

for(i=0; i<9; i++)
{
  printf("%d",ar[i]);
}

getch();
clrscr();
return 0;
}

void mergeSort(int lb, int ub)
{
int middle;
if(lb<ub)
  {
   middle = (lb+ub)/2;
   mergeSort(lb, middle);
   mergeSort(middle+1, ub);
   merge(lb,middle,ub);
  }
}

void merge(int low, int mid, int high)
{
  int temp[9];
  int list1, list2,i;
  list1 = low;
  list2 = mid+1;
  while(list1<=mid && list2<= high)
  {
    if(ar[list1]<ar[list2])
    {
      temp[i] = ar[list1];
      list1++;
      i++;
    }
    else
    {
      temp[i] = ar[list2];
      list2++;
      i++;
    }
  }
   while(list1<=mid)
   {
     temp[i] = ar[list1];
     list1++;
     i++;
   }
   while(list2<= high)
   {
     temp[i] = ar[list2];
     list2++;
     i++;
   }
   for(i= low; i<=high; i++)
   {
     ar[i] = temp[i];
   }
}

