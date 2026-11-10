"""Use Geoapify Places API.

Pros:

Generous free tier
Easier setup
Returns museums, parks, attractions, restaurants"""

from flask import Blueprint, request, jsonify
from services.activities_svc import get_activities

activities_bp = Blueprint(
    "activities",
    __name__,
    url_prefix="/api/activities"

)

@activities_bp.route("")
@activities_bp.route("/")
def activities():

    city = request.args.get("city")
    country = request.args.get("country")
    category = request.args.get("category")

    data = get_activities(city, country, category)

    return jsonify(data)