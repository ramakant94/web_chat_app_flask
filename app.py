from flask import Flask,jsonify,request
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'f87by4yfb'
socketio = SocketIO(app)


@app.route('/')
def index():
	return app.send_static_file('index.html')


@socketio.on('msg')
def handleMsg(data):
	socketio.emit('push',data,broadcast=True,include_self=False)





if  __name__ == "__main__":
	socketio.run(app)