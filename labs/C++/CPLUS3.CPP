#include<stdio.h>
#include<CONIO.H>
#include<STRING.H>
#include<iostream.h>
class student{
   int id;
   char *name;
   int grade;

   public:
   void setId(int i);
   void setName(char n[20]);
   void setGrade(int g);

   int getId(void);
   char *getName(void);
   int getGrade(void);

   student()
   {
     id =0;
     grade = 0;
   }

   student(char n[])
   {
     id=0;
     grade=0;
     int size;
     size = strlen(n);
     name = new char[size+1];
     strcpy(name,n);
   }

    student(student &std)
   {
     id = std.id;
     name = new char[strlen(std.name)+1];
     strcpy(name, std.name);
     grade = std.grade;
   }

   ~student()
   {
     delete(name);
   }
};

student fillStudent(void);
void printStudent(student std);

int main()
{
//int id;
//int grade;
//char name[20];
student std("Shehab");
// std = fillStudent();
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
  char name[50];
  cout<<"Please enter student ID"<<endl;
  cin>>i;
  std.setId(i);

  cout<<"Please enter student Name"<<endl;
  cin>>name;
 // std.student(name);
  std.setName(name);

  cout<<"Please enter student Grade"<<endl;
  cin>>g;
  std.setGrade(g);

  return std;

}

void printStudent(student std)
{
   int i, g;
   char name[50];
   i = std.getId();
   cout<<"Student ID : "<<i<<endl;

   strcpy(name,std.getName());
   cout<<"Student Name : "<<name<<endl;

   g = std.getGrade();
   cout<<"Student Grade : "<<g<<endl;
}

void student::setId(int i)
{
  id = i;
}

void student::setName(char n[])
{
  delete name;
  name = new char[strlen(n)+1]

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