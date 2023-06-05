$(function() {
    "use strict";
    MorrisBarChart();

});
//======
function MorrisBarChart() {
    Morris.Bar({
        element: 'm_bar_chart',
        data: [{
            y: '2011',
            a: 80,
            b: 56,
            c: 89
        }, {
            y: '2012',
            a: 75,
            b: 65,
            c: 38
        }, {
            y: '2013',
            a: 59,
            b: 30,
            c: 37
        }, {
            y: '2014',
            a: 75,
            b: 65,
            c: 40
        }, {
            y: '2015',
            a: 55,
            b: 40,
            c: 45
        }, {
            y: '2016',
            a: 75,
            b: 65,
            c: 40
        }, {
            y: '2017',
            a: 87,
            b: 88,
            c: 36
        }],
        xkey: 'y',
        ykeys: ['a', 'b', 'c'],
        labels: ['A', 'B', 'C'],
        barColors: ['#2390be', '#81ccbb', '#c7e9b6'],
        hideHover: 'auto',
        gridLineColor: '#eef0f2',
        resize: true
    });
}


$('.sparkline-pie').sparkline('html', {
    type: 'pie',
    offset: 90,
    width: '155px',
    height: '155px',
    sliceColors: ['#02b5b2', '#445771', '#ffcd55']
})

$('.sparkbar').sparkline('html', { type: 'bar' });

