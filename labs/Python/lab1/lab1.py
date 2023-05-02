#!/usr/bin/env python3

# Question 1
print("Hello")
def take_input_from_user():
    name = ""
    take_input = input(name)
    take_input2 = input(name)
    print('{1} {0}'.format(take_input,take_input2))

take_input_from_user()

# Question 2
def numbers():
    take = input()
    n = int(take)
    nn = int(n) *10 + int(n)
    nnn = int(n) *100  + int(nn)
    result = n + nn + nnn
    print(result)
numbers()

# Question 3
string="""a string that you "don't" have to escape
This
is a ....... multi-line
heredoc string --------> example"""
print(string)

# Question 4
import math

def sphere_volume(radius=6):
    volume = (4/3) * math.pi * radius**3
    print(f"sphere_volume = {volume:.2f}")

sphere_volume()


#Question 5
height=int(input('enter triangle height: '))
base=int(input('enter triangle base: '))
area=(1/2)*base*height
print(f"the area of the triangle with the given base and height is {area:.2f}")

#Question 6
for i in range(1,10):
  if i < 6:
    print("* "*i)
  else:
    print("* "*int(10-i))

  

#Question 7
word = str(input('please enter one word: '))
print(word[::-1])

#Question 8
for i in range(7):
    if i == 3 or i == 6:
      continue
    print(i)

#Question 9
a, b = 0, 1
print(b, end=" ")
while b <= 50:
    a, b = b, a + b
    print(b, end=" ")

#Question 10
string = input("Enter a string: ")
digits = 0
letters = 0
for char in string:
    if char.isdigit():
        digits += 1
    elif char.isalpha():
        letters += 1
print("Number of digits:", digits)
print("Number of letters:", letters)