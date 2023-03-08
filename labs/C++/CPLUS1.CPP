#include<iostream.h>
#include<CONIO.H>

struct student {
 int id;
 char name[20];
 int grade[3];
};

struct student fillstudent(void);
void printstudent(student e);


int main()
{
int i;
student *s;
int size;

cout<<"please enter number";
cin>>size;

s = new student[size];

clrscr();

if(s)
{
 for(i=0; i<size; i++)
 {
  cout<<"======== Please Enter Student"<<i+1<<" Data ========"<<endl;
  s[i]=fillstudent();
  cout<<endl;
 }
 clrscr();

 for(i=0; i<size; i++)
 {
  cout<<"Data of Student"<< i+1<<endl;
    cout<<"======================================"<<endl;
  printstudent(s[i]);
 }
}

delete(s);
getch();
clrscr();
return 0;
}

struct student fillstudent(void)
{
int i;
student s;

cout<<"Student ID : ";
cin>>s.id;

cout<<"Student Name : ";
cin>>s.name;

for(i=0; i<3; i++)
{
cout<<"Student Grade"<<i+1<<" : ";
cin>>s.grade[i];
}

return s;
}

void printstudent(student e)
{
int i;
cout<<"Student ID -> "<<e.id<<endl;
cout<<"Student Name -> "<<e.name<<endl;

for(i=0; i<3; i++)
 {
  cout<<"Student Grade "<<i+1<<"-> "<< e.grade[i]<<endl;
 }
}