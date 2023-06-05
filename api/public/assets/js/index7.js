$(function() {
    $('.Popular_Cryptocurrency').sparkline('html', {
        type: 'pie',
        offset: 90,
        width: '160px',
        height: '160px',
        sliceColors: ['#f8921a', '#6fb92c', '#157dd1']
    })

    var options;
    // multiple chart
    var dataMultiple = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [{
            name: 'Bitcoin',
            data: [200, 380, 350, 320, 410, 450, 570, 400, 555, 620, 750, 900],
        }, {
            name: 'NEO',
            data: [240, 350, 159, 380, 89, 450, 480, 523, 555, 158, 700, 358],            
        },{
            name: 'DASH',
            data: [231, 258, 315, 314, 399, 415, 476, 258, 461, 482, 258, 800],            
        },{
            name: 'ETH',
            data: [159, 123, 165, 178, 111, 150, 154, 166, 258, 134, 214, 319],            
        }]
    };
    options = {
        lineSmooth: true,
        height: "383px",
        low: 0,
        high: 'auto',
        series: {
            'NEO': {
                showPoint: true,                
            },
        },
        
        options: {
            responsive: true,
            legend: false
        },

        plugins: [
            Chartist.plugins.legend({
                legendNames: ['Bitcoin', 'NEO', 'DASH', 'ETH']
            })
        ]
    };
    new Chartist.Line('#user_statistics', dataMultiple, options);

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
				  fill : '#dfdfdf'
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
                { latLng: [37.09,-95.71], name: 'America'},
                { latLng: [-25.27, 133.77], name: 'Australia'},
                { latLng: [55.37,-3.43], name: 'United Kingdom'},
                { latLng: [56.13,-106.34], name: 'Canada'},
            ],

			series: {
				regions: [{
					values: {
						"US": '#f8921a',						
						"AU": '#157dd1',
                        "GB": '#282828',
                        "CA": '#755be6',
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