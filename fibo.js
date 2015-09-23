
0=>0
1=>1
2=>1
(112358)

base cases
0+0 = 0
0+1 = 1
1+1 = 2
1+2 = 3

//This is one solution for fibonacci. Room for improvement could come from not solving recursively. The issue with this recursive solution is that it is filling up memory with extra "fibo" calls. (Though not sure if this problem is reduced in ES6). 

//Advantages are that it is more intuitive to the reader.

var fibo = function(n){

	//base case
	if(n===0){
		return 0;
	}

	if(n===1){
		return 1;
	}

	return fibo(n-1) + fibo(n-2);
}

//Advantages less memory used, faster. 

//TAKE 2 for iterative solution
var fiboIto = function(n){
	var fibNum;
	var	fibNum1 = 0; 
	var	fibNum2 = 1;

		if(n===0){
			fibNum = 0;
		}

		if(n===1){
			fibNum = 1;
		}

	for(var i=2; i<=n; i++){
		fibNum  = fibNum1 + fibNum2; 
		fibNum1 = fibNum2;
		fibNum2 = fibNum; 
	}

	return fibNum 
}

