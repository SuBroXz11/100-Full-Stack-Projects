# main.py

from expense_tracker import Expense, ExpenseTracker

def main():
    tracker = ExpenseTracker()  

    while True:
        print("\n--- Expense Tracker Menu ---")
        print("1. Add Expense")
        print("2. Remove Expense")
        print("3. View Expenses")
        print("4. Total Expenses")
        print("5. Exit")
        
        try:
            choice = int(input("Enter your choice: "))
            
            if choice == 1:
                date = input("Enter the date (YYYY-MM-DD): ")
                try:
                    amount = float(input("Enter the amount: "))
                except ValueError:
                    print("Invalid amount. Please enter a number.")
                    continue
                description = input("Enter the description: ")
                
                expense = Expense(date, amount, description)
                tracker.add_expense(expense)
                print("Expense added successfully!")
                
            elif choice == 2:
                tracker.view_expenses()
                try:
                    index = int(input("Enter the index of the expense to remove: ")) - 1
                    tracker.remove_expense(index)
                except ValueError:
                    print("Invalid index. Please enter a number.")
                except IndexError:
                    print("Expense not found. Please check the index.")
                    
            elif choice == 3:
                tracker.view_expenses()
                
            elif choice == 4:
                tracker.total_expenses()
                
            elif choice == 5:
                print("Exiting the program. Goodbye!")
                break
                
            else:
                print("Invalid choice. Please choose a valid option from the menu.")
                
        except ValueError:
            print("Please enter a valid number for the menu option.")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nProgram interrupted. Exiting safely...")
