def main():
    answer_one = 'kathmandu'
    answer_two = 'cow'
    answer_three = 'red'
    
    while True:
        try:
            # Ask questions
            question_one = input('What is the capital city of Nepal?\n').strip().lower()
            question_two = input('What is the national animal of Nepal?\n').strip().lower()
            question_three = input('What is the national color of Nepal?\n').strip().lower()

            # Initialize score
            score = 0

            # Check answers
            if question_one == answer_one:
                score += 1
            else:
                print(f'Incorrect! The correct answer is {answer_one}.')
            
            if question_two == answer_two:
                score += 1
            else:
                print(f'Incorrect! The correct answer is {answer_two}.')
            
            if question_three == answer_three:
                score += 1
            else:
                print(f'Incorrect! The correct answer is {answer_three}.')

            # Print final score
            print(f'Your score is {score}/3')

            # Ask if the user wants to play again
            play_again = input('Do you want to play again? (yes/no)\n').strip().lower()
            if play_again != 'yes':
                print('Thank you for playing!')
                break
        
        except Exception as e:
            print(f'An error occurred: {e}')
            print('Please try again.')

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print("\nProgram interrupted. Exiting safely...")
