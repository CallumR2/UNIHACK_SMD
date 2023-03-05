const chartData = {
    labels:[...Array(10).keys()],
    datasets:[{label:'Power', data:[1.3,1.4,1.6,1.3,1.2,1.1,1.4,1.6,1.7,1.4]}]
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
