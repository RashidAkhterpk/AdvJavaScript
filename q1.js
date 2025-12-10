let mark1 = +prompt("Enter Marks 1");
let mark2 = +prompt("Enter Marks 2");
let mark3 = +prompt("Enter Marks 3");
let mark4 = +prompt("Enter Marks 4");
let mark5 = +prompt("Enter Marks 5");

// function calculate(){
// let mark1 = document.getElementById("mark1.value")
// let mark2 = document.getElementById("mark2.value")
// let mark3 = document.getElementById("mark3.value")
// let mark4 = document.getElementById("mark4.value")
// let mark5 = document.getElementById("mark5.value")

let MrkObtn = mark1 + mark2 + mark3 + mark4 + mark5

const TotMark = 500

const Prcnt = (MrkObtn / TotMark) * 100;



Prcnt > 100 ?
document.write(`<h1>Invalid Output, enter marks between 1 and 100`)
:Prcnt >= 81 && Prcnt <= 100 ?
document.write(`<h1>Marks Sheet</h1><br>Total Marks: ${TotMark}<br>Marks Obtained: ${MrkObtn}<br>Percentage: ${Math.round(Prcnt,2)}%<br>Grade: A+<br>Remarks: Excellent`)
:Prcnt >= 71 && Prcnt <= 80 ?
document.write(`<h1>Marks Sheet</h1><br>Total Marks: ${TotMark}<br>Marks Obtained: ${MrkObtn}<br>Percentage: ${Math.round(Prcnt,2)}%<br>Grade: A<br>Remarks: Weldone`)
:Prcnt >= 61 && Prcnt <= 70 ?
document.write(`<h1>Marks Sheet</h1><br>Total Marks: ${TotMark}<br>Marks Obtained: ${MrkObtn}<br>Percentage: ${Math.round(Prcnt,2)}%<br>Grade: B<br>Remarks: Good`)
:Prcnt >= 51 && Prcnt <= 60 ?
document.write(`<h1>Marks Sheet</h1><br>Total Marks: ${TotMark}<br>Marks Obtained: ${MrkObtn}<br>Percentage: ${Math.round(Prcnt,2)}%<br>Grade: C<br>Remarks: Better But Need More Attention`)
:Prcnt >= 41 && Prcnt <= 50 ?
document.write(`<h1>Marks Sheet</h1><br>Total Marks: ${TotMark}<br>Marks Obtained: ${MrkObtn}<br>Percentage: ${Math.round(Prcnt,2)}%<br>Grade: D<br>Remarks: Need Improvement`)
:document.write(`<h1>Marks Sheet</h1><br>Total Marks: ${TotMark}<br>Marks Obtained: ${MrkObtn}<br>Percentage: ${Math.round(Prcnt,2)}%<br>Grade: Failed<br>Remarks: Better Luck Next Time`)
// }

