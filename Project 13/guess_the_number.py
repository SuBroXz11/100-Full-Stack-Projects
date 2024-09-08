import random

def generate_random_number(guess_range):
    """
    Generate a random number between 0 and upper_limit - 1.
    
    Parameters:
    upper_limit (int): The upper limit for the random number generation.
    
    Returns:
    int: A random number within the specified range.
    """
    return random.randint(0, guess_range - 1)

def get_user_guess():
    """
    Prompt the user to guess a number and return the guess.
    Includes input validation to ensure the guess is an integer.
    
    Returns:
    int: The user's guessed number.
    """
    while True:
        try:
            guess = int(input('Guess the number: '))
            return guess
        except ValueError:
            # If input is not a valid integer, print an error message
            print("Invalid input. Please enter a valid integer.")

def play_guessing_game():
    """
    Main function to run the guessing game.
    - Prompts the user to enter a range.
    - Generates a random number within that range.
    - Allows the user to guess the number with a limited number of attempts.
    """
    # Get the range for the random number
    guess_range = int(input("Enter the range you want to guess from (e.g., 100): "))
    
    # Generate the random number within the specified range
    random_number = generate_random_number(guess_range)
    print("The random number has been generated...")

    attempts = 0
    max_attempts = 3  # Set a maximum number of attempts

    # Loop to allow the user multiple guesses
    while attempts < max_attempts:
        # Get the user's guess
        user_guess = get_user_guess()
        attempts += 1

        # Check if the user's guess is correct
        if user_guess == random_number:
            print("Congratulations! You guessed it right!")
            break
        else:
            if attempts < max_attempts:
                print(f"Sorry, you guessed it wrong. Try again. You have {max_attempts - attempts} attempts left.")
            else:
                print(f"Sorry, you guessed it wrong. The number was {random_number}.")

# Entry point of the script
if __name__ == "__main__":
    try:
        play_guessing_game()
    except KeyboardInterrupt:
        print("\nProgram interrupted. Exiting safely...")
        
