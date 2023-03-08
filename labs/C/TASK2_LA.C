#include<stdio.h>;
#include<math.h>;
int main(){
int a, b, c, x1, x2, r;
clrscr();
printf("enter first number");
scanf("%d",&a);
printf("enter second number");
scanf("%d",&b);
printf("enter third number");
scanf("%d",&c);
r=(b*b)-(4*a*c);
if(r>0){
x1=(-b+sqrt(r))/2*a;
x2=(-b-sqrt(r))/2*a;
}
printf("x1=%d\n",x1);
printf("x2=%d",x2);
getch();
return 0;
}