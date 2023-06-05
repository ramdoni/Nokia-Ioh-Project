$(function() {
    "use strict";
    MorrisArea();
});
//======
function MorrisArea() {

     
    Morris.Area({
        element: 'm_area_chart',
        data: [{
                period: '2011',
                Tasks1: 22,
                Tasks2: 5,
                Tasks3: 55
            },{
                period: '2012',
                Tasks1: 33,
                Tasks2: 11,
                Tasks3: 155
            },{
                period: '2013',
                Tasks1: 17,
                Tasks2: 23,
                Tasks3: 55
            },{
                period: '2014',
                Tasks1: 55,
                Tasks2: 17,
                Tasks3: 55
            }, {
                period: '2015',
                Tasks1: 78,
                Tasks2: 98,
                Tasks3: 140
            }, {
                period: '2016',
                Tasks1: 59,
                Tasks2: 78,
                Tasks3: 85
            },{
                period: '2017',
                Tasks1: 170,
                Tasks2: 156,
                Tasks3: 120
            }
        ],
        xkey: 'period',
        ykeys: ['Tasks1', 'Tasks2', 'Tasks3'],
        labels: ['Tasks1', 'Tasks2', 'Tasks3'],
        pointSize: 2,
        fillOpacity: 0,
        pointStrokeColors: ['#0e9be2', '#ab7df6', '#7cac25'],
        behaveLikeLine: true,
        gridLineColor: '#f6f6f6',
        lineWidth: 1,
        hideHover: 'auto',
        lineColors: ['#0e9be2', '#ab7df6', '#7cac25'],
        resize: true
    
    });
}

// progress bars
$('.progress .progress-bar').progressbar({
    display_text: 'none'
});

$('.sparkline-pie').sparkline('html', {
    type: 'pie',
    offset: 90,
    width: '155px',
    height: '155px',
    sliceColors: ['#02b5b2', '#445771', '#ffcd55']
})

$('.sparkbar').sparkline('html', { type: 'bar' });

