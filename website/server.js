var SerialPort = require('serialport');
var http = require('http');
var fs = require('fs')

// const parsers = SerialPort.parsers
// const parser = new parsers.Readline({
//     delimeter: '\r\n'
// })

// const port = new SerialPort('device serial goes here', {
//     baudRateL: 9600,
//     dataBits: 8,
//     paraity: 'none',
//     stopBits: 1,
//     flowControl: false
// })

// port.pipe(parser)



// const io = require('socket.io').listen(app)

// // Send Data
// io.on('connection', (socket) => {
//     socket.on('lights',function(data){
//         console.log(data)
//         port.write( data.status )
//     })
// })

// // Receive Input
// parser.on('data', (data) => {
//     console.log(data)
//     io.emit('data', data)
// })


const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(__dirname + '/src'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(8000, () => {
    console.log(`Server is running on http://localhost:8000`)
})