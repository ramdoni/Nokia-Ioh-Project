$(function() {
    "use strict";

    // top products =================
    var dataStackedBar = {
        labels: ['Q1','Q2','Q3','Q4','Q5','Q6','Q7'],
        series: [
            [2350,3205,4520,2351,5632,3205,4520],
            [2541,2583,1592,2674,2323,1592,2674],
            [1212,5214,2325,4235,2519,1212,5214],
        ]
    };
    new Chartist.Bar('#chart-top-products', dataStackedBar, {
        height: "250px",
        stackBars: true,
        axisX: {
            showGrid: false
        },
        axisY: {
            labelInterpolationFnc: function(value) {
                return (value / 1000) + 'k';
            }
        },
        plugins: [
            Chartist.plugins.tooltip({
                appendToBody: true
            }),
            Chartist.plugins.legend({
                legendNames: ['Data 1', 'Data 2', 'Data 3']
            })
        ]
    }).on('draw', function(data) {
            if (data.type === 'bar') {
                data.element.attr({
                    style: 'stroke-width: 20px'
                });
            }
    });

    // Total Sale =================
    $('.knob2').knob({
        'format' : function (value) {
            return value + '%';
         }
    });

    // Income Analysis =================
    $('.sparkline-pie').sparkline('html', {
        type: 'pie',
        offset: 90,
        width: '160px',
        height: '160px',
        sliceColors: ['#02b5b2', '#445771', '#ffcd55']
    })
    $('#sparkline-compositeline').sparkline('html', {
        fillColor: false,
        lineColor: '#445771',
        width: '200px',
        height: '30px',
        lineWidth: '1',
    });
    $('#sparkline-compositeline').sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], {
        composite: true,
        fillColor: false,
        lineColor: '#02b5b2',
        lineWidth: '1',
        chartRangeMin: 0,
        chartRangeMax: 10
    });
    $('#sparkline-compositeline').sparkline([6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7, 4, 1, 5, 7, 9, 9, 8, 7, 6], {
        composite: true,
        fillColor: false,
        lineColor: '#ffcd55',
        lineWidth: '1',
        chartRangeMin: 0,
        chartRangeMax: 10
    });

    $('.sparkline-pie2').sparkline('html', {
        type: 'pie',
        offset: 90,
        width: '160px',
        height: '160px',
        sliceColors: ['#05b4d8', '#35cd3a', '#716aca']
    })

    // =================    
    $('.sparkbar').sparkline('html', { type: 'bar' });

    
    // BTC =================
    $('#sparkline16').sparkline([155, 161, 170, 205, 198, 245, 279, 301, 423], {
        type: 'line',
        width: '100%',
        height: '390',
        chartRangeMax:100,
        resize: true,
        lineColor: '#84b3df',
        fillColor: '#d2e7fb',
        highlightLineColor: 'rgba(0,0,0,.1)',
        highlightSpotColor: 'rgba(0,0,0,.2)',
    });    
    $('#sparkline16').sparkline([4, 5, 7, 5, 10, 12, 22, 32, 41, 32], {
        type: 'line',
        width: '100%',
        height: '290',
        chartRangeMax: 100,
        lineColor: '#8f8ff0',
        fillColor: '#b5b5ea',
        composite: true,
        resize: true,
        highlightLineColor: 'rgba(0,0,0,.1)',
        highlightSpotColor: 'rgba(0,0,0,.2)',
    });

    // Our Location ======
    var mapData = {
        "US": 298,			
        "AU": 760,
        "CA": 870,
        "IN": 2000000,
        "GB": 120,
    };
    if( $('#world-map-markers').length > 0 ){
        $('#world-map-markers').vectorMap(
        {
            map: 'world_mill_en',
            backgroundColor: 'transparent',
            borderColor: '#fff',
            borderOpacity: 0.25,
            borderWidth: 0,
            color: '#e6e6e6',
            regionStyle : {
                initial : {
                fill : '#ebebeb'
                }
            },

            markerStyle: {
                initial: {
                            r: 5,
                            'fill': '#fff',
                            'fill-opacity':1,
                            'stroke': '#000',
                            'stroke-width' : 1,
                            'stroke-opacity': 0.4
                        },
                },
        
            markers: [
                { latLng: [37.09,-95.71], name: 'America' },                
                { latLng: [-25.27, 133.77], name: 'Australia' },
                { latLng: [56.13,-106.34], name: 'Canada' },
                { latLng: [20.59,78.96], name: 'India' },
                { latLng: [55.37,-3.43], name: 'United Kingdom' },
            ],

            series: {
                regions: [{
                    values: {
                        "US": '#bdf3f5',						
                        "AU": '#f9f1d8',
                        "IN": '#ffd4c3',
                        "GB": '#e0eff5',
                        "CA": '#efebf4',
                    },
                    attribute: 'fill'
                }]
            },
            hoverOpacity: null,
            normalizeFunction: 'linear',
            zoomOnScroll: false,
            scaleColors: ['#000000', '#000000'],
            selectedColor: '#000000',
            selectedRegions: [],
            enableZoom: false,
            hoverColor: '#fff',
        });
    }

    // line chart =========================
    var data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
            [200, 380, 350, 320, 410, 450, 570, 400, 555, 620, 750, 900],
        ]
    };
    var options = {
        height: "300px",
        showPoint: true,
        lineSmooth: true,        

        axisX: {
            showGrid: false
        },
        plugins: [
            Chartist.plugins.tooltip({
                appendToBody: true
            }),
        ]
    };
    new Chartist.Line('#newline_chart', data, options);

    // donut chart
    var dataDonut = {
        series: [20, 10, 25, 40, 5]
    };
    new Chartist.Pie('#donut_chart', dataDonut, {
        height: "220px",
        donut: true,
        donutWidth: 25,
        donutSolid: true,
        startAngle: 270,
        showLabel: true
    });

});

// Visitors Statistics =============
$(function() {

    var d = [[1196463600000, 0], [1196550000000, 0], [1196636400000, 0], [1196722800000, 77], [1196809200000, 3636], [1196895600000, 3575], [1196982000000, 2736], [1197068400000, 1086], [1197154800000, 676], [1197241200000, 1205], [1197327600000, 906], [1197414000000, 710], [1197500400000, 639], [1197586800000, 540], [1197673200000, 435], [1197759600000, 301], [1197846000000, 575], [1197932400000, 481], [1198018800000, 591], [1198105200000, 608], [1198191600000, 459], [1198278000000, 234], [1198364400000, 1352], [1198450800000, 686], [1198537200000, 279], [1198623600000, 449], [1198710000000, 468], [1198796400000, 392], [1198882800000, 282], [1198969200000, 208], [1199055600000, 229], [1199142000000, 177], [1199228400000, 374], [1199314800000, 436], [1199401200000, 404], [1199487600000, 253], [1199574000000, 218], [1199660400000, 476], [1199746800000, 462], [1199833200000, 448], [1199919600000, 442], [1200006000000, 403], [1200092400000, 204], [1200178800000, 194], [1200265200000, 327], [1200351600000, 374], [1200438000000, 507], [1200524400000, 546], [1200610800000, 482], [1200697200000, 283], [1200783600000, 221], [1200870000000, 483], [1200956400000, 523], [1201042800000, 528], [1201129200000, 483], [1201215600000, 452], [1201302000000, 270], [1201388400000, 222], [1201474800000, 439], [1201561200000, 559], [1201647600000, 521], [1201734000000, 477], [1201820400000, 442], [1201906800000, 252], [1201993200000, 236], [1202079600000, 525], [1202166000000, 477], [1202252400000, 386], [1202338800000, 409], [1202425200000, 408], [1202511600000, 237], [1202598000000, 193], [1202684400000, 357], [1202770800000, 414], [1202857200000, 393], [1202943600000, 353], [1203030000000, 364], [1203116400000, 215], [1203202800000, 214], [1203289200000, 356], [1203375600000, 399], [1203462000000, 334], [1203548400000, 348], [1203634800000, 243], [1203721200000, 126], [1203807600000, 157], [1203894000000, 288]];

    // first correct the timestamps - they are recorded as the daily
    // midnights in UTC+0100, but Flot always displays dates in UTC
    // so we have to add one hour to hit the midnights in the plot

    for (var i = 0; i < d.length; ++i) {
        d[i][0] += 60 * 60 * 1000;
    }

    // helper for returning the weekends in a period

    function weekendAreas(axes) {

        var markings = [],
            d = new Date(axes.xaxis.min);

        // go to the first Saturday

        d.setUTCDate(d.getUTCDate() - ((d.getUTCDay() + 1) % 7))
        d.setUTCSeconds(0);
        d.setUTCMinutes(0);
        d.setUTCHours(0);

        var i = d.getTime();

        // when we don't set yaxis, the rectangle automatically
        // extends to infinity upwards and downwards

        do {
            markings.push({ xaxis: { from: i, to: i + 2 * 24 * 60 * 60 * 1000 } });
            i += 7 * 24 * 60 * 60 * 1000;
        } while (i < axes.xaxis.max);

        return markings;
    }

    var options = {
        xaxis: {
            mode: "time",
            tickLength: 5
        },
        selection: {
            mode: "x"
        },
        grid: {
            markings: weekendAreas,
            borderColor: '#eaeaea',
            tickColor: '#eaeaea',
            hoverable: true,                           
            borderWidth: 1,
        }
    };

    var plot = $.plot("#Visitors_chart", [d], options);

    // now connect the two

    $("#Visitors_chart").bind("plotselected", function (event, ranges) {

        // do the zooming
        $.each(plot.getXAxes(), function(_, axis) {
            var opts = axis.options;
            opts.min = ranges.xaxis.from;
            opts.max = ranges.xaxis.to;
        });
        plot.setupGrid();
        plot.draw();
        plot.clearSelection();

        // don't fire event on the overview to prevent eternal loop

        overview.setSelection(ranges, true);
        
    });

    // Add the Flot version string to the footer

    $("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
    
});




