#include<iostream.h>

class AA
{
   protected:
   int a;
   public:
   AA(int m) {a = m; cout<<"a"<<a<<endl;}
};

class BB : public AA
{
   protected:
   int b;
   public:
   BB(int m, int n) : AA(n)
   {b = m;  cout<<"b"<<b<<endl; }
};

class CC : public AA
{
  protected:
  int c;
   public:
   CC(int m, int n) : AA(n)
   {c = m; cout<<"c"<<c<<endl;}
};

class XX : private BB, protected CC
{
   public:
    XX(int m, int n, int p) : CC(n, p), BB(m,n)
    {}
};

int main()
{
XX myObject(3, 4, 5);
return 0;
}











