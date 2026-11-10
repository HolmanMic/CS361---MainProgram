# Weather


from flask import Blueprint, request, jsonify
from services.weather_svc import get_weather

weather_bp = Blueprint(
    "weather",
    __name__,
    url_prefix="/api/weather"
)

@weather_bp.route("/")
@weather_bp.route("")
def weather():

    city = request.args.get("city")
    month = request.args.get("month")
    country = request.args.get("country")

    data = get_weather(city, month, country)

    return jsonify(data)
