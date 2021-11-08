from flask import Flask, render_template, request

app: Flask = Flask(__name__)

botMessages: dict = {
    'hello': 'Hello my friend',
    'bello': 'fuck u',
}

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/message', methods=['POST'])
def message():
    msg: str = request.form.get('message')
    res: str = botMessages.get(msg, 'я такого не знаю')
    return res


if __name__ == '__main__':
    app.run(debug=True)
