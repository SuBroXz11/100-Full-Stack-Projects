import pyshorteners
import pyperclip

# User input for the Url
url = input("Enter the URL: ")

# Function to shorten the url
def shorten_url(url):
    short_url = pyshorteners.Shortener()
    return short_url.tinyurl.short(url)

shortened_url=shorten_url(url)

#output
print(f"The shortened version of your URL would be: \n {shortened_url}")

# Copy the shortened URL to the clipboard
pyperclip.copy(shortened_url)
print("The shortened URL has been copied to the clipboard.")