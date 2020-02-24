/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */

function mysteryRange(str,n) {
    var array2=[];
    var array3=[];
    var array=str.split('')
    for(var i=0; i<array.length; i++){
        if(array[i] === '1' && i!==array.length-1){
            var c=array[i]+array[i+1]
            array2.push(c)
            i++;
        }else if(array[i] !== '1'){
            array2.push(array[i])
        }else if(array[i] === '1' && i===array.length-1){
            array2.push(array[i]);
        }
    }
    array3.push(min(array2),max(array2));
    return array3;
}

function max(array){
    var max=parseInt(array[0],10)
    for(var i=1; i<array.length; i++){
        if(parseInt(array[i],10)>max){
            max=parseInt(array[i],10)
        }
    }
    return max
}
 function min(array){
    var min=parseInt(array[0],10)
    for(var i=1; i<array.length; i++){
        if(parseInt(array[i],10)<min){
            min=parseInt(array[i],10)
        }
    }
    return min
}