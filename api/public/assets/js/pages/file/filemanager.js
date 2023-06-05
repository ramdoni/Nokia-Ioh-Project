
$(function() {
    "use strict";
    MorrisArea();
});
function MorrisArea() {
    Morris.Area({
        element: 'area_chart',
        data: [{
                period: '2011',
                Documents: 0,
                Media: 0,
                Images: 7
            }, {
                period: '2012',
                Documents: 22,
                Media: 12,
                Images: 5
            }, {
                period: '2013',
                Documents: 10,
                Media: 1,
                Images: 23
            }, {
                period: '2014',
                Documents: 27,
                Media: 12,
                Images: 2
            }, {
                period: '2015',
                Documents: 17,
                Media: 9,
                Images: 26
            }, {
                period: '2016',
                Documents: 39,
                Media: 51,
                Images: 9
            }, {
                period: '2017',
                Documents: 20,
                Media: 9,
                Images: 21
            }

        ],
        lineColors: ['#0E9BE2', '#AB7DF6', '#7CAC25'],
        xkey: 'period',
        ykeys: ['Documents', 'Media', 'Images'],
        labels: ['Documents', 'Media', 'Images'],
        pointSize: 2,
        lineWidth: 1,
        resize: true,
        fillOpacity: 0.2,
        behaveLikeLine: true,
        gridLineColor: '#d6d6d6',
        hideHover: 'auto'
    });
}

// progress bars
$('.progress .progress-bar').progressbar({
    display_text: 'none'
});