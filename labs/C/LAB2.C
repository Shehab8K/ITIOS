#include<stdio.h>
int main(){
int num1, num2, num3, num4, num5, max, min;
clrscr();
printf("Enter first number");
scanf("%d",&num1);
printf("Enter second number");
scanf("%d",&num2);
printf("Enter third number");
scanf("%d",&num3);
printf("Enter forth number");
scanf("%d",&num4);
printf("Enter fifth number");
scanf("%d",&num5);
if (num1>num2){
max=num1;
}
else{
max= num2;
}
if(max<num3){
max=num3;
}
if(max<num4){
max=num4;
}
if(max<num5){
max=num5;
}
printf("maximum number is %d\n",max);
if(num1<num2)
{
min=num1;
}
else{
min=num2;
}
if(min>num3)
{
min=num3;
}
if(min>num4)
{
min=num4;
}
if(min>num5)
{
min=num5;
}
printf("minimum number is %d",min);
getch();
return 0;
}