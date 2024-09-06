import requests

# function to convert currency
def convert_currency(amount, to_currency, from_currency):
    try:
        # API
        url = f"https://api.exchangerate-api.com/v4/latest/{from_currency}"
        
        # making the request to the API
        response = requests.get(url)
        
        # If the request fails, raise an exception
        response.raise_for_status()
        
        # extracting the data
        data = response.json()

        # extracting the conversion rate
        if to_currency in data['rates']:
            exchange_rate = data['rates'][to_currency]
        else:
            raise ValueError(f"Invalid currency code: {to_currency}")

        # calculating the converted amount
        converted_amount = amount * exchange_rate
        return converted_amount

    except requests.exceptions.RequestException as e:
        print(f"Error while fetching data from the API: {e}")
        return None

    except ValueError as ve:
        print(f"Error: {ve}")
        return None

    except KeyError:
        print("Invalid currency code. Please check your input.")
        return None


# main function to handle user input and looping
def currency_converter():
    while True:
        try:
            print("\n--- Currency Converter ---")
            # Ask the user for input
            print("Enter '0' at any point to exit.")
            
            amount = input("Enter the amount: ")
            if amount == '0':
                print("Exiting the program...")
                break
            amount = float(amount)

            from_currency = input("Enter the currency you want to convert from (e.g., USD): ").upper()
            if from_currency == '0':
                print("Exiting the program...")
                break

            to_currency = input("Enter the currency you want to convert to (e.g., NPR): ").upper()
            if to_currency == '0':
                print("Exiting the program...")
                break

            # Convert the currency
            converted_amount = convert_currency(amount, to_currency, from_currency)

            # Display the result if conversion is successful
            if converted_amount is not None:
                print(f"\n{amount} {from_currency} is equal to {converted_amount:.2f} {to_currency}")
        except ValueError:
            print("Invalid input. Please enter numeric values for the amount.")
        except KeyboardInterrupt:
            print("\nProgram interrupted. Exiting safely...")
            break


# Start the currency converter
currency_converter()
