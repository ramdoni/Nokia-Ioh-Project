// Guage Default
defaultGauge = new Gauge(document.getElementById("gauge-default"));
defaultGauge.setTextField(document.getElementById("default-textfield"));
defaultGauge.maxValue = 3000;
defaultGauge.set(1222);

// Gauge Donut
donutGauge = new Donut(document.getElementById("gauge-donut"));
donutGauge.setTextField(document.getElementById("donut-textfield"));
donutGauge.maxValue = 3000;
donutGauge.set(1333);

// Zones
zoneGauge = new Gauge(document.getElementById("gauge-zone"));
var opts = {
    angle: -0.25,
    lineWidth: 0.2,
    radiusScale:0.9,
    pointer: {
        length: 0.6,
        strokeWidth: 0.03,
        color: '#000000'
    },
    staticLabels: {
        font: "10px sans-serif",
        labels: [200, 500, 2100, 2800],
        fractionDigits: 0
    },
    staticZones: [
        {strokeStyle: "#F03E3E", min: 0, max: 200},
        {strokeStyle: "#FFDD00", min: 200, max: 500},
        {strokeStyle: "#30B32D", min: 500, max: 2100},
        {strokeStyle: "#FFDD00", min: 2100, max: 2800},
        {strokeStyle: "#F03E3E", min: 2800, max: 3000}
    ],
    limitMax: false,
    limitMin: false,
    highDpiSupport: true
}
zoneGauge.setOptions(opts);
zoneGauge.setTextField(document.getElementById("zone-textfield"));
zoneGauge.minValue = 0;
zoneGauge.maxValue = 3000;
zoneGauge.set(1444);

// 
stepGauge = new Gauge(document.getElementById("gauge-step"));
var bigFont = "14px sans-serif";
var opts = {
    angle: 0.1,
    radiusScale:0.8,
    lineWidth: 0.2,
    pointer: {
        length: 0.6,
        strokeWidth: 0.03,
        color: '#000000'
    },
    staticLabels: {
        font: "10px sans-serif",
        labels: [{label:200, font: bigFont}, 
        {label:750}, 
        {label:1500}, 
        {label:2250}, 
        {label:3000}, 
        {label:3500, font: bigFont}],
        fractionDigits: 0
    },
    staticZones: [
        {strokeStyle: "rgb(255,0,0)", min: 0, max: 500, height: 1.2},
        {strokeStyle: "rgb(200,100,0)", min: 500, max: 1000, height: 1.1},
        {strokeStyle: "rgb(150,150,0)", min: 1000, max: 1500, height: 1},
        {strokeStyle: "rgb(100,200,0)", min: 1500, max: 2000, height: 0.9},
        {strokeStyle: "rgb(0,255,0)", min: 2000, max: 3100, height: 0.8},
        {strokeStyle: "rgb(80,255,80)", min: 3100, max: 3500, height: 0.7},
        {strokeStyle: "rgb(130,130,130)", min: 2470, max: 2530, height: 1}        
    ],
    limitMax: false,
    limitMin: false,
    highDpiSupport: true,
    renderTicks: {
        divisions: 5,
        divWidth: 1.1,
        divLength: 0.7,
        divColor: '#333333',
        subDivisions: 3,
        subLength: 0.5,
        subWidth: 0.6,
        subColor: '#666666'
      }
};
stepGauge.setOptions(opts);
//document.getElementById("preview-textfield").className = "preview-textfield"; 
stepGauge.setTextField(document.getElementById("step-textfield"));
stepGauge.minValue = 0;
stepGauge.maxValue = 3500;
stepGauge.set(2222);
