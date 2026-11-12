import requests
import calendar

def get_weather(city, month, country):

    geo_url = (
        "https://geocoding-api.open-meteo.com/v1/search"
    )
    print("GEO URL:", geo_url)
    geo_response = requests.get(
        geo_url,
        params={
            "name": city,
            "count": 1,
            "language": "en",
            "format": "json"
        }
    )
    geo_data = geo_response.json()
    location = geo_data.get("results", [])[0] if geo_data.get("results") else None
    if not location:
        return {
            "error": "City not found. Please check spelling and try again."
        }

    latitude = location.get("latitude") if location else None
    longitude = location.get("longitude") if location else None


    monthNum = int(month)
    daysInMonth = calendar.monthrange(2025, monthNum)[1]
    startDate = f"2025-{monthNum:02d}-01"
    endDate = f"2025-{monthNum:02d}-{daysInMonth:02d}"


    weather_url = (
        "https://archive-api.open-meteo.com/v1/archive"
    )

    weather_response = requests.get(
    weather_url,
    params={
    "latitude": latitude,
    "longitude": longitude,
    "start_date": startDate,
    "end_date": endDate,
    "daily": "temperature_2m_max,temperature_2m_min,precipitation_sum"
    }
    )

    weather_data = weather_response.json()
    daily = weather_data.get("daily")
    avgHigh = sum(daily.get("temperature_2m_max", [])) / len(daily.get("temperature_2m_max", [])) if daily.get("temperature_2m_max") else None
    avgHighF = avgHigh * 9 / 5 + 32 if avgHigh is not None else None
    avgLow = sum(daily.get("temperature_2m_min", [])) / len(daily.get("temperature_2m_min", [])) if daily.get("temperature_2m_min") else None
    avgLowF = avgLow * 9 / 5 + 32 if avgLow is not None else None
    avgPrecipitation = sum(daily.get("precipitation_sum", [])) / len(daily.get("precipitation_sum", [])) if daily.get("precipitation_sum") else None
    avgPrecipInches = avgPrecipitation / 25.4 if avgPrecipitation is not None else None

    monthName = calendar.month_name[monthNum]

    return {
        "city": city,
        "country": country,
        "month": monthName,
        "avgHigh": round(avgHighF, 1),
        "avgLow": round(avgLowF, 1),
        "avgPrecipitation": round(avgPrecipInches, 1)
    }

