import requests

def get_weather(city, month):

    return {
        "city": city,
        "month": month,
        "avgHigh": 54,
        "avgLow": 39,
        "humidity": 58,
        "precipitation": 2.3,
        "condition": "Partly Cloudy",
        "sunshineHours": 6.5
    }