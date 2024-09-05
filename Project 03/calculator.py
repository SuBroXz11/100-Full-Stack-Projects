# Header 
print('Calculator')
print('-' * 10)
print('')

while True:
    # Display the operations
    print('Select operation:')
    print('1. Addition')
    print('2. Subtraction')
    print('3. Multiplication')
    print('4. Division')
    print('5. Exit')

    # Input from the user
    choice = input('Enter choice(1/2/3/4/5): ')
    
    # Check for exit
    if choice == '5':
        print('Exiting the calculator... Goodbye!')
        break

    # Check if the choice is valid
    if choice in ['1', '2', '3', '4']:
        num1 = float(input('Enter first number: '))
        num2 = float(input('Enter second number: '))

        try:
            if choice == '1':
                print(f'The result is: {num1 + num2}\n')
            elif choice == '2':
                print(f'The result is: {num1 - num2}\n')
            elif choice == '3':
                print(f'The result is: {num1 * num2}\n')
            elif choice == '4':
                # Division with exception handling
                print(f'The result is: {num1 / num2}\n')
        except ZeroDivisionError:
            print('Error! Division by zero is not allowed.\n')
    else:
        print('Invalid input!\n')
