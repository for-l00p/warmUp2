// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.

function instances(str) {
    var nb=0;
    var i=0;
    var instance=0;
    var arr=str.split('')
    var arr2=['b','a','l','l','o','o','n']
    while(i<arr.length){
        if(arr2.includes(arr[i])){
            arr.splice(i,1)
            nb++;
        }else if(!arr2.includes(arr[i])){
            i++;
        }
        if(nb===arr2.length){
            nb=0;
            instance++;
        }
    }       
    return instance;
}