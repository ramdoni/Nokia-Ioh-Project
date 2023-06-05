var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};

var chartColors = window.chartColors;
var color = Chart.helpers.color;
var config = {
    data: {
        datasets: [{
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
            ],
            backgroundColor: [
                color(chartColors.red).alpha(0.5).rgbString(),
                color(chartColors.orange).alpha(0.5).rgbString(),
                color(chartColors.yellow).alpha(0.5).rgbString(),
                color(chartColors.green).alpha(0.5).rgbString(),
                color(chartColors.blue).alpha(0.5).rgbString(),
            ],
            label: 'My dataset' // for legend
        }],
        labels: [
            "Red",
            "Orange",
            "Yellow",
            "Green",
            "Blue"
        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: 'Chart.js Polar Area Chart'
        },
        scale: {
            ticks: {
                beginAtZero: true
            },
            reverse: false
        },
        animation: {
            animateRotate: false,
            animateScale: true
        }
    }
};

window.onload = function() {
    var ctx = document.getElementById("chart-area");
    window.myPolarArea = Chart.PolarArea(ctx, config);
};