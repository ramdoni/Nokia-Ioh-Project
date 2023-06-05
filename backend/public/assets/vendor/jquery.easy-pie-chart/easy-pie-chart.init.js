!function($) {
	'use strict';
  
	var EasyPieChart = function() {};
  
	EasyPieChart.prototype.init = function() {
	    //initializing various types of easy pie charts
	    $('.easy-pie-chart-1').easyPieChart({
		  easing: 'easeOutBounce',
		  barColor : '#22252b',
		  lineWidth: 3,
		  animate: 3000,
		  lineCap: 'square',
		  trackColor: '#e5e5e5',
		  onStep: function(from, to, percent) {
			$(this.el).find('.percent').text(Math.round(percent));
		  }
	    });		
	},
	//init
	$.EasyPieChart = new EasyPieChart, $.EasyPieChart.Constructor = EasyPieChart
  }(window.jQuery),
  
  //initializing
  function($) {
	'use strict';
	$.EasyPieChart.init()
  }(window.jQuery);