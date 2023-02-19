function pushFront(array, number){
    array.push(number)
    for(var i=array.length-1; i>0; i--){
        array[i] = array[i-1];
    }
    array[0] = number;
    return array;
    
} 

function popFront(array){
    var number = array[0];
    for (var i=0; i<array.length; i++){
        array[i] = array[i+1];
    }
    array.pop()
    console.log(array)
    return number
}

function insertAt(array, index,number){
    // var temp = index + (array.length+1-index)
    for(var i=array.length; i >= index; i--){
        array[i] = array[i-1]
        }
    array[index] = number
    return(array)
    }


console.log(pushFront([5,7,2,3],8))
console.log(popFront([0,5,10,15]))
console.log(insertAt([100,200,5], 2,311))
console.log(insertAt([9,33,7], 1,42))
