def main():
    tasks = []
    
    while True:
        # Header
        print("\n===== To-Do List =====")
        
        # Display the operations
        print("1. Add Task")
        print("2. View Tasks")
        print("3. Delete Tasks")
        print("4. Exit")

        # Input from the user
        choice = input('Enter choice (1/2/3/4): ')
        
        # Add Task
        if choice == '1':
            task = input("Enter the task: ")
            tasks.append(task)
            print(f"Task '{task}' added successfully!")

        # View Tasks
        elif choice == '2':
            if not tasks:
                print("No tasks available.")
            else:
                print("\nYour Tasks:")
                for i, task in enumerate(tasks, 1):
                    print(f"{i}. {task}")

        # Delete Task
        elif choice == '3':
            if not tasks:
                print("No tasks to delete.")
            else:
                try:
                    task_number = int(input("Enter the task number to delete: "))
                    if 1 <= task_number <= len(tasks):
                        removed_task = tasks.pop(task_number - 1)
                        print(f"Task '{removed_task}' deleted successfully!")
                    else:
                        print("Invalid task number.")
                except ValueError:
                    print("Please enter a valid number.")
        
        # Exit the program 
        elif choice == '4':
            print('Exiting the To-Do List Application... Goodbye!')
            break

        # Invalid Input Check
        else:
            print("Invalid choice. Please select a valid option (1/2/3/4).")

if __name__ == "__main__":
    main()
