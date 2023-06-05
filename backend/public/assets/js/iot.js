$(function () {
    "use strict";
    getMorris('donut', 'donut_chart');
    getMorris('bar', 'bar_chart');
});

function getMorris(type, element) {
    if (type === 'bar') {
        Morris.Bar({
            element: element,
            data: [{
                x: 'Mon',
                y: 3,
                z: 7
            }, {
                x: 'Tue',
                y: 3.5,
                z: 6
            }, {
                x: 'Wed',
                y: 3.25,
                z: 5.50
            }, {
                x: 'Thu',
                y: 2.75,
                z: 8
            }, {
                x: 'Fri',
                y: 3.80,
                z: 9.50
            }, {
                x: 'Sat',
                y: 7,
                z: 9.70
            }, {
                x: 'Sun',
                y: 8.50,
                z: 9.55
            }],

            xkey: 'x',
            ykeys: ['y', 'z'],
            labels: ['Day', 'Night'],
            barColors: ['#b0dd91', '#f7bbc7'],
        });
    } else if (type === 'donut') {
        Morris.Donut({
            element: element,
            data: [{
                label: 'Night',
                value: 70
            }, {
                label: 'Day',
                value: 30
            }],
            colors: ['#f7bbc7', '#b0dd91'],
            formatter: function (y) {
                return y + '%'
            }
        });
    }
}

$('#sparkline1').sparkline([100, 130, 150, 140, 120, 150, 140, 160, 130, 110], {
    type: 'line',
    width: '100%',
    height: '100',
    chartRangeMax: 50,
    resize: true,
    lineColor: '#51aaed',
    fillColor: '#60bafd',
    highlightLineColor: 'rgba(0,0,0,.1)',
    highlightSpotColor: 'rgba(0,0,0,.2)',
});

$('#sparkline2').sparkline([120, 170, 200, 180, 160, 180, 190, 200, 170, 150], {
    type: 'line',
    width: '100%',
    height: '100',
    chartRangeMax: 50,
    resize: true,
    lineColor: '#51aaed',
    fillColor: '#60bafd',
    highlightLineColor: 'rgba(0,0,0,.1)',
    highlightSpotColor: 'rgba(0,0,0,.2)',
});

$('#sparkline3').sparkline([80, 120, 140, 120, 140, 100, 135, 175, 155, 110], {
    type: 'line',
    width: '100%',
    height: '100',
    chartRangeMax: 50,
    resize: true,
    lineColor: '#51aaed',
    fillColor: '#60bafd',
    highlightLineColor: 'rgba(0,0,0,.1)',
    highlightSpotColor: 'rgba(0,0,0,.2)',
});