let loanAmount = document.getElementById('loan-amount');
let loanAmountNumber = document.getElementById('loan-amount-in-numbers');
let loanTerm = document.getElementById('loan-term');
let loanTermNumber = document.getElementById('loan-term-in-numbers');
let loanInterest = document.getElementById('loan-interest');
let loanInterestNumber = document.getElementById('loan-interest-in-numbers');
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
}
function textToRange(x, y) {
   x.value = y.value;
}

function fetchLoanTerm(x, y) {
   x.value = y.value;
   // console.log(loanAmountNumber);
}

function balloonAlert() {
   if (balloonPayment.value > 50 || balloonPayment.value < 0) {
      alert('Ballon rate must be in the range from 0% to 50%');
   }
}

const firstPayMonth = document.getElementById('first-payment-month');
const firstPayYear = document.getElementById('first-payment-year');
const today = new Date;
console.log(today);

firstPayMonth.value = today.getMonth();
firstPayYear.value = today.getFullYear();

console.log(today.getMonth());
