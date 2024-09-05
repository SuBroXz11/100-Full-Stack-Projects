import random

# Function to print the choice and corresponding ASCII art
def print_choice(name, choice):
    if choice == 0:
        print(f'{name} chose rock')
        print('''
            ,--.--._
    ------" _, \___)
            / _/____)
            \//(____)
    ------\     (__)
           `-----"''')
    elif choice == 1:
        print(f'{name} chose paper')
        print('''       
        _.-._
        | | | |_
        | | | | |
        | | | | |
      _ |  '-._ |
      \`\`-.'-._;
       \    '   |
        \  .`  /
         |    |''')
    elif choice == 2:
        print(f'{name} chose scissors')
        print('''
        .-.  _
        | | / )
        | |/ /
       _|__ /_
      / __)-' )
      \  `(.-')
       > ._>-'
      / \\/''')

# Function to determine the winner based on user and computer choices
def get_winner(user, computer):
    if user == computer:
        return 'DRAW!'
    elif (user == 0 and computer == 2) or (user == 1 and computer == 0) or (user == 2 and computer == 1):
        return 'You win'
    else:
        return 'Computer wins'

# Infinite loop to keep the game running until the user decides to exit
while True:
     # Prompt user for their choice and provide an option to exit
    user_choose = int(input('Choose 0 for rock, 1 for paper, 2 for scissors, or 3 to exit: '))
    if user_choose == 3:
        print("Thanks for playing! Goodbye.")
        break
    
    # Handle invalid input
    if user_choose not in [0, 1, 2, 3]:
        print("Invalid choice, please choose again.")
        continue
    
     # Generate the computer's random choice
    computer_choose = random.randint(0, 2)

    print_choice('You', user_choose)
    print_choice('Computer', computer_choose)
    
     # Determine and display the winner
    print(get_winner(user_choose, computer_choose))
    print("\n")
