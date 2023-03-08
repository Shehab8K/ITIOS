#include<iostream.h>
class Employee
{
public:
Employee()
{
cout<<"Default Constructor"<<endl;
}
~Employee()
{
cout<<"Destructor"<<endl;
}
Employee(Employee& rEmp)
{
cout<<"Copy Constructor"<<endl;
}
Employee operator = (Employee e)
{
cout<<"Overloading = Operator"<<endl;
return e;
}
};
Employee FillEmp()
{
Employee e;
cout<<"This call of Fill Employee"<<endl;
return e;
}
void PrintEmp(Employee e)
{
cout<<"This call of Print Employee"<<endl;
}
int main()
{
Employee Emp;
Emp = FillEmp();
PrintEmp(Emp);
return 0;
}
