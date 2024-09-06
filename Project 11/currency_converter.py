import requests

# function to convert currency

def convert_currency(amount, to_currency, from_currency):
    
    #API
    url = f"https://api.exchangerate-api.com/v4/latest/{from_currency}"
    
    # making the request to the api
    response=requests.get(url)
    data=response.json()
    
    # extracting the conversion rate
    exchange_rate = data['rates'][to_currency]
    
    print(exchange_rate)
    
    # calculating the converted amount
    converted_amount = amount * exchange_rate
    
    return converted_amount

def cur():
    amount = float(input("Enter the amount: "))
    from_currency = input("Enter the currency you want to convert from: ")
    to_currency = input("Enter the currency you want to convert to: ")
    cc=convert_currency(amount, to_currency, from_currency)
    print(f"{amount} {from_currency} is equal to {cc} {to_currency}")

cur()