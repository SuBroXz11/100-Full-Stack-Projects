from operations import load_flashcards, save_flashcards, display_menu, add_flashcard, quiz_user, show_all_flashcards

def main():
    """
    Main function to run the flashcard app.
    """
    flashcards = load_flashcards()
    
    while True:
        display_menu()
        choice = input("Enter your choice: ")
        
        if choice == '1':
            add_flashcard(flashcards)
        elif choice == '2':
            quiz_user(flashcards)
        elif choice == '3':
            show_all_flashcards(flashcards)
        elif choice == '4':
            save_flashcards(flashcards)
            print("Flashcards saved. Exiting...")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nProgram interrupted. Exiting safely...")
