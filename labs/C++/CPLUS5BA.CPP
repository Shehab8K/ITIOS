#include<stdio.h>
#include<CONIO.H>
#include<STRING.H>
#include<iostream.h>
class student{
   int id;
   char *name;
   int grade;
   static char school[10];

   static int count;
   public:
   void setId(int i);
   void setName(char n[50]);
   void setGrade(int g);

   static void setSchoolName(char n[50]);

   int getId(void);
   char *getName(void);
   int getGrade(void);
   static char *getSchoolName(void);  //static methods can return in prototype (*) unlike casting

   student()
   {
     id =0;
     grade = 0;
     count++;
   }

   student(char n[])
   {
     int i, g;
     cout<<"Please enter student ID"<<endl;
     cin>>i;
     id = i;

     cout<<"Please enter student Grade"<<endl;
     cin>>g;
     grade = g;


     int size;
     size = strlen(n);
     name = new char[size+1];
     strcpy(name,n);
     count++;
   }

   student (int x)
   {
     id= 0;
     grade = x;
     count++;
   }

    student(student &std)
   {
     id = std.id;
     name = new char[strlen(std.name)+1];
     strcpy(name, std.name);
     grade = std.grade;
     count++;
   }

   ~student()
   {
     delete(name);
     count--;
   }
};
int student::count=0; // intialization outside class Dr. said that
char student::school[10]="iti";
student fillStudent(void);
void printStudent(student std);

int main() //fillStudent problem with +1 student have to use para constructor :(
{
  int x, i;
  student *std;
  cout<<"Enter number of students : ";
  cin>>x;
  char temp[50];
  std = new student[x];
  clrscr();

//  std1 = fillStudent();
//  std2 = fillStudent();
/*
  cout<<"Student 1"<<endl;
  printStudent(std1);
  cout<<"student 2"<<endl;
  printStudent(std2);
*/
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
  std.setName(name);

  cout<<"Please enter student Grade"<<endl;
  cin>>g;
  std.setGrade(g);

  return std;
}

void printStudent(student std)
{
   int i, g;
   char *name;
   char school[10];
   i = std.getId();
   cout<<"Student ID : "<<i<<endl;

   strcpy(name,std.getName());
   cout<<"Student Name : "<<name<<endl;//<<"This is with * : "<<*name<<endl; // leeh msh *name

   g = std.getGrade();
   cout<<"Student Grade : "<<g<<endl;

   strcpy(school,std.getSchoolName());
   cout<<"Student School : "<<school<<endl;
}

void student::setId(int i)
{
  id = i;
}

void student::setName(char n[])
{
  delete name;
  name = new char[strlen(n)+1];

  strcpy(name, n);
}

void student::setGrade(int g)
{
  grade = g;
}

void student::setSchoolName(char n[])

{
   strcpy(school,n);
}
//////////////////////////
int student::getId(void)
{ return id; }

char *student::getName(void)
{ return name; }

int student::getGrade(void)
{ return grade; }

char *student::getSchoolName(void)
{
   return school;
}