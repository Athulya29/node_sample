function palindrome(string){
    let low=string.toLowerCase();
    let n=low.split("");
    let reverseStr=n.reverse();
    let reversedString=reverseStr.join("")
    if (reversedString==low){
        console.log( " palindrome")
    }
    else{
        console.log("Not a palindrome")
    }
}
palindrome("Malayalam")
palindrome("Athulya")