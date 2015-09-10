//Good article on Array.sort() http://www.javascriptkit.com/javatutors/arraysort.shtml

function largestPairSum(numbers){
    var sortFunc = function(a, b){
        return a-b
    }
    
    var sortArr = numbers.sort(sortFunc);
    
    return sortArr[sortArr.length-1] + sortArr[sortArr.length-2]
}


//CODE WARS
//http://www.codewars.com/kata/556196a6091a7e7f58000018/solutions/javascript

//Top Ranked Solution: 

function largestPairSum(numbers){
  numbers.sort(function(a, b){ return b - a });
  return numbers[0] + numbers[1];
}

//My solution was basically the same, my code could have improved by utilizing the sort function to improve the legibility of my return statement