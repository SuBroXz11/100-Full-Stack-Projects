import os

# Dictionary to store all contacts
contact = {}

# Get the directory where the script is located
current_directory = os.path.dirname(os.path.abspath(__file__))
contact_file_path = os.path.join(current_directory, "contacts.txt")

# Function to load contacts from the file
def load_contacts():
    if os.path.exists(contact_file_path):
        with open(contact_file_path, "r") as file:
            for line in file:
                name, phone = line.strip().split(":")
                contact[name] = phone

# Function to save contacts to the file
def save_contacts():
    with open(contact_file_path, "w") as file:
        for index, (name, phone) in enumerate(contact.items(), start=1):
            file.write(f"{index}. {name}:{phone}\n")  # Numbering in the file

# Function to display all contacts in a formatted way
def display_contact():
    print("{:<3} {:<20} {:<15}".format("No", "Name", "Contact Number"))
    print("-" * 38)
    for index, (name, phone) in enumerate(contact.items(), start=1):
        print("{:<3} {:<20} {:<15}".format(index, name, phone))

load_contacts()  # Load all contacts from the file at the start of the program
# Main program loop
while True:
    try:
        # User choice prompt
        print('')
        user_choice = int(input("1. Add new contact \n2. Search contact \n3. Display all contacts \n4. Edit contact \n5. Exit\n Enter your choice: "))

        if user_choice == 5:
            # Exit the program
            print('Exiting the program...')
            save_contacts()  # Save contacts to the file before exiting
            break

        elif user_choice == 1:
            # Add a new contact
            name = input("Enter the contact name: ")
            phone_number = input("Enter phone number: ")
            contact[name] = phone_number
            print('Contact added successfully!')
            save_contacts()  # Save after adding

        elif user_choice == 2:
            # Search for a contact by name
            search_name = input('Enter the contact name: ')
            if search_name in contact:
                print(f"Contact name: {search_name} \nPhone number: {contact[search_name]}")
            else:
                print("Contact not found")

        elif user_choice == 3:
            # Display all contacts
            if not contact:
                print("No contacts found!")
            else:
                display_contact()

        elif user_choice == 4:
            # Edit an existing contact
            edit_contact = input("Enter the contact name you want to edit: ")
            if edit_contact in contact:
                new_contact_name = input("Enter the new contact name: ")
                phone = input("Enter the new phone number: ")
                if new_contact_name != edit_contact:
                    # Keep the same order and update name and phone if necessary
                    contact[new_contact_name] = phone
                    del contact[edit_contact]
                else:
                    contact[edit_contact] = phone
                print('Contact updated successfully!')
                save_contacts()  # Save after editing
                display_contact()
            else:
                print("The given name is not found in the contact book!")

        else:
            print("Invalid choice! Please enter a number between 1 and 5.")

    except ValueError:
        print("Error: Please enter a valid number.")
    except KeyboardInterrupt:
        print("\nProgram interrupted. Exiting safely...")
        save_contacts()  # Save contacts before forced exit
        break
