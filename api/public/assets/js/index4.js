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
        barColors: ['#4978b1', '#7e9bc8', '#b6c3dc'],
        hideHover: 'auto',
        gridLineColor: '#eef0f2',
        resize: true
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
				  fill : '#ececec'
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
						"US": '#339af6',						
						"AU": '#02b5b2',
						"IN": '#f1a627',
                        "GB": '#445771',
                        "CA": '#68bb35',
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

$('.sparkline-pie').sparkline('html', {
    type: 'pie',
    offset: 90,
    width: '100px',
    height: '100px',
    sliceColors: ['#02b5b2', '#445771', '#ffcd55']
})

$('.sparkbar').sparkline('html', { type: 'bar' });

