#include <iostream.h>
#include <conio.h>
#include <string.h>

class student
{
	int ID;
	char* Name;
	int grade;
	static int count;
	static char schoolname[10];

   public:
   void setid(int id);
   void setgrade(int g);
   void setname(char name[]);
   int getid();
   int getgrade();
   char* getname();

   student& operator=(student st);


   static int getcount()
	{
		return count;
	}

   static void setschoolname(char n [])
	{
		strcpy(schoolname, n);
	}
   static char* getschoolname()
	{
		return schoolname;
	}



   student()
   {
	int size =5;
	Name = new char[size];
	strcpy(Name, "NULL");
	ID = 0;
	grade = 0;
	count++;
   }

   student(char name[], int id, int g)
   {
	int size = strlen(name)+1;
	Name = new char[size];
	strcpy(Name, name);
	ID = id;
	grade = g;
	count++;
   }

   student (student &std)
   {
	ID = std.ID;
	grade = std.grade;
	Name = new char[strlen(std.Name)+1];
	strcpy(Name,std.Name);
	count++;
   }

   ~student()
   {
	delete(Name);
	count--;
   }


};

int student::count = 0;
char student::schoolname[10] = {"ITI"};

student fillstudent (void);
void printstd (student std);

int main ()
{

	cout << " Enter number of students " << endl;     //prompt user for no of students
	int x;                                            //number of students
	cin >> x;
	student* ptr;                                     //pointer to students el 3ayza adkhlha
	ptr = new student[x];
							 //dynmaic alloc of students of size x

	for (int i = 0; i< x; i++)
	{
		ptr[i] = fillstudent();
	}
	for (i = 0; i < x; i++)
	{
		printstd(ptr[i]);

	}

	delete[]ptr;
	getch();
	clrscr();

	return 0;
}

void student::setid(int id)
{
      ID = id;


}

void student::setgrade(int g)
{
	grade = g;
}

void student::setname(char name[])
{
	delete(Name);
	Name = new char[strlen(name)+1];
	strcpy(Name, name);
}

int student::getid()
{
    cout << "Student's id: " << ID<< endl;
    return ID;
}

int student::getgrade()
{
	cout << "Student's Grade: " << grade << endl;
	return grade;
}

char* student::getname()
{
	cout << "Student's name: " << Name << endl;
	return Name;
}

student fillstudent (void)
{
	student std;
	char* name;
	int id;
	int grade;

	cout << "Enter name: " << endl;
	cin >> name;
	std.setname(name);
	cout << "Enter ID: " << endl;
	cin >>id;
	std.setid(id);
	cout << "Enter Grade: " << endl;
	cin >> grade;
	std.setgrade(grade);

	return std;
}


void printstd (student std)
{
  std.getname();
  std.getid();
  std.getgrade();
}




/*student student::operator+(student st)
{
	char name[20];
	strcpy(name,Name);
	strcat(name,st.Name);
	student temp;
	temp.ID = ID + st.ID;
	temp.grade = grade + st.grade;
	temp.setname(name);
	return temp;
}

student student::operator+(int m)
{
	student temp;
	temp.grade = grade + m;
	temp.ID = ID;
	delete(temp.Name);
	temp.Name = new char[strlen(Name)+1];
	strcpy(temp.Name,Name);
	return temp;
}

student student::operator+(char n[])

{
	student temp;
	temp.grade = grade;
	temp.ID = ID;
	delete(temp.Name);
	temp.Name = new char[strlen(Name)+strlen(n)+1];
	strcpy(temp.Name, Name);
	strcat(temp.Name, n);
	return temp;

}

student student::operator++()
{
	grade++;
	return *this;
}

student student::operator++(int d)
{
	student old;
	old=*this;
	grade++;
	return old;
}

int student::operator==(student st)
{
	return(ID == st.ID && grade == st.grade);
}
*/
student& student::operator=(student st)
{
	ID = st.ID;
	grade = st.grade;
	delete(Name);
	Name = new char[strlen(st.Name)+1];
	strcpy(Name, st.Name);
	return *this;
}

/*
student operator+(int x, student st)
{
	student temp;
	temp.grade= x + st.grade;
	temp.ID = st.ID;
	delete(temp.Name);
	temp.Name = new char[strlen(st.Name)+1];
	strcpy(temp.Name,st.Name);
	return temp;
}
student operator+(char m[], student st)
{
	student temp;
	delete(temp.Name);
	temp.Name= new char[strlen(st.Name)+strlen(m)+1];
	strcpy(temp.Name,m);
	strcat(temp.Name,st.Name);
	temp.ID = st.ID;
	temp.grade= st.grade;
	return temp;

}
student::operator int()
{
	return grade;
}

student student::operator char*()
{
	return Name;
}*/