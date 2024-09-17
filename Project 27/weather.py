import json, sys, requests

# Command line arguments validation
if len(sys.argv) < 2:
    print("Usage: weather.py location")
    sys.exit()

# taking location as a single string
location = ' '.join(sys.argv[1:])

# use the json data from open weather API using requests module
url = "http://api.openweathermap.org/data/2.5/weather?q=%s&units=metric&appid=ce37c6f3be2e5f7871086708ccbf2db5" % location

response = requests.get(url)
response.raise_for_status()

weather_data=json.loads(response.text)

data = weather_data['weather']

# Output

print('Current weather in %s:' % (location))
print(data[0]['main'], "-", data[0]['description'])

temperature = weather_data['main']
print(f"Temperature is: {temperature['temp']}°C")

