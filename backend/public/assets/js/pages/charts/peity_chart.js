$(function() {

    // MINI LINE CHARTS
    var params = {
        width: '60px',
        height: '30px',
        lineWidth: '2',
        lineColor: '#1D92AF',
        fillColor: 'rgba(29,146,175,0.2) ',
        spotRadius: '2',
        highlightLineColor: '#aedaff',
        highlightSpotColor: '#71aadb',
        spotColor: false,
        minSpotColor: false,
        maxSpotColor: false,
        disableInteraction: false
    };

    // values from HTML script
    $('#demo-sparkline-line1').sparkline('html', params);
    params.lineColor = '#ef2020';
    params.fillColor = 'rgba(239,32,32,0.2)';
    $('#demo-sparkline-line2').sparkline('html', params);
    params.lineColor = '#ff9800';
    params.fillColor = 'rgba(255,152,0,0.2)';
    $('#demo-sparkline-line3').sparkline('html', params);
    params.lineColor = '#7CAC25';
    params.fillColor = 'rgba(124,172,37,0.2)';
    $('#demo-sparkline-line4').sparkline('html', params);
    params.lineColor = '#777';
    params.fillColor = 'rgba(119,119,119,0.2)';
    $('#demo-sparkline-line5').sparkline('html', params);

    // values from Javascript
    var values1 = getRandomValues();

    params.lineColor = '#1D92AF';
    params.fillColor = false;
    $('#demo-sparkline-line6').sparkline(values1[0], params);
    params.lineColor = '#ef2020';
    params.fillColor = false;
    $('#demo-sparkline-line7').sparkline(values1[1], params);
    params.lineColor = '#ff9800';
    params.fillColor = false;
    $('#demo-sparkline-line8').sparkline(values1[2], params);
    params.lineColor = '#7CAC25';
    params.fillColor = false;
    $('#demo-sparkline-line9').sparkline(values1[3], params);
    params.lineColor = '#777';
    params.fillColor = false;
    $('#demo-sparkline-line10').sparkline(values1[4], params);

    // composite line
    $('#demo-sparkline-compositeline').sparkline('html', {
        fillColor: false,
        lineColor: '#ff9800',
        width: '200px',
        height: '30px',
        lineWidth: '2',
    });

    $('#demo-sparkline-compositeline').sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], {
        composite: true,
        fillColor: false,
        lineColor: '#777',
        lineWidth: '2',
        chartRangeMin: 0,
        chartRangeMax: 10
    });


    // MINI BAR CHART
    var values2 = getRandomValues();

    var paramsBar = {
        type: 'bar',
        barWidth: 5,
        height: 25,
        barColor: '#0E9BE2'
    };

    $('#mini-bar-chart1').sparkline(values2[0], paramsBar);
    paramsBar.barColor = '#7CAC25';
    $('#mini-bar-chart2').sparkline(values2[1], paramsBar);
    paramsBar.barColor = '#FF4402';
    $('#mini-bar-chart3').sparkline(values2[2], paramsBar);
    paramsBar.barColor = '#ff9800';
    $('#mini-bar-chart4').sparkline(values2[3], paramsBar);
    paramsBar.barColor = '#777';
    $('#mini-bar-chart5').sparkline(values2[4], paramsBar);

    // negative values;
    $('#mini-bar-negative').sparkline('html', paramsBar);

    // stacked bar
    $('#mini-bar-stacked').sparkline('html', paramsBar);

    // composite bar
    $('#demo-sparkline-compositebar').sparkline('html', {
        type: 'bar',
        barColor: '#7CAC25',
        barWidth: 5,
        height: 25,
    });

    $('#demo-sparkline-compositebar').sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6], {
        composite: true,
        fillColor: false,
        lineColor: '#777',
    });


    // MINI PIE CHARTS
    var paramsPie = {
        type: "pie",
        width: '30px',
        height: '30px',
        sliceColors: ["#0E9BE2", "#ff9800", "#7CAC25"]
    };

    $('#mini-pie-chart1').sparkline('html', paramsPie);
    $('#mini-pie-chart2').sparkline('html', paramsPie);
    $('#mini-pie-chart3').sparkline('html', paramsPie);
    $('#mini-pie-chart4').sparkline('html', paramsPie);
    $('#mini-pie-chart5').sparkline('html', paramsPie);
    $('#mini-pie-chart6').sparkline('html', paramsPie);


    function getRandomValues() {
        // data setup
        var values = new Array(20);

        for (var i = 0; i < values.length; i++) {
            values[i] = [5 + randomVal(), 10 + randomVal(), 15 + randomVal(), 20 + randomVal(), 30 + randomVal(),
                35 + randomVal(), 40 + randomVal(), 45 + randomVal(), 50 + randomVal()
            ];
        }

        return values;
    }

    function randomVal() {
        return Math.floor(Math.random() * 80);
    }

});
