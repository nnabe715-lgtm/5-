from flask import Flask, render_template

app = Flask(__name__)
app.secret_key = 'super_secret_key_for_5th_grade'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/register')
def register():
    return render_template('register.html')

@app.route('/attendance')
def attendance():
    return render_template('attendance.html')

if __name__ == '__main__':
    app.run(debug=True)