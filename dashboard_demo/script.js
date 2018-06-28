var ctx = document.getElementById("myChart");

var myChart = new Chart(ctx, {
  type: 'radar',

    data: {
    labels: ["Tobacco Free", "Age Friendly", "Road Safety", "Salt Reduction", "Primary Care", "Environmental Health"],
    datasets: [{
      label: 'Beijing',
      backgroundColor: "rgba(51, 151, 255, 0.4)",
      borderColor: "rgba(39, 78, 166, 1)",
      data: [10,2,3,4,7, 3, 10]

    }, {
      label: 'Hangzhou',
      backgroundColor: "rgba(255,153,0,0.4)",
      borderColor: "rgba(255,153,0,1)",
      data: [3,7,9,6,5,8,3]
    }]
  },
			options: {
				legend: {
					position: 'top',
				},
				title: {
					display: true,
					text: ''
				},
				scale: {
					ticks: {
						beginAtZero: true,
            max: 10
					}
				}
			}
		});
