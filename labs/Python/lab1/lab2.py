#!/usr/bin/env python3

#Question 1
def unique_numbers(list):
  print(set(list))

demo = [1,1,2,2,3,3,3,4,5,6,7]
unique_numbers(demo)

#Question 2
def slicer(string):
  if len(string) %2 == 0:
    midpoint = int(len(string) / 2)
    part_1 = string[:midpoint]
    part_2 = string[midpoint:]
  else:
    midpoint = int((len(string)) / 2) + 1
    part_1 = string[:midpoint]
    part_2 = string[midpoint:]
  return part_1,part_2

def string_edit(str_1, str_2):
  first = slicer(str_1)
  second = slicer(str_2)
  print(f"{first[0]} {second[0]} {first[1]} {second[1]}")

string_edit("Shehab","Joker")

#Question 3
def are_all_numbers_different(numbers):
    unique_numbers = set(numbers)
    if len(unique_numbers) == len(numbers):
        return True
    else:
        return False
    
print(are_all_numbers_different((1,2,3,4,5,6,7)))
print(are_all_numbers_different((1,2,3,4,5,6,6)))

#Question 4
def bubble_sort(numbers):
    n = len(numbers)
    for i in range(n):
        for j in range(0, n-i-1):
            if numbers[j] > numbers[j+1]:
                numbers[j], numbers[j+1] = numbers[j+1], numbers[j]
numbers = [5, 2, 9, 1, 5, 6, 18, 10, 3, 4, 8, 2, 5]
bubble_sort(numbers)
print(numbers)


#Question 5
import random


def guessing_game():
    answer = random.randint(1, 100)
    attempts = 10
    guessed_numbers = []
    while attempts > 0:
        guess = input(f"You have {attempts} tries left. Guess a number between 1 and 100: ")
        try:
            guess = int(guess)
            if guess < 1 or guess > 100:
                print("Number is out of range (1-100). Try again.")
                continue
            if guess in guessed_numbers:
                print("You already guessed this number. Try again.")
                continue
        except ValueError:
            print("Please enter a valid number between 1 and 100.")
            continue
        guessed_numbers.append(guess)
        if guess == answer:
            print("Congratulations! You guessed the correct number!")
            play_again = input("Do you want to play again? (y/n): ")
            if play_again.lower() == 'y':
                guessing_game()
            else:
                print("Thanks for playing!")
            break
        elif guess > answer:
            print("Your guess is too high. Try again.")
        else:
            print("Your guess is too low. Try again.")
        attempts -= 1
    else:
        print("You have no tries left.")
        play_again = input("Do you want to play again? (y/n): ")
        if play_again.lower() == 'y':
            guessing_game()
        else:
            print("Thanks for playing!")
guessing_game()