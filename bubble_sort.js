/**
 * Created by user1 on 2014/8/6.
 */
var bubbleSort = function(arr){
    for(var i=0; i<arr.length; i++) {
        for(var j=0; j<arr.length-i; j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

var a=[4,3,5,2,7,8,6,1,0,9];
console.log(bubbleSort(a));