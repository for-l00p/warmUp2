// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .
function reverse(str) {
    var arr=str.split(' ');
    var str2=''
    for(var i=arr.length-1; i>=0; i--) {
        str2=str2+' '+arr[i];
    }
    return str2;
}