const graphView = document.getElementById('graph');
const chartView = document.getElementById('chart');
const graph = document.getElementById('myGraph');
const chart = document.getElementById('myChart');

chart.style.display = 'none';

function showChart() {
   graphView.classList.add("btn-act");
   chartView.classList.remove("btn-act");
   graph.style.display = 'block';
   chart.style.display = 'none';

}
function showGraph() {
   chartView.classList.add("btn-act");
   graphView.classList.remove("btn-act");
   chart.style.display = 'block';
   graph.style.display = 'none';
}


function updateChart() {
   const chartLoanComma = showLoanAmount.innerHTML;
   const chartLoan = parseFloat(chartLoanComma.replace(/,/g, ''));
   const chartInterestComma = totalInterestAmount.innerHTML;
   const chartInterest = parseFloat(chartInterestComma.replace(/,/g, ''));
   // console.log(chartLoan);
   // console.log(chartInterest);

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

   //=============================================




   const lab = [];
   const data = [];
   const gLoan = parseFloat(showLoanAmount.innerHTML.replace(/,/g, ''));



   // console.log(gLoan);
   // console.log(typeof (gLoan));

   function showGraphValues(x) {
      const gInterest = parseFloat((loanInterestNumber.value * x) / 100).toFixed(2);
      const totalAmt = gLoan + gInterest * gLoan;
      return totalAmt;
   };

   var y = 0;
   var loopNumber = parseFloat(loanTermNumber.value);
   while (y < loopNumber) {
      lab.push(loopNumber);
      data.push(showGraphValues(loopNumber));
      loopNumber--;
   }

   // console.log(lab);
   // console.log(data);





   //==============================================

   var lineData =
   {
      labels: lab,
      datasets: [
         {
            fillColor: '#fff0',
            strokeColor: '#001732',
            pointColor: '#001732',
            data: data,
            tension: 0.5,
         },

      ],
   };
   var options = {
      bezierCurve: false
   };

   var myGraph = new Chart(document.getElementById('myGraph').getContext("2d")).Line(lineData, options);

}
updateChart();

