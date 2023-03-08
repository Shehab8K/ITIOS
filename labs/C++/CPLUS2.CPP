#include<stdio.h>
#include<CONIO.H>
#include<STRING.H>
#include<iostream.h>
class student{
   int id;
   char name[20];
   int grade;

   public:
   void setId(int i);
   void setName(char n[20]);
   void setGrade(int g);

   int getId(void);
   char *getName(void);
   int getGrade(void);
};

student fillStudent(void);
void printStudent(student std);

int main()
{
//int id;
//int grade;
//char name[20];
student std;

 std = fillStudent();
 printStudent(std);
/*cout<<"Enter student ID"<<endl;
cin>>id;
std.setId(id);

cout<<"Enter student Name"<<endl;
cin>>name;
std.setName(name);

cout<<"Enter student Grade"<<endl;
cin>>grade;
std.setGrade(grade);

cout<<std.getId();
cout<<std.getName();
cout<<std.getGrade();*/
getch();
clrscr();
return 0;
}
//////////////////////////
student fillStudent(void)
{
  student std;
  int i, g;
  char name[20];
  cout<<"Please enter student ID"<<endl;
  cin>>i;
  std.setId(i);

  cout<<"Please enter student Name"<<endl;
  cin>>name;
  std.setName(name);

  cout<<"Please enter student Grade"<<endl;
  cin>>g;
  std.setGrade(g);

  return std;

}

void printStudent(student std)
{
   int i, g;
   char name[20];
   i = std.getId();
   cout<<"Student ID : "<<i<<endl;

   strcpy(name,std.getName());
   cout<<"Student Name : "<<name<<endl;

   g = std.getGrade();
   cout<<"Student ID : "<<g<<endl;
}

void student::setId(int i)
{

  id = i;
}

void student::setName(char n[20])
{
  strcpy(name, n);
}

void student::setGrade(int g)
{
  grade = g;
}
//////////////////////////
int student::getId(void)
{ return id; }

char *student::getName(void)
{ return name; }

int student::getGrade(void)
{ return grade; }