let input = 'turpentine and turtles';
const vowels = ['a','e','i','o','u'];
let resultArray = [];

for(let inputIndex = 0; inputIndex < input.length; inputIndex++){
//console.log(`input index is ${inputIndex}.`);
if(input[inputIndex]==='e'){
  resultArray.push(input[inputIndex])
}
if(input[inputIndex]==='u'){
  resultArray.push(input[inputIndex])
}
  for(let vowelIndex=0; vowelIndex < vowels.length; vowelIndex++){
  //console.log(`vowel index is ${vowelIndex}.`);
    if(input[inputIndex] === vowels[vowelIndex]){
        resultArray.push(input[inputIndex]);
      }
    }
}
console.log(resultArray)
const resultString = resultArray.join('').toUpperCase();
console.log(resultString)