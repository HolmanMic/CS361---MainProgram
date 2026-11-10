import requests
from routes.config import REST_COUNTRIES_API_KEY


def get_country_info(country):

    url = (
        f"https://api.restcountries.com/countries/v5?q={country}"
    )

    response = requests.get(
        url,
        headers={
            "Authorization": f"Bearer {REST_COUNTRIES_API_KEY}"
        }
    )

    data = response.json()

    countryData = data["data"]["objects"][0]

    return {
        "country": countryData["names"]["common"],
        "capital": countryData["capitals"][0]["name"],
        "currency": countryData["currencies"][0]["name"],
        "language": countryData["languages"][0]["name"],
        "flag": countryData["flag"]["url_png"],
    }