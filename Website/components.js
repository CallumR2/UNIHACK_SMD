const handleMovCheck = () => (
    Array.from(document.getElementsByClassName('sliders')).forEach(s => (
        document.getElementById('movementCheck').checked ? s.disabled = false : s.disabled = true
    ))
)

const handleXServo = () => {
    // socket.emit()
    console.log(document.getElementById('xDeg').value)
}
const handleYServo = () => {
    if (document.getElementById('movementCheck').checked) {
        socket.emit()
        console.log(document.getElementById('yDeg').value)
    }
}