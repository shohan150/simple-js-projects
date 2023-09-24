const loanAmount = document.getElementById('loan-amount');
const loanAmountNumber = document.getElementById('loan-amount-in-numbers');
const loanTerm = document.getElementById('loan-term');
const loanTermNumber = document.getElementById('loan-term-in-numbers');
const loanInterest = document.getElementById('loan-interest');
const loanInterestNumber = document.getElementById('loan-interest-in-numbers');
const balloonPayment = document.getElementById('balloon-payment');

function numberWithCommas(x) {
   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

   // toString(): This method is called on a number to convert it into a string. By converting the number to a string, we can manipulate its characters.

   // .replace(): This is a JavaScript string method used to replace text within a string. In this case, it's used to replace a specific pattern with commas.

   // /.../g: This part is a regular expression (regex) pattern that specifies what should be replaced in the string. The g flag at the end indicates that it should be applied globally (i.e., replace all occurrences).

   // /: Delimiters indicating the start and end of the regular expression pattern.
   // \B: A zero-width non-word boundary. It matches a position where the previous and next characters are either both word characters (letters, digits, or underscores) or both non-word characters (anything other than word characters). It's used to ensure that commas are added between digits and not at the beginning or end of the string.
   // (?= ... ): This is a positive lookahead assertion. It's used to look ahead in the string to find positions that meet certain conditions.
   // (\d{3})+: This part within the positive lookahead asserts that there should be groups of three digits. Let's break it down further:
   // \d: Matches any digit (0-9).
   // {3}: Specifies that exactly three digits should be matched together.
   // (\d{3})+: This part allows for one or more groups of three digits to be matched together. It's looking for sequences like "123," "456," "789," etc.
   // (?!\d): This is a negative lookahead assertion. It's used to ensure that after the groups of three digits, there should not be another digit immediately following. In other words, it checks that we're not in the middle of a larger number.
}


function fetchLoanAmount() {
   const rawLoanAmount = loanAmount.value;
   const formattedLoanAmount = numberWithCommas(rawLoanAmount);

   loanAmountNumber.value = formattedLoanAmount;
   // console.log(loanAmountNumber);
   showTheValues();
}
function textToRange(x, y) {
   x.value = y.value;
   showTheValues();
}

function fetchLoanTerm(x, y) {
   x.value = y.value;
   // console.log(loanAmountNumber);
   showTheValues();
}

// balloonPayment.addEventListener('focusout', () => {
//    balloonAlert();
// });

function loanAmountAlert() {
   if (loanAmountNumber.value > 500000 || loanAmountNumber.value < 5000) {
      alert('Loan amount must be in the range from 5,000 to 500,000');
      return false;
   }
   return true;
}

function loanTermAlert() {
   if (loanTermNumber.value > 8 || loanTermNumber.value < 2) {
      alert('Loan term must be in the range from 2 to 8 year');
      return false;
   }
   return true;
}
function InterestRateAlert() {
   if (loanInterestNumber.value > 40 || loanInterestNumber.value < 2) {
      alert('Interest rate must be in the range from 1% to 40%');
      return false;
   }
   return true;
}
function balloonAlert() {
   if (balloonPayment.value > 50 || balloonPayment.value < 0) {
      alert('Ballon rate must be in the range from 0% to 50%');
      return false;
   }
   return true;
}



const firstPayMonth = document.getElementById('first-payment-month');
const firstPayYear = document.getElementById('first-payment-year');
const today = new Date;

firstPayMonth.value = today.getMonth();
firstPayYear.value = today.getFullYear();


const showLoanAmount = document.getElementById('show-loan-amount');
const totalInterestAmount = document.getElementById('total-interest-amount');
const totalLoanAmount = document.getElementById('total-loan-amount');
const balloonAmount = document.getElementById('balloon-amount');
const firstPayoffMonth = document.getElementById('first-month');
const firstPayoffYear = document.getElementById('first-year');

function showTheValues() {
   showLoanAmount.innerHTML = loanAmountNumber.value;
   const interestCalculator = loanInterestNumber.value * loanTermNumber.value;
   const noCommaLoanAmount = loanAmountNumber.value.replace(/,/g, '');
   const loanAmountOnePercentage = parseFloat(noCommaLoanAmount);
   const loanAmountOnePercentageAmount = loanAmountOnePercentage / 100;
   const totalInterestNumberString = (interestCalculator * loanAmountOnePercentageAmount).toFixed(2);
   const totalInterestNumber = parseFloat(totalInterestNumberString);
   totalInterest = numberWithCommas(totalInterestNumber)
   totalInterestAmount.innerHTML = totalInterest;
   totalLoanAmount.innerHTML = numberWithCommas(loanAmountOnePercentage + totalInterestNumber);
};

function balloonValue() {
   showLoanAmount.innerHTML = loanAmountNumber.value;
   const interestCalculator = loanInterestNumber.value * loanTermNumber.value;
   const noCommaLoanAmount = loanAmountNumber.value.replace(/,/g, '');
   const loanAmountOnePercentage = parseFloat(noCommaLoanAmount);
   const loanAmountOnePercentageAmount = loanAmountOnePercentage / 100;
   const showBalloon = parseFloat(balloonPayment.value);
   const another = showBalloon * loanAmountOnePercentageAmount;
   balloonAmount.innerHTML = another;
}

function payOffComplete() {
   const monthNames = [
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
   ];
   // const firstMonth = parseFloat(firstPayMonth.value);
   firstPayoffMonth.innerHTML = monthNames[firstPayMonth.value];
   const endYear = parseFloat(firstPayYear.value) + parseFloat(loanTermNumber.value);
   firstPayoffYear.innerHTML = endYear;
}
payOffComplete();


const installmentAmount = document.getElementById('installment-amount');
const weeklyInstallment = document.getElementById('weekly');
const monthlyInstallment = document.getElementById('monthly');
const fortnightlyInstallment = document.getElementById('fortnightly');

function instAmount(x) {
   const totalLoanAmtString = totalLoanAmount.innerHTML;
   const totalLoanAmtNoComma = totalLoanAmtString.replace(/,/g, '');
   const totalLoanAmtNumber = parseFloat(totalLoanAmtNoComma).toFixed(2);
   const installmentAmt = parseFloat(totalLoanAmtNumber / x).toFixed(2);
   const installmentAmtWithComma = numberWithCommas(installmentAmt);
   // console.log(totalLoanAmtNumber);
   // console.log(installmentAmtWithComma);
   installmentAmount.innerHTML = installmentAmtWithComma;
}
instAmount(12);

function selectWeek() {
   weeklyInstallment.classList.add('active');
   monthlyInstallment.classList.remove('active');
   fortnightlyInstallment.classList.remove('active');
}
function selectFortnight() {
   fortnightlyInstallment.classList.add('active');
   monthlyInstallment.classList.remove('active');
   weeklyInstallment.classList.remove('active');
}
function selectMonth() {
   monthlyInstallment.classList.add('active');
   weeklyInstallment.classList.remove('active');
   fortnightlyInstallment.classList.remove('active');
}

function maintainDuration() {
   if (weeklyInstallment.classList.contains('active')) {
      instAmount(52);
   }
   if (fortnightlyInstallment.classList.contains('active')) {
      instAmount(24);
   }
   if (monthlyInstallment.classList.contains('active')) {
      instAmount(12);
   }
}
