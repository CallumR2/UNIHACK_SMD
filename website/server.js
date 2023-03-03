var SerialPort = require('serialport');
var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html'); 

const parsers = SerialPort.parsers
const parser = new parsers.Readline({
    delimeter: '\r\n'
})

const port = new SerialPort('device serial goes here', {
    baudRateL: 9600,
    dataBits: 8,
    paraity: 'none',
    stopBits: 1,
    flowControl: false
})

port.pipe(parser)

const app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end(index)
})

const io = require('socket.io').listen(app)

// Send Data
io.on('connection', (socket) => {
    socket.on('lights',function(data){
        console.log(data)
        port.write( data.status )
    })
})

// Receive Input
parser.on('data', (data) => {
    console.log(data)
    io.emit('data', data)
})

app.listen(3000)