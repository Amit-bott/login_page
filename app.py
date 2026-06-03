from flask import Flask, request, render_template
import mysql.connector

app = Flask(__name__)

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Amit_69_/",
    database="login_db"
)

@app.route("/")
def home():
    return render_template("1.html")

@app.route("/register", methods=["POST"])
def register():
    nickname = request.form["nickname"]
    real_name = request.form["real_name"]
    password = request.form["password"]

    cursor = db.cursor()

    sql = """
    INSERT INTO users
    (nickname, real_name, password)
    VALUES (%s,%s,%s)
    """

    cursor.execute(sql, (nickname, real_name, password))
    db.commit()

    return "Registration Successful"

if __name__ == "__main__":
    app.run(debug=True)

    