
// Bar Area
$(function() {
    "use strict";
    var barArea = getChart("echart-bar_area")
    var app = {};
    var option = {};
    var xAxisData = [];
    var data1 = [];
    var data2 = [];
    for (var i = 0; i < 100; i++) {
        xAxisData.push('bar' + i);
        data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
        data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
    }
    option = {
        
        legend: {
            data: ['bar', 'bar2'],
            align: 'right',
            bottom: '0',
        },
        grid: {
            left: '5%',
            right:'0%',
            top: '2%',
            bottom:'15%',
        },
        tooltip: {},
        xAxis: {
            data: xAxisData,
            silent: true,
            splitLine: {
                show: false
            },
            axisLine:{
                lineStyle:{
                    color: '#f8f9fa',
                }
            },
            axisLabel: {
                color: '#4D5052',
            }
        },
        yAxis: {
            splitLine: {
                lineStyle:{
                    color: '#f8f9fa',
                }
            },
            axisLine:{
                lineStyle:{
                    color: '#f8f9fa',
                }
            },
            axisLabel: {
                color: '#4D5052',
            }
        },
        series: [{
            name: 'bar',
            type: 'bar',
            data: data1,
            color: '#a27ce6',
            animationDelay: function (idx) {
                return idx * 10;
            }
        }, {
            name: 'bar2',
            type: 'bar',
            data: data2,
            color: '#1ab1e3',
            
            animationDelay: function (idx) {
                return idx * 5 + 100;
            }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    };
    if (option && typeof option === "object") {
        barArea.setOption(option, true);
    }
    $(window).on('resize', function(){
        barArea.resize();
    });
});

// Rainfall and Evaporation
$(function() {
    "use strict";
    var app = {};
    var option = {};
    var rainFall = getChart("echart-rainfall");
    option = {
        legend: {
            data:['data1','data2'],
            bottom: '0',
        },
        grid: {
            left: '5%',
            right:'0%',
            top: '2%',
            bottom:'15%',
        },
        tooltip : {
            trigger: 'axis'
        },        
        calculable : true,

        xAxis : {
            type : 'category',
            data : ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sept','Oct','Nov','Dec'],
            axisLine:{
                lineStyle:{
                    color: '#f8f9fa',
                }
            },
            axisLabel: {
                color: '#4D5052',
            }
        },
        yAxis : {
            type : 'value',
            splitLine: {
                lineStyle:{
                    color: '#f8f9fa',
                }
            },
            axisLine:{
                lineStyle:{
                    color: '#f8f9fa',
                }
            },
            axisLabel: {
                color: '#4D5052',
            }
        },
        series : [
            {
                name:'data1',
                type:'bar',
                color: '#2bcbba',
                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                markPoint : {
                    data : [
                        {type : 'max', name: 'Max'},
                        {type : 'min', name: 'Min'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: 'Average'}
                    ]
                }
            },
            {
                name:'data2',
                type:'bar',
                color: '#288cff',
                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                markPoint : {
                    data : [
                        {name : 'Highest', value : 182.2, xAxis: 7, yAxis: 183},
                        {name : 'Minimum', value : 2.3, xAxis: 11, yAxis: 3}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name : 'Average'}
                    ]
                }
            }
        ]
    };
    if (option && typeof option === "object") {
        rainFall.setOption(option, true);
    }  
    $(window).on('resize', function(){
        rainFall.resize();
    });
});

// Dynamic Data
$(function() {
    "use strict";
    var dynamicData = getChart("echart-dynamic_data");
    var app = {};
    var option = {};

    option = {
        legend: {
            data:['Latest transaction price', 'Pre-order queue']
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#283b56'
                }
            }
        },
        dataZoom: {
            show: false,
            start: 0,
            end: 100
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: true,
                data: (function (){
                    var now = new Date();
                    var res = [];
                    var len = 10;
                    while (len--) {
                        res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                        now = new Date(now - 2000);
                    }
                    return res;
                })(),
                axisLine:{
                    lineStyle:{
                        color: '#f8f9fa',
                    }
                },
                
            },            
            {
                type: 'category',
                boundaryGap: true,
                data: (function (){
                    var res = [];
                    var len = 10;
                    while (len--) {
                        res.push(10 - len - 1);
                    }
                    return res;
                })(),
            },
        ],
        yAxis: [
            {
                type: 'value',
                scale: true,
                name: 'price',
                max: 30,
                min: 0,
                boundaryGap: [0.2, 0.2],

                axisLine:{
                    lineStyle:{
                        color: '#f8f9fa',
                    }
                },
                axisLabel: {
                    color: '#4D5052',
                }

            },
            {
                type: 'value',
                scale: true,
                max: 1200,
                min: 0,
                boundaryGap: [0.2, 0.2],
                
                splitLine: {
                    lineStyle:{
                        color: '#f8f9fa',
                    }
                },
            }
        ],
        series: [
            {
                color: '#5b39b1',
                name:'queue',
                type:'bar',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data:(function (){
                    var res = [];
                    var len = 10;
                    while (len--) {
                        res.push(Math.round(Math.random() * 1000));
                    }
                    return res;
                })()
            },
            {
                color: '#2bcbba',
                name:'Latest transaction',
                type:'line',
                data:(function (){
                    var res = [];
                    var len = 0;
                    while (len < 10) {
                        res.push((Math.random()*10 + 5).toFixed(1) - 0);
                        len++;
                    }
                    return res;
                })()
            }
        ]
    };
    if (option && typeof option === "object") {
        dynamicData.setOption(option, true);
    } 
    $(window).on('resize', function(){
        dynamicData.resize();
    }); 
});

// Basic Candlestick
$(function() {
    "use strict";
    var candleStick = getChart("echart-candlestick");
    var app = {};
    var option = {};

    option = {
        grid: {
            left: '5%',
            right:'0%',
            top: '2%',
            bottom:'8%',
        },
        xAxis: {
            data: ['2018-10-24', '2018-10-25', '2018-10-26', '2018-10-27'],
            axisLine:{
                lineStyle:{
                    color: '#f8f9fa',
                }
            },
            splitLine: {
                lineStyle:{
                    color: '#f8f9fa',
                }
            },
        },        
        yAxis: {
            splitLine: {
                lineStyle:{
                    color: '#f8f9fa',
                }
            },
            axisLine:{
                lineStyle:{
                    color: '#f8f9fa',
                }
            },
            axisLabel: {
                color: '#4D5052',
            }
        },
        series: [{
            type: 'k',            
            data: [
                {
                    itemStyle:{
                        color: '#1ab1e3',
                        borderColor: '#1ab1e3',
                    },
                    value: [20, 30, 10, 35]
                },
                {
                    itemStyle:{
                        color: '#a27ce6',
                        color0: '#a27ce6',
                        borderColor: '#a27ce6',
                        borderColor0: '#a27ce6',
                    },
                    value: [40, 35, 30, 55]
                },
                {
                    itemStyle:{
                        color: '#1ab1e3',
                        borderColor: '#1ab1e3',
                    },
                    value: [33, 38, 33, 40]
                },
                {
                    itemStyle:{
                        color: '#ffc323',
                        borderColor: '#ffc323',
                    },
                    value: [40, 40, 32, 42]
                },
            ]
        }]
    };

    if (option && typeof option === "object") {
        candleStick.setOption(option, true);
    }
    $(window).on('resize', function(){
        candleStick.resize();
    });
});

// Basic Scatter Chart
$(function() {
    "use strict";
    var basicScatter = getChart("echart-basic_scatter");
    var app = {};
    var option = {};

    option = {
        grid: {
            left: '5%',
            right:'0%',
            top: '2%',
            bottom:'5%',
        },
        
        xAxis: {
            axisLine:{
                lineStyle:{
                    color: '#f8f9fa',
                }
            },
            splitLine: {
                lineStyle:{
                    color: '#f8f9fa',
                }
            },
            axisLabel: {
                color: '#4D5052',
            }            
        },
        yAxis: {
            splitLine: {
                lineStyle:{
                    color: '#f8f9fa',
                }
            },
            axisLine:{
                lineStyle:{
                    color: '#f8f9fa',
                }
            },
            axisLabel: {
                color: '#4D5052',
            }
        },
        series: [{
            symbolSize: 15,
            color: '#1ab1e3',
            data: [
                [10.0, 8.04],
                [8.0, 6.95],
                [13.0, 7.58],
                [9.0, 8.81],
                [11.0, 8.33],
                [14.0, 9.96],
                [6.0, 7.24],
                [4.0, 4.26],
                [12.0, 10.84],
                [7.0, 4.82],
                [5.0, 5.68]
            ],
            type: 'scatter'
        }]
    };
    if (option && typeof option === "object") {
        basicScatter.setOption(option, true);
    }
    $(window).on('resize', function(){
        basicScatter.resize();
    });
});

// Doughnut Chart
$(function() {
    "use strict";
    var doughnutChart = getChart("echart-doughnut");
    var app = {};
    var option = {};

    option = {
        grid: {
            left: '5%',
            right:'0%',
            top: '2%',
            bottom:'5%',
        },
        
        legend: {
            orient: 'vertical',
            x: 'left',
            data:['Data1','Data2','Data3','Data4','Data5']
        },
        series: [
            {
                name:'Access source',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:335, name:'Data1', itemStyle: {color: '#ffc323',}},
                    {value:310, name:'Data2', itemStyle: {color: '#ff758e',}},
                    {value:234, name:'Data3', itemStyle: {color: '#49c5b6',}},
                    {value:135, name:'Data4', itemStyle: {color: '#60bafd',}},
                    {value:1548, name:'Data5', itemStyle: {color: '#a27ce6',}}
                ]
            }
        ]
    };
    if (option && typeof option === "object") {
        doughnutChart.setOption(option, true);
    }
    $(window).on('resize', function(){
        doughnutChart.resize();
    });
});

// Large scale area chart
$(function() {
    "use strict";
    var largescaleArea = getChart("echart-large_scale_area");
    var app = {};
    var option = {};
    var base = +new Date(1968, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var date = [];

    var data = [Math.random() * 300];

    for (var i = 1; i < 20000; i++) {
        var now = new Date(base += oneDay);
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }

    option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        grid: {
            left: '5%',
            right:'0%',
            top: '2%',
            bottom:'20%',
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date,
            axisLine:{
                lineStyle:{
                    color: '#f8f9fa',
                }
            },
            axisLabel: {
                color: '#4D5052',
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            splitLine: {
                lineStyle:{
                    color: '#f8f9fa',
                }
            },
            axisLine:{
                lineStyle:{
                    color: '#f8f9fa',
                }
            },
            axisLabel: {
                color: '#4D5052',
            }
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 10
        }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [
            {
                name:'Simulation data',
                type:'line',
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    color: '#f8f9fa',
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(255, 158, 68)'
                    }, {
                        offset: 1,
                        color: 'rgb(255, 70, 131)'
                    }])
                },
                data: data
            }
        ]
    };
    if (option && typeof option === "object") {
        largescaleArea.setOption(option, true);
    }
    $(window).on('resize', function(){
        largescaleArea.resize();
    });
});

function getChart(id){
    var dom = document.getElementById(id);
    return echarts.init(dom);
}