$(function() {
    "use strict";
    MorrisArea();
});
//======
function MorrisArea() {

    Morris.Area({
        element: 'area_chart',
        data: [{
            period: '2011',
            Sales: 5,
            Revenue: 12,
            Profit: 5
        }, {
            period: '2012',
            Sales: 62,
            Revenue: 10,
            Profit: 5
        }, {
            period: '2013',
            Sales: 20,
            Revenue: 84,
            Profit: 36
        }, {
            period: '2014',
            Sales: 108,
            Revenue: 12,
            Profit: 7
        }, {
            period: '2015',
            Sales: 30,
            Revenue: 95,
            Profit: 19
        }, {
            period: '2016',
            Sales: 25,
            Revenue: 25,
            Profit: 67
        }, {
            period: '2017',
            Sales: 135,
            Revenue: 12,
            Profit: 28
        }

    ],
    lineColors: ['#ffc107', '#17a2b8', '#28a745'],
    xkey: 'period',
    ykeys: ['Sales', 'Revenue', 'Profit'],
    labels: ['Sales', 'Revenue', 'Profit'],
    pointSize: 2,
    lineWidth: 1,
    resize: true,
    fillOpacity: 0.5,
    behaveLikeLine: true,
    gridLineColor: '#e0e0e0',
    hideHover: 'auto'
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
});
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

