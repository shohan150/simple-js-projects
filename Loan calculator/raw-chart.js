function updateChart() {
   const chartLoanComma = showLoanAmount.innerHTML;
   const chartLoan = parseFloat(chartLoanComma.replace(/,/g, ''));
   const chartInterestComma = totalInterestAmount.innerHTML;
   const chartInterest = parseFloat(chartInterestComma.replace(/,/g, ''));
   console.log(chartLoan);
   console.log(chartInterest);

   var doughnutData = [
      {
         value: chartLoan,
         color: '#001732'
      }, {
         value: chartInterest,
         color: '#f4f4f4'
      }
   ];

   var myChart = new Chart(document.getElementById('myChart').getContext("2d")).Doughnut(doughnutData);


   var lineData =
   {
      labels: ['1', '2', '3', '4', '5'],
      datasets: [
         {
            fillColor: '#f2f2f2',
            strokeColor: '#001732',
            pointColor: '#001732',
            data: [10, 20, 20, 40, 50]
         }
      ]
   };

   var myGraph = new Chart(document.getElementById('myGraph').getContext("2d")).Line(lineData);

}
updateChart();

const graphView = document.getElementById('graph');
const chartView = document.getElementById('chart');
const graph = document.getElementById('myGraph');
const chart = document.getElementById('myChart');

graph.style.display = 'none';

function showChart() {
   graphView.classList.add("btn-act");
   chartView.classList.remove("btn-act");
   graph.style.display = 'none';
   chart.style.display = 'block';

}
function showGraph() {
   chartView.classList.add("btn-act");
   graphView.classList.remove("btn-act");
   chart.style.display = 'none';
   graph.style.display = 'block';
}