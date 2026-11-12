from flask import Blueprint, request, jsonify

favorites_bp = Blueprint(
    "favorites",
    __name__,
    url_prefix="/api/favorites"
)

favorites = []

@favorites_bp.route("/", methods=["GET"])
def get_favorites():
    return jsonify(favorites)

@favorites_bp.route("/", methods=["POST"])
def add_favorite():
    data = request.get_json()
    if data not in favorites:
        favorites.append(data)
    return jsonify(favorites), 201

@favorites_bp.route("/", methods=["DELETE"])
def remove_favorite():
    data = request.get_json()

    print("Removing favorite:", data)
    print("Before:", favorites)
    favorites[:] = [f for f in favorites if f != data]
    print("After:", favorites)
    return jsonify(favorites)