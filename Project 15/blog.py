from menu import Menu

def run_blog():
    menu = Menu()

    while True:
        print("\nCommand Line Blog")
        print("1. Create Post")
        print("2. View Posts")
        print("3. Update Post")
        print("4. Delete Post")
        print("5. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            menu.create_post()
        elif choice == "2":
            menu.view_posts()
        elif choice == "3":
            menu.update_post()
        elif choice == "4":
            menu.delete_post()
        elif choice == "5":
            print("Exiting the blog...")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    try:
        run_blog()
    except KeyboardInterrupt:
        print("\nProgram interrupted. Exiting safely...")
