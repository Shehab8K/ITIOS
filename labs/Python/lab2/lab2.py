import mysql.connector
from getpass import getpass
from mysql.connector import connect, Error

def main():
    while True: 
        print("Select an operation:")
        print(" Enter (e) to Add new employee")
        print(" Enter (m) to Add new manager")
        print(" Enter (t) to Transfer employee")
        print(" Enter (s) to Show employee/manager")
        print(" Enter (l) to List all employees/managers")
        print(" Enter (f) to Fire employee/manager")
        print(" Enter (q) to Quit")
       
        operation = input("Enter the operation you want: ")
        if operation == 'e':
            first_name=input('enter first name: ')
            last_name=input('enter last name: ')
            age=input('enter age: ')
            dep=input('enter department: ')
            salary= input('enter salary: ')
            emp=Employee(first_name,last_name,age,dep,salary)

        elif operation == 'm':
            first_name=input('enter first name: ')
            last_name=input('enter last name: ')
            age=input('enter age: ')
            dep=input('enter department: ')
            salary= input('enter salary: ')
            managed_dep=input('enter managed department: ')
            manager=Manager(first_name,last_name,age,dep,salary,managed_dep)

        elif operation == 't':
            id=int(input('enter employee id to be transfered: '))
            new_dep=input('enter department to be transferred to: ')
            for emp in Employee.all_employees:
                if emp.id==id:
                    emp.transfer(new_dep)
       
        elif operation == 's':
            id=int(input('enter employee id to show details: '))
            for emp in Employee.all_employees:
                if emp.id==id:
                    emp.show()

        elif operation == 'l':
            Employee.list_employees()

        elif operation == 'f':
            id=int(input('enter employee id to fire: '))
            for emp in Employee.all_employees:
                if emp.id==id:
                    emp.fire()        

        elif operation == 'q':
            break
        else:
            print("Invalid operation")

try:
    with connect(
        host="localhost",
        user="root",
        password="",
        port=3306,
        database="python_lab"
    ) as connection:
        cursor = connection.cursor()
        cursor.execute('''drop table if exists employee''')
        cursor.execute('''create table employee(
                id int primary key not null,
                First_name text not null,
                Last_name text not null,
                age int not null,
                department text not null,
                salary int not null
                );''')
        connection.commit()

        class Employee:
            all_employees = []
            id = 0

            def __init__(self, First_name, Last_name, Age, Department, Salary):
                self.First_name = First_name
                self.Last_name = Last_name
                self.Age = Age
                self.Department = Department
                self.Salary = Salary
                Employee.all_employees.append(self)
                Employee.id += 1
                self.id = Employee.id

                cursor.execute('''Insert into employee(id, First_name, Last_name, age, department,salary)
                    VALUES (%s, %s, %s, %s, %s, %s)''',
              (self.id, self.First_name, self.Last_name, self.Age, self.Department, self.Salary))
                connection.commit()

            def transfer(self, new_dept):
                self.Department = new_dept
                cursor.execute(
                    'Update employee set department=%s where id=%s',(self.Department, self.id))
                connection.commit()

            def fire(self):
                Employee.all_employees.remove(self)
                cursor.execute('delete from employee where id=%s',(self.id,))
                connection.commit()

            def show(self):
                cursor.execute("select * from employee where id=%s",(self.id,))
                rows = cursor.fetchall()
                for row in rows:
                    print(row)

            @classmethod
            def list_employees(cls):
                cursor.execute('select * from employee')
                rows = cursor.fetchall()
                for row in rows:
                    print(row)

        class Manager(Employee):
            def __init__(self, First_name, Last_name, Age, Department, Salary, Managed_department):
                super().__init__(First_name, Last_name, Age, Department, Salary)
                self.Managed_department=Managed_department
    
            def show(self):
                if(isinstance(self,Manager)):
                    cursor.execute("select * from employee where id=%s",(self.id,))
                    row = cursor.fetchone()
                    data = list(row) 
                    data[5]='confidential'
                    print(data)

        main()

except Error as e:
    print(f'exception: {e}')