import requests

API_KEY = "rc_live_69b2dbee9250453098b76273c2b9bed7"

def get_country_info(country):

    url = (
        f"https://api.restcountries.com/countries/v5?q={country}"
    )

    response = requests.get(
        url,
        headers={
            "Authorization": f"Bearer {API_KEY}"
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