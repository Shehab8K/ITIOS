#include<iostream.h>
#include<string.h>
#include<CONIO.h>
#include<fstream.h>
class person
{
  protected:
  int id;
  char name[20];
  public:
  person()
  {
    id = 0;
    strcpy(name,"NULL");
  }

  person(int m, char n[])
  {
    id = m;
    strcpy(name, n);
  }

  void setId(int m);
  void setName(char n[]);

  int getId();
  char *getName();
};

class employee:public person
{
  protected:
  int salary;

  public:
  employee()
  {
    salary = 0;
  }

  employee(int s,int m, char n[]):person(m,n)
  {
    salary = s;
  }

  void setSalary(int s);

  int getSalary();

  friend ostream& operator << (ostream& out, employee emp);
  friend istream& operator >> (istream&in, employee& emp);
};

class customer:public person
{
  protected:
  char phone[12];

  public:
  customer()
  {
    strcpy(phone,"NULL");
  }

  customer(char p[],int m, char n[]):person(m,n)
  {
    strcpy(phone, p);
  }

  void setPhone(char p[]);

  char* getPhone();
};

void printEmployee(employee emp);
void printCustomer(customer cus);
employee fillEmployee(void);
customer fillCustomer(void);
////////////////////////

int main()
{
 employee emp;
 fstream obj;
/////// First Part /////////
/* employee arr[2];

 cout<<"Enter Employee "<<endl;
 for(int i=0; i<2; i++)
 {
   cin>>arr[i];
 }


 cout<<"================="<<endl;

  for(i=0; i<2; i++)
 {
   cout<<arr[i];
   cout<<endl;
 }
*/
//////// Second Part /////////

 cin>>emp;
/*
 obj.open("C:\\zzz.txt",ios::out);  // out = write
 obj<<emp;
 obj.close();

 clrscr();
 getch();

 obj.open("C:\\zzz.txt", ios::in);  // in = read
 obj>>emp;
 cout<<emp;
 obj.close();
*/
 obj.open("C:\\abb.bin", ios::out | ios::binary);
 obj.write((char*) &emp, sizeof(emp));
 obj.close();

  clrscr();
  getch();

  obj.open("C:\\abb.bin", ios::in | ios::binary);
  obj.read((char*) &emp, sizeof(emp));
  obj<<emp;
  cout<<emp;
  obj.close();

 getch();
 clrscr();
 return 0;
}
//////// cin & cout ////////
ostream& operator << (ostream &out, employee emp)
{
  out<<emp.getId()<<endl;       // Add text id, name, salary
  out<<emp.getName()<<endl;
  out<<emp.getSalary()<<endl;
  return out;
}

istream& operator >> (istream &in, employee& emp)
{
 // cout<<"id : "<<endl;
  in>>emp.id;
//  cout<<"name : "<<endl;
  in>>emp.name;
//  cout<<"salary : "<<endl;
  in>>emp.salary;
  return cin;
}

//////// Print ////////
void printEmployee(employee emp)
{
  emp.getId();
  emp.getName();
  emp.getSalary();
}

void printCustomer(customer cus)
{
  cus.getId();
  cus.getName();
  cus.getPhone();
}

//////// Fill /////////
employee fillEmployee()
{
   int id;
   char name[20];
   int salary;

   employee emp;

   cout<<"Enter ID : "<<endl;
   cin>>id;
   cout<<"Enter Name : "<<endl;
   cin>>name;

   cout<<"Enter Salary : "<<endl;
   cin>>salary;

   emp.setId(id);
   emp.setName(name);
   emp.setSalary(salary);
   return emp;
}

customer fillCustomer()
{
   customer cus;
   int id;
   char phone[12];
   char name[20];

   cout<<"Enter ID : "<<endl;
   cin>>id;
   cout<<"Enter Name : "<<endl;
   cin>>name;

   cout<<"Enter Phone : "<<endl;
   cin>>phone;

   cus.setId(id);
   cus.setName(name);
   cus.setPhone(phone);
   return cus;
}

///// Setters ///////
void person::setId(int m)
{
  id = m;
}

void person::setName(char n[])
{
  strcpy(name, n);
}

void employee::setSalary(int s)
{
  salary = s;
}

void customer::setPhone(char p[])
{
  strcpy(phone, p);
}
//// Getters ///////
int person::getId()
{
//  cout<<"ID :  "<<id<<endl;
  return id;
}

char* person::getName()
{
 // cout<<"Name :  "<<name<<endl;
  return name;
}

int employee::getSalary()
{
 // cout<<"Salary :  "<<salary<<endl;
  return salary;
}

char* customer::getPhone()
{
  cout<<"Phone :  "<<phone<<endl;
  return phone;
}