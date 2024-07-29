const Websocket = require('ws')
const wss = new Websocket.Server({ port: 8080 })

wss.on('connection', function connection(ws) {
	console.log(`有人进入聊天室`)
	ws.on('message', (data) => {
		ws.send(data + '服务器收到了')
	})
	ws.on('close', () => {
		console.log('有人离开聊天室')
	})
})
