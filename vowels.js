function vowels(string){
     let vowels=['a','e','i','o','u'];
     let count=0;
     for(let i=0;i<string.length;i++){
        if(string.includes(vowels[i])){
            count=count+1;
        }
     }
     console.log(count);

}
vowels("athulya");
vowels("shiva");
vowels("Apple");

