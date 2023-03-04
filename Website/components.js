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

function change_mode() {
    console.log("Changed")
    const radioButtons = document.querySelectorAll('input[name="control_mode"]');
    control_div = document.getElementById('controls_div')
    if (radioButtons[0].checked) {
        document.getElementById('autoControls').style.display = 'none'
        document.getElementById('manualControls').style.display = 'block'
    }
    else {
        document.getElementById('manualControls').style.display = 'none'
        document.getElementById('autoControls').style.display = 'block'
    }
}

const getLocation = () => (
    new Promise((res, rej) => navigator.geolocation.getCurrentPosition(res, rej))
)

// const getLocation = () => (
//     navigator.geolocation.getCurrentPosition(() => document.getElementById())
// )


//        const url = `api.meteomatics.com/${dateNow}/t_2m:C/${pos}/json`

// const getLocation = () => {

//     const url = 'api.meteomatics.com/2023-03-04T00:00:00Z--2023-03-07T00:00:00Z:PT1H/t_2m:C/52.520551,13.461804/json'
//     return fetch(url, {
//         headers: {
//             'Authorization':'Basic' + ('monashuniversity_hay:3bNkBav5L1').toString('base64')
//         }
//     }).then(response => response.json()).then(json => console.log(json))
// }

function handle_time_input() {
    document.getElementById('time_input') .disabled = document.getElementById("time_check").checked
    set_current_time()
}



function set_current_time() {
    time_input = document.getElementById('time_input')
    if (document.getElementById("time_check").checked) {
        const current = new Date()
        const tzoff = current.getTimezoneOffset() * 60000
        const ISO_time = new Date(current - tzoff).toISOString().slice(0, -3)
        time_input.value = ISO_time
    }
}

if (typeof window !== 'undefined') {
    window.onload = () => {
        window.setInterval(set_current_time, 1000)
        
    }
}
