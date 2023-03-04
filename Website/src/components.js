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

const handleSunDirect = () => {
    document.getElementById('azimuth').value = sunDirections(
        document.getElementById('apiTokenDiv').value,
        document.getElementById('locationDiv').value,
        document.getElementById('time_input').value
    )
}

const sunDirections = async (apiTok,location,dateTime) => {
    const url = `api.meteomatics.com/${dateTime}/sun_azimuth:d/${location}/json?access_token=${apiTok}`
    fetch(url).then(res => res.json()).then(response => console.log(response))
}

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

const getAPILogin = async () => (
    fetch('https://login.meteomatics.com/api/v1/token', {
        method: 'GET', headers: {'Authorization':'Basic ' + window.btoa('monashuniversity_hay:3bNkBav5L1')}
    }).then((resp) => resp.json()
    ).then((data) => data.access_token
    ).catch((err) => console.log('Signin Error'))
)