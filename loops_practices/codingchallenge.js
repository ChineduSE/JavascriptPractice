const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  
  /* Write your code below. Good luck! 🙂 */
  
  const bills = [22,295,176,440,37,105,10,1100,86,52];
  const tips = [];
  const totals = [];
  
  for(let i=0;i<10; i++){
      tips.push(calcTip(bills[i]));
      totals.push(calcTip(bills[i]) + bills[i]);
  }
  console.log(tips);
  console.log(totals);

const calcAverage = function(arr){
let sum = 0;
    for (let add = 0; add < arr.length; add++){
    sum = sum + arr[add];
    }
    return sum/arr.length;
}
// console.log(sum);
console.log(calcAverage(totals));