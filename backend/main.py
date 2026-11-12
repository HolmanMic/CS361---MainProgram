from flask import Flask
from flask_cors import CORS


from routes.weather import weather_bp
from routes.activities import activities_bp
from routes.basics import basics_bp
from routes.favorites import favorites_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(weather_bp)
app.register_blueprint(activities_bp)
app.register_blueprint(basics_bp)
app.register_blueprint(favorites_bp)

print (app.url_map)

if __name__ == "__main__":
    app.run(debug=True)
