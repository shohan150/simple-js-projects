
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
   type: 'doughnut',
   data: {
      labels: ['Loan Amount', 'Total Interest'],
      datasets: [
         {
            data: [50000, 7500],
            backgroundColor: [
               'rgb(0, 23, 50)',
               'rgb(156,161,172)'
            ],
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

function updateChart() {

   const chartLoanComma = showLoanAmount.innerHTML;
   const chartLoan = chartLoanComma.replace(/,/g, '');;
   const chartInterestComma = totalInterestAmount.innerHTML;
   const chartInterest = chartInterestComma.replace(/,/g, '');
   console.log(chartLoan);
   console.log(chartInterest);
   // const chartData = {
   //    labels: ['Loan Amount', 'Total Interst'],
   //    data: [chartLoan, chartInterest],
   // };
   myChart.data.datasets[0].data = [chartLoan, chartInterest];
   myChart.update();

};
// graphChart();
