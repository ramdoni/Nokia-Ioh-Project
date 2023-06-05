$(function() {
    "use strict";
    MorrisArea();
    MorrisLineChart();
    MorrisDonutChart();
    MorrisBarChart();
});

// Morris-chart
function MorrisArea() {
    Morris.Area({
        element: 'm_area_chart',
        data: [{
                period: '2011',
                iphone: 45,
                ipad: 75,
                itouch: 18
            }, {
                period: '2012',
                iphone: 130,
                ipad: 110,
                itouch: 82
            }, {
                period: '2013',
                iphone: 80,
                ipad: 60,
                itouch: 85
            }, {
                period: '2014',
                iphone: 78,
                ipad: 205,
                itouch: 135
            }, {
                period: '2015',
                iphone: 180,
                ipad: 124,
                itouch: 140
            }, {
                period: '2016',
                iphone: 105,
                ipad: 100,
                itouch: 85
            },
            {
                period: '2017',
                iphone: 210,
                ipad: 180,
                itouch: 120
            }
        ],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 2,
        fillOpacity: 0,
        pointStrokeColors: ['#2cbfb7', '#5dcef6', '#c0d0d6'],
        behaveLikeLine: true,
        gridLineColor: '#eeeeee',
        lineWidth: 1,
        hideHover: 'auto',
        lineColors: ['#2cbfb7', '#5dcef6', '#c0d0d6'],
        resize: true

    });
    Morris.Area({
        element: 'm_area_chart2',
        data: [{
                period: '2012',
                SiteA: 0,
                SiteB: 10,

            }, {
                period: '2013',
                SiteA: 106,
                SiteB: 71,

            }, {
                period: '2014',
                SiteA: 68,
                SiteB: 41,

            }, {
                period: '2015',
                SiteA: 89,
                SiteB: 285,

            }, {
                period: '2016',
                SiteA: 185,
                SiteB: 104,

            }, {
                period: '2017',
                SiteA: 146,
                SiteB: 102  ,

            }
        ],
        xkey: 'period',
        ykeys: ['SiteA', 'SiteB'],
        labels: ['Site A', 'Site B'],
        pointSize: 0,
        fillOpacity: 0.8,
        pointStrokeColors: ['#26c0be', '#5dd0fc'],
        behaveLikeLine: true,
        gridLineColor: '#eeeeee',
        lineWidth: 0,
        smooth: false,
        hideHover: 'auto',
        lineColors: ['#26c0be', '#5dd0fc'],
        resize: true

    });
    Morris.Area({
        element: 'e_area_chart',
            data: [{
                period: '2011',
                iphone: 10,
                ipad: 5,
                itouch: 7
            }, {
                period: '2012',
                iphone: 35,
                ipad: 89,
                itouch: 45
            }, {
                period: '2013',
                iphone: 25,
                ipad: 15,
                itouch: 102
            }, {
                period: '2014',
                iphone: 80,
                ipad: 12,
                itouch: 7
            }, {
                period: '2015',
                iphone: 30,
                ipad: 32,
                itouch: 148
            }, {
                period: '2016',
                iphone: 25,
                ipad: 127,
                itouch: 40
            }, {
                period: '2017',
                iphone: 98,
                ipad: 10,
                itouch: 26
            }


        ],
        lineColors: ['#5dcef6', '#2cbfb7', '#c0d0d6'],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['Site A', 'Site B', 'Site C'],
        pointSize: 0,
        lineWidth: 0,
        resize: true,
        fillOpacity: 0.8,
        behaveLikeLine: true,
        gridLineColor: '#eeeeee',
        hideHover: 'auto'

    });
}
// LINE CHART
function MorrisLineChart() {
    var line = new Morris.Line({
        element: 'm_line_chart',
        resize: true,
        data: [{
                y: '2014 Q1',
                item1: 2356
            },
            {
                y: '2015 Q2',
                item1: 2586
            },
            {
                y: '2015 Q3',
                item1: 4512
            },
            {
                y: '2015 Q4',
                item1: 3265
            },
            {
                y: '2016 Q5',
                item1: 6258
            },
            {
                y: '2016 Q6',
                item1: 5234
            },
            {
                y: '2016 Q7',
                item1: 4725
            },
            {
                y: '2016 Q7',
                item1: 7526
            },
            {
                y: '2017 Q7',
                item1: 8452
            },
            {
                y: '2017 Q7',
                item1: 8931
            }
        ],
        xkey: 'y',
        ykeys: ['item1'],
        labels: ['Item 1'],
        gridLineColor: '#eeeeee',
        lineColors: ['#27c5ad'],
        lineWidth: 2,
        pointSize: 3,
        hideHover: 'auto'
    });
}
// Morris donut chart
function MorrisDonutChart() {
    Morris.Donut({
        element: 'm_donut_chart',
        data: [
        {
            label: "Online Sales",
            value: 45,

        }, {
            label: "Store Sales",
            value: 35
        },{
            label: "Email Sales",
            value: 8
        }, {
            label: "Agent Sales",
            value: 12
        }],

        resize: true,
        colors: ['#2cbfb7', '#3dd1c9', '#60ded7', '#a1ece8']
    });
}
// Morris bar chart
function MorrisBarChart() {
    Morris.Bar({
        element: 'm_bar_chart',
        data: [{
            y: '2012',
            a: 80,
            b: 56,
            c: 89
        }, {
            y: '2013',
            a: 75,
            b: 65,
            c: 38
        }, {
            y: '2014',
            a: 59,
            b: 30,
            c: 37
        }, {
            y: '2015',
            a: 75,
            b: 65,
            c: 40
        }, {
            y: '2016',
            a: 55,
            b: 40,
            c: 45
        }, {
            y: '2017',
            a: 75,
            b: 65,
            c: 40
        }, {
            y: '2018',
            a: 87,
            b: 88,
            c: 36
        }],
        xkey: 'y',
        ykeys: ['a', 'b', 'c'],
        labels: ['A', 'B', 'C'],
        barColors: ['#2cbfb7', '#5dcef6', '#c0d0d6'],
        hideHover: 'auto',
        gridLineColor: '#eeeeee',
        resize: true
    });
}
// Extra chart
