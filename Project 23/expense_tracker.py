import os

class Expense:
    def __init__(self, date, amount, description):
        self.description = description
        self.date = date
        self.amount = amount

class ExpenseTracker:
    def __init__(self):
        self.expenses = []
        self.file_path = os.path.join(os.path.dirname(__file__), 'expenses.txt')
        self.load_expenses()  # Load expenses when initializing
    
    def add_expense(self, expense):
        self.expenses.append(expense)
        self.save_expenses()  # Save expenses after adding
    
    def remove_expense(self, index):
        if 0 <= index < len(self.expenses):
            del self.expenses[index]
            self.save_expenses()  # Save expenses after removing
            print("Expense Removed Successfully!")
        else:
            print("No expenses Found!")
    
    def view_expenses(self):
        if len(self.expenses) == 0:
            print('No expense found.')
        else:
            print("Expense List: ")
            for i, expense in enumerate(self.expenses, start=1):
                print(f"{i}. Date: {expense.date}, Description: {expense.description}, Amount: {expense.amount}")
                
    def total_expenses(self):
        total_expense = sum(expense.amount for expense in self.expenses)
        print(f"Total Expenses: ${total_expense:.2f}")
        
    def save_expenses(self):
        """Save expenses to expenses.txt file"""
        with open(self.file_path, 'w') as file:
            for expense in self.expenses:
                file.write(f"{expense.date},{expense.amount},{expense.description}\n")
        print(f"Expenses saved to {self.file_path}")  
    
    def load_expenses(self):
        """Load expenses from expenses.txt if it exists"""
        if os.path.exists(self.file_path):
            with open(self.file_path, "r") as file:
                for line in file:
                    date, amount, description = line.strip().split(',')
                    self.expenses.append(Expense(date, float(amount), description))
        else:
            print("No previous expenses found. Starting fresh.")
