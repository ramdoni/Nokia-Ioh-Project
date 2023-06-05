$(function() {
    "use strict";
    $(document).ready(function(){
        var chart = c3.generate({
            bindto: '#chart-employment', // id of chart wrapper
            data: {
                columns: [
                    // each columns data
                    ['data1', 2, 8, 6, 7, 14, 11],
                    ['data2', 5, 15, 11, 15, 21, 25],
                    ['data3', 17, 18, 21, 20, 30, 29]
                ],
                type: 'line', // default type of chart
                colors: {
                    'data1': lucid.colors["orange"],
                    'data2': lucid.colors["blue"],
                    'data3': lucid.colors["green"]
                },
                names: {
                    // name of each serie
                    'data1': 'Development',
                    'data2': 'Marketing',
                    'data3': 'Sales'
                }
            },
            axis: {
                x: {
                    type: 'category',
                    // name of each category
                    categories: ['2013', '2014', '2015', '2016', '2017', '2018']
                },
            },
            legend: {
                show: true, //hide legend
            },
            padding: {
                bottom: 0,
                top: 0
            },
        });
    });
    $(document).ready(function(){
        var chart = c3.generate({
            bindto: '#chart-temperature', // id of chart wrapper
            data: {
                columns: [
                    // each columns data
                    ['data1', 7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                    ['data2', 3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                ],
                labels: true,
                type: 'line', // default type of chart
                colors: {
                    'data1': lucid.colors["blue"],
                    'data2': lucid.colors["green"]
                },
                names: {
                    // name of each serie
                    'data1': 'Tokyo',
                    'data2': 'London'
                }
            },
            axis: {
                x: {
                    type: 'category',
                    // name of each category
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                },
            },
            legend: {
                show: true, //hide legend
            },
            padding: {
                bottom: 0,
                top: 0
            },
        });
    });
    $(document).ready(function(){
        var chart = c3.generate({
            bindto: '#chart-area', // id of chart wrapper
            data: {
                columns: [
                    // each columns data
                    ['data1', 11, 8, 15, 18, 19, 17],
                    ['data2', 7, 7, 5, 7, 9, 12]
                ],
                type: 'area', // default type of chart
                colors: {
                    'data1': lucid.colors["blue"],
                    'data2': lucid.colors["pink"]
                },
                names: {
                    // name of each serie
                    'data1': 'Maximum',
                    'data2': 'Minimum'
                }
            },
            axis: {
                x: {
                    type: 'category',
                    // name of each category
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                },
            },
            legend: {
                show: true, //hide legend
            },
            padding: {
                bottom: 0,
                top: 0
            },
        });
    });
    $(document).ready(function(){
        var chart = c3.generate({
            bindto: '#chart-area-spline', // id of chart wrapper
            data: {
                columns: [
                    // each columns data
                    ['data1', 11, 8, 15, 18, 19, 17],
                    ['data2', 7, 7, 5, 7, 9, 12]
                ],
                type: 'area-spline', // default type of chart
                colors: {
                    'data1': lucid.colors["blue"],
                    'data2': lucid.colors["pink"]
                },
                names: {
                    // name of each serie
                    'data1': 'Maximum',
                    'data2': 'Minimum'
                }
            },
            axis: {
                x: {
                    type: 'category',
                    // name of each category
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                },
            },
            legend: {
                show: true, //hide legend
            },
            padding: {
                bottom: 0,
                top: 0
            },
        });
    });
    $(document).ready(function(){
        var chart = c3.generate({
            bindto: '#chart-area-spline-sracked', // id of chart wrapper
            data: {
                columns: [
                    // each columns data
                    ['data1', 11, 8, 15, 18, 19, 17],
                    ['data2', 7, 7, 5, 7, 9, 12]
                ],
                type: 'area-spline', // default type of chart
                groups: [
                    [ 'data1', 'data2']
                ],
                colors: {
                    'data1': lucid.colors["blue"],
                    'data2': lucid.colors["pink"]
                },
                names: {
                    // name of each serie
                    'data1': 'Maximum',
                    'data2': 'Minimum'
                }
            },
            axis: {
                x: {
                    type: 'category',
                    // name of each category
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                },
            },
            legend: {
                show: true, //hide legend
            },
            padding: {
                bottom: 0,
                top: 0
            },
        });
    });
    $(document).ready(function(){
        var chart = c3.generate({
            bindto: '#chart-spline', // id of chart wrapper
            data: {
                columns: [
                    // each columns data
                    ['data1', 0.2, 0.8, 0.8, 0.8, 1, 1.3, 1.5, 2.9, 1.9, 2.6, 1.6, 3, 4, 3.6, 4.5, 4.2, 4.5, 4.5, 4, 3.1, 2.7, 4, 2.7, 2.3, 2.3, 4.1, 7.7, 7.1, 5.6, 6.1, 5.8, 8.6, 7.2, 9, 10.9, 11.5, 11.6, 11.1, 12, 12.3, 10.7, 9.4, 9.8, 9.6, 9.8, 9.5, 8.5, 7.4, 7.6],
                    ['data2', 0, 0, 0.6, 0.9, 0.8, 0.2, 0, 0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.2, 0, 0.1, 0.3, 0.3, 0, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.1, 0.3, 0.3, 0, 3.1, 3.1, 2.5, 1.5, 1.9, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]
                ],
                labels: true,
                type: 'spline', // default type of chart
                colors: {
                    'data1': lucid.colors["blue"],
                    'data2': lucid.colors["green"]
                },
                names: {
                    // name of each serie
                    'data1': 'Hestavollane',
                    'data2': 'Vik'
                }
            },
            axis: {
                x: {
                    type: 'category',
                    // name of each category
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                },
            },
            legend: {
                show: true, //hide legend
            },
            padding: {
                bottom: 0,
                top: 0
            },
        });
    });
    $(document).ready(function(){
        var chart = c3.generate({
            bindto: '#chart-spline-rotated', // id of chart wrapper
            data: {
                columns: [
                    // each columns data
                    ['data1', 11, 8, 15, 18, 19, 17],
                    ['data2', 7, 7, 5, 7, 9, 12]
                ],
                type: 'spline', // default type of chart
                colors: {
                    'data1': lucid.colors["blue"],
                    'data2': lucid.colors["pink"]
                },
                names: {
                    // name of each serie
                    'data1': 'Maximum',
                    'data2': 'Minimum'
                }
            },
            axis: {
                x: {
                    type: 'category',
                    // name of each category
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                },
                rotated: true,
            },
            legend: {
                show: true, //hide legend
            },
            padding: {
                bottom: 0,
                top: 0
            },
        });
    });
    $(document).ready(function(){
        var chart = c3.generate({
            bindto: '#chart-step', // id of chart wrapper
            data: {
                columns: [
                    // each columns data
                    ['data1', 11, 8, 15, 18, 19, 17],
                    ['data2', 7, 7, 5, 7, 9, 12]
                ],
                type: 'step', // default type of chart
                colors: {
                    'data1': lucid.colors["blue"],
                    'data2': lucid.colors["pink"]
                },
                names: {
                    // name of each serie
                    'data1': 'Maximum',
                    'data2': 'Minimum'
                }
            },
            axis: {
                x: {
                    type: 'category',
                    // name of each category
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                },
            },
            legend: {
                show: true, //hide legend
            },
            padding: {
                bottom: 0,
                top: 0
            },
        });
    });
    $(document).ready(function(){
        var chart = c3.generate({
            bindto: '#chart-area-step', // id of chart wrapper
            data: {
                columns: [
                    // each columns data
                    ['data1', 11, 8, 15, 18, 19, 17],
                    ['data2', 7, 7, 5, 7, 9, 12]
                ],
                type: 'area-step', // default type of chart
                colors: {
                    'data1': lucid.colors["blue"],
                    'data2': lucid.colors["pink"]
                },
                names: {
                    // name of each serie
                    'data1': 'Maximum',
                    'data2': 'Minimum'
                }
            },
            axis: {
                x: {
                    type: 'category',
                    // name of each category
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                },
            },
            legend: {
                show: true, //hide legend
            },
            padding: {
                bottom: 0,
                top: 0
            },
        });
    });
    $(document).ready(function(){
        var chart = c3.generate({
            bindto: '#chart-bar', // id of chart wrapper
            data: {
                columns: [
                    // each columns data
                    ['data1', 11, 8, 15, 18, 19, 17],
                    ['data2', 7, 7, 5, 7, 9, 12]
                ],
                type: 'bar', // default type of chart
                colors: {
                    'data1': lucid.colors["blue"],
                    'data2': lucid.colors["pink"]
                },
                names: {
                    // name of each serie
                    'data1': 'Maximum',
                    'data2': 'Minimum'
                }
            },
            axis: {
                x: {
                    type: 'category',
                    // name of each category
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                },
            },
            bar: {
                width: 16
            },
            legend: {
                show: true, //hide legend
            },
            padding: {
                bottom: 0,
                top: 0
            },
        });
    });
    $(document).ready(function(){
        var chart = c3.generate({
            bindto: '#chart-bar-rotated', // id of chart wrapper
            data: {
                columns: [
                    // each columns data
                    ['data1', 11, 8, 15, 18, 19, 17],
                    ['data2', 7, 7, 5, 7, 9, 12]
                ],
                type: 'bar', // default type of chart
                colors: {
                    'data1': lucid.colors["blue"],
                    'data2': lucid.colors["pink"]
                },
                names: {
                    // name of each serie
                    'data1': 'Maximum',
                    'data2': 'Minimum'
                }
            },
            axis: {
                x: {
                    type: 'category',
                    // name of each category
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                },
                rotated: true,
            },
            bar: {
                width: 16
            },
            legend: {
                show: true, //hide legend
            },
            padding: {
                bottom: 0,
                top: 0
            },
        });
    });
    $(document).ready(function(){
        var chart = c3.generate({
            bindto: '#chart-bar-stacked', // id of chart wrapper
            data: {
                columns: [
                    // each columns data
                    ['data1', 11, 8, 15, 18, 19, 17],
                    ['data2', 7, 7, 5, 7, 9, 12]
                ],
                type: 'bar', // default type of chart
                groups: [
                    [ 'data1', 'data2']
                ],
                colors: {
                    'data1': lucid.colors["blue"],
                    'data2': lucid.colors["pink"]
                },
                names: {
                    // name of each serie
                    'data1': 'Maximum',
                    'data2': 'Minimum'
                }
            },
            axis: {
                x: {
                    type: 'category',
                    // name of each category
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                },
            },
            bar: {
                width: 16
            },
            legend: {
                show: true, //hide legend
            },
            padding: {
                bottom: 0,
                top: 0
            },
        });
    });
    $(document).ready(function(){
        var chart = c3.generate({
            bindto: '#chart-pie', // id of chart wrapper
            data: {
                columns: [
                    // each columns data
                    ['data1', 63],
                    ['data2', 44],
                    ['data3', 12],
                    ['data4', 14]
                ],
                type: 'pie', // default type of chart
                colors: {
                    'data1': lucid.colors["blue-darker"],
                    'data2': lucid.colors["blue"],
                    'data3': lucid.colors["blue-light"],
                    'data4': lucid.colors["blue-lighter"]
                },
                names: {
                    // name of each serie
                    'data1': 'A',
                    'data2': 'B',
                    'data3': 'C',
                    'data4': 'D'
                }
            },
            axis: {
            },
            legend: {
                show: true, //hide legend
            },
            padding: {
                bottom: 0,
                top: 0
            },
        });
    });
    $(document).ready(function(){
        var chart = c3.generate({
            bindto: '#chart-donut', // id of chart wrapper
            data: {
                columns: [
                    // each columns data
                    ['data1', 63],
                    ['data2', 37]
                ],
                type: 'donut', // default type of chart
                colors: {
                    'data1': lucid.colors["green"],
                    'data2': lucid.colors["green-light"]
                },
                names: {
                    // name of each serie
                    'data1': 'Maximum',
                    'data2': 'Minimum'
                }
            },
            axis: {
            },
            legend: {
                show: true, //hide legend
            },
            padding: {
                bottom: 0,
                top: 0
            },
        });
    });
    $(document).ready(function(){
        var chart = c3.generate({
            bindto: '#chart-scatter', // id of chart wrapper
            data: {
                columns: [
                    // each columns data
                    ['data1', 11, 8, 15, 18, 19, 17],
                    ['data2', 7, 7, 5, 7, 9, 12]
                ],
                type: 'scatter', // default type of chart
                colors: {
                    'data1': lucid.colors["blue"],
                    'data2': lucid.colors["pink"]
                },
                names: {
                    // name of each serie
                    'data1': 'Maximum',
                    'data2': 'Minimum'
                }
            },
            axis: {
                x: {
                    type: 'category',
                    // name of each category
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                },
            },
            legend: {
                show: true, //hide legend
            },
            padding: {
                bottom: 0,
                top: 0
            },
        });
    });
    $(document).ready(function(){
        var chart = c3.generate({
            bindto: '#chart-combination', // id of chart wrapper
            data: {
                columns: [
                    // each columns data
                    ['data1', 30, 20, 50, 40, 60, 50],
                    ['data2', 200, 130, 90, 240, 130, 220],
                    ['data3', 300, 200, 160, 400, 250, 250],
                    ['data4', 200, 130, 90, 240, 130, 220]
                ],
                type: 'bar', // default type of chart
                types: {
                    'data2': "line",
                    'data3': "spline",
                },
                groups: [
                    [ 'data1', 'data4']
                ],
                colors: {
                    'data1': lucid.colors["green"],
                    'data2': lucid.colors["pink"],
                    'data3': lucid.colors["green"],
                    'data4': lucid.colors["blue"]
                },
                names: {
                    // name of each serie
                    'data1': 'Development',
                    'data2': 'Marketing',
                    'data3': 'Sales',
                    'data4': 'Sales'
                }
            },
            axis: {
                x: {
                    type: 'category',
                    // name of each category
                    categories: ['2013', '2014', '2015', '2016', '2017', '2018']
                },
            },
            bar: {
                width: 16
            },
            legend: {
                show: true, //hide legend
            },
            padding: {
                bottom: 0,
                top: 0
            },
        });
    });
});
