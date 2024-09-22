import requests
from bs4 import BeautifulSoup
import csv
import os

def fetch_and_save_to_csv(url, csv_filename):
    # Fetch webpage content
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Extracting specific data with proper checks
    title = soup.find('h1').text.strip() if soup.find('h1') else 'No Title Found'
    date = soup.find('time').text.strip() if soup.find('time') else 'No Date Found'
    
    # Extract all paragraphs and handle the case where there might be none
    paragraphs = [p.text.strip() for p in soup.find_all('p')]
    if not paragraphs:
        paragraphs = ['No Content Found']

    # Get the current project directory and construct the full file path
    current_directory = os.path.dirname(__file__)
    csv_path = os.path.join(current_directory, csv_filename)
    
    # Save the extracted data to a CSV file
    with open(csv_path, 'w', newline='', encoding='utf-8') as csvfile:
        writer = csv.writer(csvfile)
        # Writing the headers
        writer.writerow(['Title', 'Date', 'Paragraphs'])
        # Writing the extracted content
        writer.writerow([title, date, ' '.join(paragraphs)])

# URL of the page to scrape
url = "https://www.onlinekhabar.com/2024/09/1542879/nepal-police-won-the-kava-womens-club-volleyball-championship-title"

# CSV file name (file will be saved inside the current project directory)
csv_filename = "webpage_data.csv"

# Fetch and save data to CSV
fetch_and_save_to_csv(url, csv_filename)
