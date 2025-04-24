const palindromes = function(myString){

       

        const cleanUp = myString.toLowerCase().replace(/[^a-z0-9]/g, '');

        const compare = cleanUp.split('').reverse().join('');

        return cleanUp === compare;
    

}

console.log(palindromes('Go hang a salami im a lasagna hog'));