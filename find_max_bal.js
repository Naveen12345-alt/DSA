// We have a list of account balances that are first increasing and then decreasing. Find the maximum account balance. Assume in a given set of balances, there’s only one peak i.e once the balance starts decreasing it doesn’t increase again.

// E.g
// Input:
// [
//  	{ date: ‘2023-01-30’, balance: 10000 },
// { date: ‘2023-02-03’, balance: 12300 },
// { date: ‘2023-02-04’, balance: 13000 },
// { date: ‘2023-03-02’, balance: 1000 },
// { date: ‘2023-04-08’, balance: -1000 },
// ]

//1,2,3,4,3
//mid=3
//elem[mid]-elem[mid-1]==>+ && elem[mid+1]-elem[mid] ==>-

function findMaxBalance(balanceInput) {
  const maxBalance = Number.MIN_SAFE_INTEGER;

  for (let index = 0; index < balanceInput.length; index++) {
    const element = balanceInput[index];
    if (element.balance < maxBalance) {
      return maxBalance;
    }
    if (element.balance > maxBalance) {
      maxBalance = element.balance;
    }
  }

  return maxBalance;
}

function binaryFindMaxBalance(balanceList) {
  let left = 0;
  let right = balanceList.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const elemBalance = balanceList[mid].balance;
    let leftSlope = null,
      rightSlope = null;
    if (mid - 1 >= 0) {
      leftSlope = elemBalance - balanceList[mid - 1].balance;
    }
    if (mid + 1 <= balanceList.length - 1) {
      rightSlope = balanceList[mid + 1].balance - elemBalance;
    }

    // if (leftSlope && rightSlope) {
      if (leftSlope > 0 && rightSlope > 0) {
        left = mid + 1;
      } else if (leftSlope < 0 && rightSlope < 0) {
        right = mid - 1;
      } else {
        console.log(elemBalance, "Max balance");
        return;
      }
    // }
  }
}

binaryFindMaxBalance([
  { date: "2023-01-30", balance: 7000000 },
  { date: "2023-02-03", balance: 12300000 },
  { date: "2023-02-04", balance: 110000000 },
  { date: "2023-03-02", balance: 1000000000 },
  { date: "2023-04-08", balance: 800000000 },
]);
