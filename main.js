
const ctx = document.querySelector('#chartbirdspicieskilled').getContext('2d');
ctx.canvas.width = 1
ctx.canvas.height = 1
const chartbirdspicieskilled = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Mourning dove', 'killdeer', 'Barn swallow', 'American kestrel', 'Gulls', 'Horned lark', 'European starling', 'Sparrows', 'Rock pigeon', 'Eastern meadowlark'],
            datasets: [{
                label: "Mourning dove",
                data: [13396, 8830, 8707, 8104, 7290, 7204, 5809, 4026, 3990, 3826],
                backgroundColor: ["red", "green", "green", "green", "green", "green", "green", "green", "green", "green"],
            }]
        },
        options: {
            scales: {
                y: {
                    title: {
                        display: true,
                        text: "Number of birds killed"
                    },
                }
            },
            plugins: {

                title: {
                    display: true,
                    text: "Most killed bird species by airplanes"
                }
            },

            },

        }



);


const ctx2 = document.querySelector('#chartbirdstrikesyearly').getContext('2d');
ctx2.canvas.width = 1
ctx2.canvas.height = 1
const chartbirdstrikesyearly = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['1990', '1995', '2000', '2005', '2010', '2015', '2020', '2021', '2022'],
        datasets: [{
            label: 'Birdstrikes yearly',
            data: [2105, 2821, 6002, 7235, 9899, 10109, 11622, 15593, 8362],
            borderColor: ['red'],
        },
            {
                label: 'Pilots warned',
                data: [373, 506, 711, 994, 2421, 2398, 1529, 2428, 1420],
                borderColor: ["lightblue"],
            }]

    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Year 1990-2022'
                },
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                position: "bottom"
            },
            title: {
                display: true,
                text: 'Birdstrikes Yearly & Pilots warned'
            }
        }
    },
})
const ctx3 = document.querySelector('#chartphaseofflight').getContext('2d');
ctx3.canvas.width = 1
ctx3.canvas.height = 1
const chartphaseofflight = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['Approach', 'landing Roll', 'Take-off Run', 'Climb', 'En Route', 'Departure', 'Descent', 'Local', 'Arrival', 'Taxi','Parked'],
            datasets: [{
                label: "Approach",
                data: [70073, 30098, 28542, 25542, 4947, 2384, 2138, 953, 681, 618, 107],
                backgroundColor: ["blue", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "green","yellow"],
            }]
        },
        options: {
            scales: {
                y: {
                    title: {
                        display: true,
                        text: "Number of incidents"
                    },
                }
            },
            plugins: {

                title: {
                    display: true,
                    text: "Phase of flight with the most incidents"
                }
            },

        },

    }



);

const ctx4 = document.querySelector('#chartAOS').getContext('2d');
ctx4.canvas.width = 1
ctx4.canvas.height = 1
const chartAOS = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: ['1990', '1995', '2000', '2005', '2010', '2015', '2020', '2021', '2022'],
        datasets: [{
            label: 'Hours of downtime',
            data: [56, 96, 195, 88, 66, 50, 34, 86, 51],
            borderColor: ['red'],
        },
        ]

    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Year 1990-2022'
                },
                grid: {
                    display: false
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Hours'
                },
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                position: "bottom"
            },
            title: {
                display: true,
                text: 'Aircraft out of service due to birdstrikes'
            }
        }
    },
});

const ctx5 = document.querySelector('#charteffects').getContext('2d');
ctx5.canvas.width = 2
ctx5.canvas.height = 2
const charteffects = new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ['Precautionary Landing', 'Aborted Take-off', 'Engine shutdown', 'Avoidance maneuver'],
        datasets: [{
            label: 'Precautionary Landing',
            data: [7690, 2891, 2710, 487, 2708],
            backgroundColor: ['red', 'lightgrey', 'lightgrey', 'lightgrey', 'lightgrey', 'lightgrey']
        }],

    },
    options: {

        plugins: {
            title: {
                display: true,
                text: 'Effects of birdstrikes'
            }
        }
    },
});

