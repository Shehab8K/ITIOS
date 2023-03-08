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
   }

   student (int x)
   {
     id= 0;
     grade = x;
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
   /////////// Lab 4 Functions ///////////
   student operator=(student std);

   /// st1+st2
   student operator+(student std);
   /// st1+5
   student operator+(int x);
   /// 5+st1
  friend student operator+(int x,student std);
  /// st + Aly
  friend student operator+(char namex[], student std);
  ///aly + st
  friend student operator+(student std, char namex[]);
  int operator==(student std);
  operator int();
  operator char*();
  student operator++();
 // student operator++(int x);
};

student fillStudent(void);
void printStudent(student std);

///////// Lab 4 ////////
student student::operator=(student std)
{
  delete(name);
  name = new char[strlen(std.name)+1];
  id = std.id; strcpy(name,std.name); grade=std.grade;
  return std;
}

/// st1+st2
student student::operator+(student std)
{

 student temp;
 //name = new char[strlen((*this).name)+1];
 //temp.id = (*this).id;
 //strcpy(temp.name,(*this).name);
 temp.grade = grade+std.grade; // only added
 return temp;

}/// std+5
student student::operator+(int x)
{

  return((*this).grade+=x);
}/// 5+std
student operator+(int x, student std)
{
  student temp;
  temp.grade=x+std.grade;
  return temp;
}
// std + Aly
student operator+(char namex[], student std)
{
  char *space = " ";
  student temp;
  temp.id = std.id;
  temp.grade = std.grade;
  temp.name = new char[strlen(namex)+strlen(std.name)+2];
  strcpy(temp.name, namex);
  strcat(temp.name, space);
  strcat(temp.name, std.name);
  delete(std.name);
  return temp;
}
 student operator+(student std, char namex[])
 {
  char *space = " ";
  student temp;
  temp.id = std.id;
  temp.grade = std.grade;
  temp.name = new char[strlen(namex)+strlen(std.name)+2];
  strcpy(temp.name, std.name);
  strcat(temp.name, space);
  strcat(temp.name,namex);
  delete(std.name);
  return temp;
 } // ==
  int student::operator==(student std)
  {
    return(id==std.id && *name==*std.name && grade==std.grade);
  }
  // Casting
  student::operator int()
  { return grade; }
  student::operator char*() //////problem !!! print 1st letter only
  { return name; }
  // ++
 /* student student::operator++(int x)
  {
    student old;
    old = *this;
    grade++;
    return old;

  }*/
  student student::operator++()
  {
    grade++;
    return *this;
  }
int main()
{
  int x;
  student std3;
  student std1("Shehab"), std2("Hossam");
  cout<<"Students added"<<endl;
  getch(); clrscr();
  printStudent(std1);
  cout<<endl;
  printStudent(std2);
  cout<<endl;
  getch();
  clrscr();
    /*
     std1 = std2;
     printStudent(std1);
    */

   /*
     std3 = std1+std2;
     cout<<"Student 3"<<endl;
     printStudent(std3);
   */

  /* cout<<"Enter number : ";
     cin>>x;
     std1+x;
     cout<<"Student 1 Edited"<<endl;
     printStudent(std1);
  */
  /*   cout<<"Enter number : ";
     cin>>x;
     std1 = x+std1;
     cout<<"Student 1 Edited"<<endl;
     printStudent(std1);
  */
  /* char name[] = {" Aly"};
     cout<<"Enter name"<<endl;
     cin>>name;
     std1 = name + std1;
     printStudent(std1);
  */

  /* char name[] = {" Aly"};
     cout<<"Enter name"<<endl;
     cin>>name;
     std1 = std1 + name;
     printStudent(std1);
   */
  /*int check;
    check = std1==std2;
    cout<<"Result : "<<check<<endl; getch();
    std1=std2;
    check = std1==std2;
    cout<<"Result : "<<check;
  */
  /*  int n = (int) std1;
    cout<<"Number casting : "<<n<<endl; getch();
    char* ptr;
    ptr = (char*) std1;
    cout<<"Name casting : "<<ptr;
  */

  /* std1 = ++std1;
     printStudent(std1);
  */
   /*
    std1 = std1++;
    printStudent(std1);
   */
//student std("Shehab");
// std = fillStudent();
// printStudent(std);

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
   char *name;
   i = std.getId();
   cout<<"Student ID : "<<i<<endl;

   strcpy(name,std.getName());
   cout<<"Student Name : "<<name<<endl;//<<"This is with * : "<<*name<<endl; // leeh msh *name

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
  name = new char[strlen(n)+1];

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