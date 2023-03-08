#include <iostream.h>
#include<conio.h>
#include<ctype.h>
#include<string.h>

class Staff
{
  char* name;
  int count;

  public:
  Staff()
  { name = NULL; }
  Staff(char* nam)
  {
    name = new char[strlen(nam)+1];
    strcpy(name , nam);
  }
  char* getSname()
  {
    return name;
  }

  int getCount()
  {
    return count;
  }
};

class Subject
{
    char* subname;
    Staff** staff;
    public:

    Subject()
    {
      subname = NULL;
      staff = NULL;
    }

    Subject(char* subn, Staff** staffn)
    {
	subname = new char[strlen(subn)+1];
	staff = staffn;
	strcpy(subname,subn);
    }
    char* getSubName()
    {
	return subname;
    }
    Staff** getStaff()
    {
      return staff;
    }
};

class Student
{
    char* name;
    Subject ** subjects;
    int num_subjects;

    public:
    Student()
    {
	name = new char[6];
	strcpy(name,"Ahmed");
	subjects = NULL;
	num_subjects = 0;
    }
    Student(char* n, Subject ** sub,int num_sub)
    {
	name = new char[strlen(n)+1];
	subjects = sub;
	num_subjects = num_sub;
	strcpy(name,n);
    }

    void SetSubject(Subject **sub)
    {
	subjects = sub;
    }
    Subject** GetSubject()
    {
	return subjects;
    }
    char* getName()
    {
	return name;
    }
    int getNumSubjects()
    {
	return num_subjects;
    }
    ~Student()
    {
	delete(name);
    }
};

class ITI
{
    Student ** st;
    public:
    ITI()
    {
	st = NULL;
    }

    ITI(Student ** s)
    {
	st = s;
    }

    void PrintDetails();
};


int main() {
    Staff stf1("Shebo"), stf2("Hamada");

    Staff* stuArr[2];
    stuArr[0] = &stf1;
    stuArr[1] = &stf2;  //// Staff is done /////


    Subject sub1("OOP",stuArr),sub2("C++",stuArr),sub3("physics",stuArr);

    // Subjects for student 1

    Subject* arrSub[2];
    arrSub[0] = &sub1;
    arrSub[1] = &sub2;

    // Subjects for student 2

    Subject* arrSub2[1];
    arrSub2[0] = &sub3;

    //// Subjects is done ////


    Student s1("Omar",arrSub,2),s2("Mahmoud",arrSub2,1);

    Student* arrStu[2];
    arrStu[0] = &s1;
    arrStu[1] = &s2;

    ITI c1(arrStu);
    c1.PrintDetails();

    getch();
    return 0;
}

void ITI::PrintDetails()
{
  for(int i=0;i<2;i++)
   {
      cout << "Name is : " << st[i]->getName()<<endl;
      cout << "subjects is : ";
      for(int j=0;j<st[i]->getNumSubjects();j++)
	{
	  cout << st[i]->GetSubject()[j]->getSubName() << ", ";
	  cout << st[i]->GetSubject()[j]->getStaff()[j]->getSname()<< ", ";
	}
	cout << endl;
	cout << endl;
    }
}

