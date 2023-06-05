$(function() {
    "use strict";
    MorrisArea();
    initDonutChart();
});
//======
function MorrisArea() {
    Morris.Area({
        element: 'area_chart',
        data: [{
            period: '2012',
            America: 5,
            India: 0,
            Australia: 0
        }, {
            period: '2013',
            America: 39,
            India: 13,
            Australia: 5
        }, {
            period: '2014',
            America: 17,
            India: 28,
            Australia: 23
        }, {
            period: '2015',
            America: 55,
            India: 22,
            Australia: 8
        }, {
            period: '2016',
            America: 25,
            India: 39,
            Australia: 45
        }, {
            period: '2017',
            America: 59,
            India: 27,
            Australia: 18
        }, {
            period: '2018',
            America: 26,
            India: 49,
            Australia: 10
        }

    ],
    lineColors: ['#f56582', '#02b5b2', '#445771'],
    xkey: 'period',
    ykeys: ['America', 'India', 'Australia'],
    labels: ['America', 'India', 'Australia'],
    pointSize: 2,
    lineWidth: 1,
    resize: true,
    fillOpacity: 0.8,
    behaveLikeLine: true,
    gridLineColor: '#e0e0e0',
    hideHover: 'auto'
    });
}

function initDonutChart() {
    Morris.Donut({
        element: 'donut_chart',
        data: [{
                label: 'Chrome',
                value: 37
            }, {
                label: 'Firefox',
                value: 30
            }, {
                label: 'Safari',
                value: 18
            }, {
                label: 'Opera',
                value: 12
            },
            {
                label: 'Other',
                value: 3
            }
        ],
        colors: ['#93e3ff', '#b0dd91', '#ffe699', '#f8cbad', '#a4a4a4'],
        formatter: function(y) {
            return y + '%'
        }
    });
}

$(function() {
	"use strict";
	var mapData = {
			"US": 298,			
            "AU": 760,
            "CA": 870,
			"IN": 2000000,
			"GB": 120,
		};
	
	if( $('#world-map-markers2').length > 0 ){
		$('#world-map-markers2').vectorMap(
		{
			map: 'world_mill_en',
			backgroundColor: 'transparent',
			borderColor: '#fff',
			borderOpacity: 0.25,
			borderWidth: 0,
			color: '#e6e6e6',
			regionStyle : {
				initial : {
				  fill : '#c6cfdb'
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
						"US": '#5c8ed4',						
						"AU": '#5c8ed4',
						"IN": '#5c8ed4',
                        "GB": '#5c8ed4',
                        "CA": '#5c8ed4',
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
});

$('.knob2').knob({
    'format' : function (value) {
        return value + '%';
     }
});

