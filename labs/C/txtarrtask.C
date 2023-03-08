#include<stdio.h>
#include<conio.h>
#include<ctype.h>
int main()
{
char *ptr,ch;
int size,i=0,x=5,y=5;
clrscr();
printf("enter the element number:");
scanf("%d",&size);
ptr=(char *)malloc(size*sizeof(char));
//check  the Allocation
if(!ptr)
{
printf("Out of memory\n");
exit(1);

}//if
else
{
 gotoxy(x,y);
 do{
 ch=getch();
 if(ch==0)//extended
 {
  ch=getch();
  switch(ch){
 /*backward arrow*/ case 75:
			   x--;
			   if(x<5){x=ptr[(size-1)];}
			   gotoxy(x,y);
			   break;
 /*forward  arrow*/ case 77:
			   x++;
			   if(x>ptr[(size-1)]){x=5;}
			   gotoxy(x,y);
			   break;
 /* ----home---- */  case 71:
			    x=5 ;
			     gotoxy(x,y);
			    break;

 /* ----end---- */  case 79:
			     x=strlen(ptr)+5 ;
			     gotoxy(x,y);
			    break;


 }//switch
 }//if extended
 else//normal
 {
   if(isprint(ch))//printable key
   {
     if(i<size)
     {
     gotoxy(x,y);
     printf("%c",ch);
     ptr[i]=ch;
     i++;
     x++;
     }

   }
   else  //non printable key
   {
	 if(ch==13)
	 {
	  gotoxy(x,7);
	   for(i=0;i<size;i++)
	   {
	    printf("%c",ptr[i]);
	   }

	  gotoxy(ptr[(size-1)]+1,y);
	  }//if
   }//else non printable
   }//else normal
  }//do
  while(ch!=27);//esc
}//else
getch();
return 0;
}//main