#include<iostream.h>
#include<conio.h>
class Person
{
public:
Person()
{
cout << "Default constructor of Person"<<endl;
}
Person(Person& p)
{
cout << "Copy constructor of Person" << endl;
}
~Person()
{
cout << "Destructor of Person" << endl;
}
Person operator = (Person &per)
{
cout << "Overloading of Person Equal Operator"<<endl;
return *this;
}
};
class Employee : public Person
{
public:
Employee ()
{
cout << "Default Constructor of Employee" << endl;
}
Employee(Employee& e)
{
cout << "Copy Constructor of Employee" << endl;
}
~Employee()
{
cout << "Destructor of Employee" << endl;
}
Employee operator = (Employee e)
{
cout << "Overloading of Employee Equal Operator"<<endl;
return (*this);
}
};
Employee FillEmp()
{
Employee emp;
cout << "This call of Fill Employee" << endl;
return emp;
}
void PrintEmp(Employee e)
{
cout << "This call of Print Employee" << endl;
}
int main()
{
Employee Emp;
Emp = FillEmp();
PrintEmp(Emp);
//getch();
return 0;
}