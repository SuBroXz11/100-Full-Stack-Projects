import json
import random
import os

# Get the absolute path of the current script's directory
script_dir = os.path.dirname(os.path.abspath(__file__))
filename = os.path.join(script_dir, 'flashcards.json')

def load_flashcards():
    """
    Load flashcards from a JSON file. Return an empty dictionary if the file does not exist.
    """
    try:
        with open(filename, 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        return {}

def save_flashcards(flashcards):
    """
    Save flashcards to a JSON file.
    """
    with open(filename, 'w') as file:
        json.dump(flashcards, file, indent=4)

def display_menu():
    """
    Display the menu options to the user.
    """
    print("\nFlashcard App")
    print("1. Add Flashcard")
    print("2. Quiz")
    print("3. Show All Flashcards")
    print("4. Save and Exit")
    print("Choose an option:")

def add_flashcard(flashcards):
    """
    Add a new flashcard to the collection.
    """
    term = input("Enter the term: ")
    definition = input("Enter the definition: ")
    flashcards[term] = definition
    print(f"Flashcard '{term}' added.")

def quiz_user(flashcards):
    """
    Quiz the user on all flashcards. Loop through all flashcards until no flashcards are left.
    """
    if not flashcards:
        print("No flashcards available.")
        return

    definitions = list(flashcards.values())
    random.shuffle(definitions)  # Shuffle the definitions to make the quiz random

    for definition in definitions:
        term = [k for k, v in flashcards.items() if v == definition][0]
        print(f"What is the term for the definition: '{definition}'?")
        user_answer = input("Your answer: ")

        if user_answer.lower() == term.lower():
            print("Correct!")
        else:
            print(f"Wrong! The correct term is: {term}")
    
    print("Quiz complete! All flashcards have been covered.")

def show_all_flashcards(flashcards):
    """
    Display all flashcards.
    """
    if not flashcards:
        print("No flashcards available.")
        return

    for term, definition in flashcards.items():
        print(f"{term}: {definition}")
