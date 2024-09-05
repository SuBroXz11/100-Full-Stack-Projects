contact = {}

def display_contact():
    print("{:<3} {:<20} {:<15}".format("No", "Name", "Contact Number"))
    print("-" * 38)
    for index, (name, phone) in enumerate(contact.items(), start=1):
        print("{:<3} {:<20} {:<15}".format(index, name, phone))

while True:
    print('')
    user_choice = int(input("1. Add new contact \n2. Search contact \n3. Display all contact \n4. Edit contact \n5. Exit\n Enter your choice: "))
    
    if user_choice == 5:
        print('Exiting the program...')
        break
    
    if user_choice == 1:
        name = input("Enter the contact name: ")
        phone_number = input("Enter phone number: ")
        contact[name] = phone_number
        print('Contact added successfully!')
        
    elif user_choice == 2:
        search_name= input('Enter the contact name: ')
        if search_name in contact:
            print(f"Contact name: {search_name} \nPhone number: {contact[search_name]}")
        else:
            print("Contact not found")
    
    elif user_choice == 3:
        if not contact:
            print("No contacts found!")
        else:
            display_contact()
            
    elif user_choice == 4:
        edit_contact = input("Enter the contact name you want to edit: ")
        if edit_contact in contact:
            new_contact_name=input("Enter the new contact name: ")
            phone=input("Enter the new phone number: ")
            contact[new_contact_name]=phone
             # Remove old contact if name changed
            if new_contact_name != edit_contact:
                del contact[edit_contact]
            print('Contact updated successfully!')
            display_contact()
        else:
            print("The given name is not found in the contact book!")

    else:
        print("Error!")
        
        

