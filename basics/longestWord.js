function longestWord(sentence){
    let words=sentence.split(" ");
    let longest=words[0];
    for(let i=1;i<words.length;i++){
        if(words[i].length>longest){
            longest=words[i].length;

        }
    }
    console.log("longest word",longest)

}
longestWord("welcome to ooty")
