//1
function sumOfFourAndSix(){
  let sum = 0;
  for(let i = 1; i <= 1000; i++){
      if(i % 4 === 0 && i % 6 === 0){
          sum += i;
      }
  } return sum;
}
console.log(sumOfFourAndSix());
//2
function oddAndEvenInFifteen(){
  for(let i = 0; i <= 15; i++){
      if(i % 2 === 0){
          console.log(`${i} is even`)
      }else{
          console.log(`${i} is odd`)
      }
  }
}
oddAndEvenInFifteen();
//3
function assignGrade(num){
  if(num > 90){
    return "A"
  }else if(num > 80){
    return "B"
  }else if(num > 70){
    return "c"
  }else if(num > 65){
    return "D"
  }else{
    return "F"
  }
}
console.log(assignGrade(74));





