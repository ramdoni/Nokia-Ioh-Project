$(function() {
    "use strict";    
    initDonutChart();
    getMorris('line', 'line_chart');

    $('.knob2').knob({
        'format' : function (value) {
            return value + '';
         }
    });
});


function initDonutChart() {
    Morris.Donut({
        element: 'donut_chart',
        data: [{
                label: 'Tablet',
                value: 15
            }, {
                label: 'Desktops',
                value: 45
            }, {
                label: 'Mobile',
                value: 40
            }
        ],
        colors: ['#f15a24', '#f7931e', '#ffb83b'],
        formatter: function(y) {
            return y + '%'
        }
    });
}

function getMorris(type, element) {
    
    if (type === 'line') {        
        Morris.Line({            
            element: element,
            data: [
                { y: '2012', a: 100, b: 90, c: 100, d: 90, e:20 },
                { y: '2013', a: 25, b: 49, c: 36, d: 90, e:71 },
                { y: '2014', a: 63, b: 90, c: 100, d: 55, e:20 },
                { y: '2015', a: 22, b: 61, c: 45, d: 90, e:42 },
                { y: '2016', a: 85, b: 62, c: 77, d: 22, e:20 },
                { y: '2017', a: 77, b: 90, c: 100, d: 90, e:85 },
                { y: '2018', a: 68, b: 75, c: 100, d: 25, e:56 },
            ],

            xkey: 'y',
            ykeys: ['a', 'b','c','d','e'],
            labels: ['Series A', 'Series B', 'Series C', 'Series D', 'Series E'],
            gridLineColor: '#eaeaea',
            lineWidth: 1,
            hideHover: 'auto',            
            resize: true,
            pointSize: 2,
            fillOpacity: 0,
            behaveLikeLine: true,
            lineColors: ['#fe6283', '#359ef0', '#fcce56', '#48c2c2', '#9d67ff'],
            pointStrokeColors: ['#fe6283', '#359ef0', '#fcce56', '#48c2c2', '#9d67ff'],
            
        });
    }
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
				  fill : '#eaeaea'
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
						"US": '#49c5b6',
						"SA": '#667add',
						"AU": '#50d38a',
						"IN": '#60bafd',
						"GB": '#ff758e',
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

	if( $('#india').length > 0 ){
	$('#india').vectorMap({
			map : 'in_mill',
			backgroundColor : 'transparent',
			regionStyle : {
				initial : {
					fill : '#f4f4f4'
				}
			}
		});
	}	

	if( $('#usa').length > 0 ){
		$('#usa').vectorMap({
			map : 'us_aea_en',
			backgroundColor : 'transparent',
			regionStyle : {
				initial : {
					fill : '#f4f4f4'
				}
			}
		});
	}        
		   
	if( $('#australia').length > 0 ){        
		$('#australia').vectorMap({
			map : 'au_mill',
			backgroundColor : 'transparent',
			regionStyle : {
				initial : {
					fill : '#f4f4f4'
				}
			}
		});
	}	
	 
	if( $('#uk').length > 0 ){ 
		$('#uk').vectorMap({
			map : 'uk_mill_en',
			backgroundColor : 'transparent',
			regionStyle : {
				initial : {
					fill : '#f4f4f4'
				}
			}
		});
	}	
});