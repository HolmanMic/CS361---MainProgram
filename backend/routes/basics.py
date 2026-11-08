from flask import Blueprint, request, jsonify
from services.basics_svc import get_country_info

basics_bp = Blueprint(
    "basics",
    __name__,
    url_prefix="/api/basics"
)

@basics_bp.route("")
def basics():

    country = request.args.get("country")

    data = get_country_info(country)

    return jsonify(data)