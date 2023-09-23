const chartData = {
   labels: ['Loan Amount', 'Total Interst'],
   data: [20, 15],
};

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
   type: 'doughnut',
   data: {
      labels: chartData.labels,
      datasets: [
         {
            data: chartData.data,
            backgroundColor: [
               'rgb(0, 23, 50)',
               'rgb(156,161,172)'
            ],
            hoverOffset: 4,
         },
      ],
   },
   options: {
      plugins: {
         legend: {
            display: false,
         }
      }
   },
});
const graphData = {
   labels: [1, 2, 3, 4, 5, 6, 7],
   data: [20, 15],
};

var ctxx = document.getElementById('myGraph');
var myGraph = new Chart(ctxx, {
   type: 'line',
   data: {
      labels: graphData.labels,
      datasets: [
         {
            data: graphData.data,
            backgroundColor: 'rgb(156,161,172)',
            borderColor: 'rgb(0, 23, 50)',
            hoverOffset: 4,
         },
      ],
   },
   options: {
      plugins: {
         legend: {
            display: false
         }
      }
   },
});