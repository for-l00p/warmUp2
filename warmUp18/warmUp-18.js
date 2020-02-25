/* 1. Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

        Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

        Example:

            solution('XXI'); // should return 21

        Help:

            Symbol    Value
            I          1
            V          5
            X          10
            L          50
            C          100
            D          500
            M          1,000 
            */
           function roman(str) {
            var year=0;
            var i=0;
            var obj={I:1, V:5, X:10, L:50, C:100, D:500, M:1000}
            while(i<str.length){
                console.log(i)
                for(var key in obj) {
                    if(str[i]===key && obj[str[i]]>obj[str[i+1]]) {
                        year+=obj[str[i]]
                        i++;
                    }else if(str[i]===key && obj[str[i]]<obj[str[i+1]]) {
                        console.log(obj[str[i]],obj[str[i+1]])
                        year+=(obj[str[i+1]]-obj[str[i]])
                        i=i+2
                    }else if(str[i]===key && str[i]===str[i+1]) {
                        year+=obj[str[i]]*2
                        i=i+2
                    }
                }
            }
            return year
        }
/*
    2. Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
        Examples:

        toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

        toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
    
    3. In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
        Example

            filter_list([1,2,'a','b']) == [1,2]
            filter_list([1,'a','b',0,15]) == [1,0,15]
            filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

            
*/
/////////// Question 1 ///////////////

/////////// Question2 ///////////////
function toCamelCase(str) {
    var arr=str.split('-');
    var nb=0;
    if(arr.length!==1){
         var sum=arr[0];
    for(var i=1; i<arr.length; i++) {
        var a=arr[i][0].toUpperCase()
        for(var j=1; j<arr[i].length; j++) {      
            a=a+arr[i][j];
        }
        sum+=a;
    }
    return sum;
    }else{
        var arr=str.split('_')
        var sum=arr[0];
    for(var i=1; i<arr.length; i++) {
        var a=arr[i][0].toUpperCase()
        for(var j=1; j<arr[i].length; j++) {      
            a=a+arr[i][j];
        }
        sum+=a;
    }
    return sum;
    }
    
}
toCamelCase("the-stealth-warrior")

//////////////// Question3 ///////////////
function filter_list(array) {
    var arr=[];
    for(var i=0; i<array.length; i++){
        if(typeof array[i] === 'number'){
            arr.push(array[i])
        }
    }
    return arr;
}