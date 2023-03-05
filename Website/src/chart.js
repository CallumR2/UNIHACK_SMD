const chartData = {
    labels:[...Array(10).keys()],
    datasets:[{label:'Power', data:[]}]
}

// socket.on('data', (data) => {
//     console.log(data)
//     const temp = chartData.datasets[0].data.slice(0).concat({data:data, label:'Get Time or Smth'})
//     const chartData = temp.labels.map(l => l+1)
// })

const ctx = document.getElementById('voltChart')
new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        }
    }
})
