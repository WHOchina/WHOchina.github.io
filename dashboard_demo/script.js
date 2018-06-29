var ctx = document.getElementById("myChart");

var refresh_policy = function(mask) {
  mask = [1,0,1,0];
  total_policy = console.log(mask.reduce((a, b) => a + b, 0));
  setTimeout(function() { c1.checked = 1 ; c1.indeterminate = mask[0]}, 200)
  setTimeout(function() { c2.checked = 1 ; c2.indeterminate = mask[1]}, 500)
  setTimeout(function() { c3.checked = 1; c3.indeterminate = mask[2]}, 800)
  setTimeout(function() { c4.checked = 1; c4.indeterminate = mask[3]}, 1000)
  setTimeout(function() { document.getElementById("policy_score").classList.remove('hide') }, 1000)
}
window.onload = refresh_policy;

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
      label: '',
      backgroundColor: "rgba(255, 153, 0, 0.26)",
      borderColor: "rgba(249, 178, 71, 0.76)",
      data: [0,0,0,0,0,0,0]

    }, {
      label: 'World Average',
      backgroundColor: "rgba(255, 153, 0, 0)",
      borderColor: "rgba(241, 100, 100, 1)",
      data: [6,6,6,6,6,6,6],
      borderDash: [5,5]
    }

  ]
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

     //blue buttons
    function set_beijing() {
        myChart.config.data.datasets[0].data = [10,2,3,4,7, 3, 10];
        myChart.config.data.datasets[0].label = "Beijing";
        document.getElementById('cityname1').innerHTML = 'Beijing';

        window.myChart.update()
    }
    function set_hangzhou() {
        myChart.config.data.datasets[0].data = [3,7,9,6,5,8,3];
        myChart.config.data.datasets[0].label = "Hangzhou";
        document.getElementById('cityname1').innerHTML = 'Hangzhou';
        mask = [0,0,0,0];
        window.myChart.update()
    }
    function set_chengdu() {
        myChart.config.data.datasets[0].data = [2,8,7,3,6,8,2];
        myChart.config.data.datasets[0].label = "Chengdu";
        document.getElementById('cityname1').innerHTML = 'Chengdu';
        window.myChart.update()
    }
    function set_shanghai() {
        myChart.config.data.datasets[0].data = [8,7,6,7,8, 6, 8];
        myChart.config.data.datasets[0].label = "Shanghai";
        document.getElementById('cityname1').innerHTML = 'Shanghai';
        window.myChart.update()
    }


    //orange buttons
    function set_beijing2() {
        myChart.config.data.datasets[1].data = [10,2,3,4,7,3,10];
        myChart.config.data.datasets[1].label = "Beijing";
        window.myChart.update()
    }
    function set_hangzhou2() {
        myChart.config.data.datasets[1].data = [3,7,9,6,5,8,3];
        myChart.config.data.datasets[1].label = "Hangzhou";
        window.myChart.update()
    }
    function set_chengdu2() {
        myChart.config.data.datasets[1].data = [2,8,7,3,6,8,2];
        myChart.config.data.datasets[1].label = "Chengdu";
        window.myChart.update()
    }
    function set_shanghai2() {
        myChart.config.data.datasets[1].data = [8,7,6,7,8, 6, 8];
        myChart.config.data.datasets[1].label = "Shanghai";
        window.myChart.update()
    }
    function set_none() {
        myChart.config.data.datasets[1].data = [0,0,0,0,0,0,0];
        myChart.config.data.datasets[1].label = "";
        window.myChart.update()
    }
