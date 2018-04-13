// var numArray = [52,79,33,1,108, 689789797,32435446,5675757,23424,4567890,1234567890,098765432];
// var ascendingOrder = function( a, b){
//     return a - b ;
// };
// var descendingOrder = function( a, b){
//     return b - a ;
// };
// console.log (numArray.sort(ascendingOrder));
// console.log (numArray.sort(descendingOrder));

var numArray = [30,99,48,334,55,566];

var copiedArray = function (someArray){

  var newArray =[];

    for (var i= 0 ; i < someArray.length; i++){
        newArray.push(someArray[i]);
}
return newArray.reverse();
};

var reversedArray = copiedArray(numArray);