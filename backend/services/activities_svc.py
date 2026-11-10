import requests
from routes.config import GEOAPIFY_API_KEY



def get_activities(city, country, category):

    geo_url = (
        "https://geocoding-api.open-meteo.com/v1/search"
    )
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
    print (geo_data)

    location = geo_data.get("results", [])[0] if geo_data.get("results") else None

    latitude = location.get("latitude") if location else None
    longitude = location.get("longitude") if location else None

    placesURL = "https://api.geoapify.com/v2/places"
    placesResponse = requests.get(
        placesURL,
        params={
            "categories": category,
            "filter": f"circle:{longitude},{latitude},5000",
            "limit": 10,
            "apiKey": GEOAPIFY_API_KEY
}
    )

    placesData = placesResponse.json()

    results = []

    for place in placesData.get("features", []):
        properties = place.get("properties", {})
        results.append({
            "name": properties.get("name", "Unknown"),
            "address": properties.get("formatted", "Unknown")
        })

    return {
        "city": city,
        "country": country,
        "category": category,
        "results": results
    }
