function permutation(number) {
  const numberInteger = parseInt(number);

  const numberArray = number.split("").map((strNum) => parseInt(strNum));
  let numberArrayTemp = numberArray.slice();
  const numberArrayLength = numberArray.length;
  let possibleNumber = [];

  //get all possible combinations
  let tempNum = 0;

  for (let iOut = 0; iOut < numberArrayLength; iOut++) {
    for (let iIn = 0; iIn < numberArrayLength; iIn++) {
      numberArrayTemp = numberArray.slice();
      if (iOut !== iIn || true) {
        let temp = numberArrayTemp[iIn]
        numberArrayTemp[iIn] = numberArrayTemp[iOut]; //
        numberArrayTemp[iOut] = temp;
        possibleNumber.push(parseInt(numberArrayTemp.join("")));
      }
    }
  }
  console.log(possibleNumber.sort());

  //   const combinationsArray = [...new Set(
  //     possibleNumber.sort((a, b) => {
  //       return a - b;
  //     })
  //   )];
  //   console.log(combinationsArray.filter(x=>x>number));
  // console.log(combinationsArray);
}

permutation("218765"); // answer: 251678

//218765
//218756
//218576
//215876
//251876
//251867
//251687
//251678

// 534976
// 5349 67
// 534 697
// 53  4679
// 536479 ???

//1234

//4321
