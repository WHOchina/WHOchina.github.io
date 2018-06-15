var ctx = document.getElementById("myChart");

var myChart = new Chart(ctx, {
  type: 'radar',

    data: {
    labels: ["Tobacco Free", "Age Friendly", "Road Safety", "Salt Reduction", "Primary Care"],
    datasets: [{
      label: 'Beijing',
      backgroundColor: "rgba(51, 151, 255, 0.4)",
      borderColor: "rgba(39, 78, 166, 1)",
      data: [9, 3, 3, 3, 7, 9]
    }, {
      label: 'Hangzhou',
      backgroundColor: "rgba(255,153,0,0.4)",
      borderColor: "rgba(255,153,0,1)",
      data: [3, 8, 9, 6, 5, 3]
    }]
  },
			options: {
				legend: {
					position: 'top',
				},
				title: {
					display: true,
					text: 'Chart.js Radar Chart'
				},
				scale: {
					ticks: {
						beginAtZero: true,
            max: 10
					}
				}
			}
		});
