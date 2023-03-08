#include<iostream.h>
#include<string.h>
#include<CONIO.h>

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
 customer cus;

 cout<<"Enter Employee "<<endl;
 emp = fillEmployee();

 cout<<"================="<<endl;

 cout<<"Enter Customer "<<endl;
 cus = fillCustomer();

 clrscr();

 printEmployee(emp);
 cout<<"================="<<endl;
 printCustomer(cus);

 getch();
 clrscr();
 return 0;
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
  cout<<"ID :  "<<id<<endl;
  return id;
}

char* person::getName()
{
  cout<<"Name :  "<<name<<endl;
  return name;
}

int employee::getSalary()
{
  cout<<"Salary :  "<<salary<<endl;
  return salary;
}

char* customer::getPhone()
{
  cout<<"Phone :  "<<phone<<endl;
  return phone;
}