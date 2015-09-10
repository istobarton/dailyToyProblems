//Good article on Array.sort() http://www.javascriptkit.com/javatutors/arraysort.shtml

function largestPairSum(numbers){
    var sortFunc = function(a, b){
        return a-b
    }
    
    var sortArr = numbers.sort(sortFunc);
    
    return sortArr[sortArr.length-1] + sortArr[sortArr.length-2]
}