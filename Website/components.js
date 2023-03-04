const handleMovCheck = () => (
    Array.from(document.getElementsByClassName('sliders')).forEach(s => (
        document.getElementById('movementCheck').checked ? s.disabled = false : s.disabled = true
    ))
)
function change_mode(){
    console.log("Changed")
    const radioButtons = document.querySelectorAll('input[name="control_mode"]');
    control_div = document.getElementById('controls_div')
    if (radioButtons[0].checked){
        
        control_div.innerHTML = `<input class="sliders" onmouseup="handleXServo()" id="xDeg" type="range" min="0"
        max="255"></input>
    <input class="sliders"onmouseup="handleYServo()" id="yDeg" type="range" min="0"
        max="255"></input>`
    }
    else{  
        control_div.innerHTML = `<div><input id="time_input" type="datetime-local"></input>
        <input type="button" onclick='set_current_time()' value='Set to current Time'></input>
        </div>`
        
    }
}

function set_current_time(){
    const current = new Date()
    const tzoff = current.getTimezoneOffset() * 60000
    const ISO_time = new Date(current - tzoff).toISOString().slice(0,-1)
    document.getElementById('time_input').value = ISO_time
}
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