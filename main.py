from flask import Flask, render_template, request

app: Flask = Flask(__name__, static_folder='./static')
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
botMessages: dict = {
    'hello': 'Hello my friend',
    'bello': 'fuck u',
    'danil': 'debil',
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
