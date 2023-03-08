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
   void setName(char n[]);
   void setGrade(int g);

   static void setSchoolName(char n[])
   {
     strcpy(school,n);
   }

   int getId();
   char *getName();
   int getGrade();
   static char *getSchoolName();  //static methods can return in prototype (*) unlike casting

   student operator=(student std)
   {
     id = std.id;
     grade = std.grade;
     delete(name);
     name = new char[strlen(std.name)+1];
     strcpy(name,std.name);
     return *this;
   }

   student()
   {
     id =0;
     name = new char(5);
     strcpy(name,"NULL");
     grade = 0;
     count++;
   }

   student(char namex[], int sid, int sg)
    {
	int size = strlen(namex)+1;
	name = new char[size];
	strcpy(name, namex);
	id = sid;
	grade = sg;
	count++;
    }

 /*  student (int x)
   {
     id= 0;
     grade = x;
     count++;
   } */

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
char student::school[10]={"iti"};

student fillStudent(void);
void printStudent(student std);

int main() //fillStudent problem with +1 student have to use para constructor :(
{
  int x,i;
  student *ptr;
  char temp[10];
  cout<<"Enter number of students : ";
  cin>>x;
  ptr = new student[x];
  clrscr();

  for(i=0; i<x; i++)
  {
    ptr[i] = fillStudent();
  }

  cout<<"Added"<<endl;

  for(i=0; i<x; i++)
  {
    printStudent(ptr[i]);
  }

  getch();
  clrscr();
  cout<<"Enter School name : ";
  cin>>temp;
  student::setSchoolName(temp);
  cout<<endl;

  for(i=0; i<x; i++)
  {
    printStudent(ptr[i]);
  }
//  std1 = fillStudent();
//  std2 = fillStudent();
/*
  cout<<"Student 1"<<endl;
  printStudent(std1);
  cout<<"student 2"<<endl;
  printStudent(std2);
*/
delete[]ptr;
getch();
clrscr();
return 0;
}
//////////////////////////
student fillStudent(void)
{
  student std;
  int i, g;
  char *name;
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
   std.getId();
   std.getName();
   std.getGrade();
   std.getSchoolName();
}

void student::setId(int i)
{
  id = i;
}

void student::setName(char n[])
{
  delete (name);
  name = new char[strlen(n)+1];
  strcpy(name, n);
}

void student::setGrade(int g)
{
  grade = g;
}

//////////////////////////
int student::getId()
{
  cout<<"Student ID : "<<id<<endl;
  return id;
}

char *student::getName()
{
  cout<<"Student Name : "<<name<<endl;
  return name;
}

int student::getGrade()
{
  cout<<"Student Grade : "<<grade<<endl;
  return grade;
}

char *student::getSchoolName()
{
   cout<<"Student School : "<<school<<endl;
   return school;
}