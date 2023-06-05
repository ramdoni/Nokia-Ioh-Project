$(function() {
    "use strict";
	MorrisArea();
	initDonutChart();
});

//======
function MorrisArea() {
   
    Morris.Area({
        element: 'm_area_chart',
        data: [{
                period: '2012',
                Female: 780,
                Male: 1025,
            },{
                period: '2013',
                Female: 2660,
                Male: 1580,
            },{
                period: '2014',
                Female: 1789,
                Male: 4581,
            }, {
                period: '2015',
                Female: 3154,
                Male: 2015,
            }, {
                period: '2016',
                Female: 2154,
                Male: 5210,
            }, {
                period: '2017',
                Female: 2154,
                Male: 3125,
            },{
                period: '2018',
                Female: 6315,
                Male: 9561,
            }
        ],
        xkey: 'period',
        ykeys: ['Female', 'Male'],
        labels: ['Female', 'Male'],
        pointSize: 3,
        fillOpacity: 0,
        pointStrokeColors: ['#ff68b3 ', '#00bdfb'],
        behaveLikeLine: true,
        gridLineColor: '#e5e5e5',
        lineWidth: 1,
        hideHover: 'auto',
        lineColors: ['#ff68b3 ', '#00bdfb'],
        resize: true
    
    });
}
//======
function initDonutChart() {
    Morris.Donut({
        element: 'donut_chart',        
        data: [{
                label: 'Crome',
                value: 35
            }, {
                label: 'safari',
                value: 25
            }, {
                label: 'Mozila',
                value: 25
            }, {
                label: 'Opera',
                value: 3
            }, {
                label: 'IE',
                value: 7
            }, {
                label: 'Others',
                value: 5
            }
        ],
        colors: ['#f4b826', '#009ee8', '#f49c17', '#f55943', '#00c7fe', '#565656'],
        formatter: function(y) {
            return y + '%'
        }
    });
}

/*VectorMap Init*/

$(function() {
	"use strict";
	var mapData = {
			"US": 298,
			"SA": 200,
			"AU": 760,
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
				  fill : '#cccccc'
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
		   
			markers : [{
				latLng : [21.00, 78.00],
				name : 'INDIA : 350'
			  
            },
                {
                latLng : [-33.00, 151.00],
                name : 'Australia : 250'
                
            },
                {
                latLng : [36.77, -119.41],
                name : 'USA : 250'
                
            },
                {
                latLng : [55.37, -3.41],
                name : 'UK   : 250'
                
            },
                {
                latLng : [25.20, 55.27],
                name : 'UAE : 250'
            
            }],

			series: {
				regions: [{
					values: {
						"US": '#2CA8FF',
						"SA": '#49c5b6',
						"AU": '#18ce0f',
						"IN": '#f96332',
						"GB": '#FFB236',
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