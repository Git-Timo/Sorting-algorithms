// Data retrieved from https://www.yr.no/nb
Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Average temperature, 2021'
    },
    yAxis: {
        title: {
            text: 'Temperature °C'
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Oslo',
        data: [
            -5.0, -3.6, 3.3, 5.8, 10.6, 17.3, 20.0, 16.5, 13.4, 9.1, 2.9, -3.1, 20.0, 16.5, 13.4, 9.1, 2.9, -3.1, 20.0, 16.5, 13.4, 9.1, 2.9, -3.1, 20.0, 16.5, 13.4, 9.1, 2.9, -3.1, 20.0, 16.5, 13.4, 9.1, 2.9, -3.1, 20.0, 16.5, 13.4, 9.1, 2.9, -3.1, 20.0, 16.5, 13.4, 9.1, 2.9, -3.1, 20.0, 16.5, 13.4, 9.1, 2.9, -3.1, 100]
    } ]
});

