// let a = "50";
// let b = 10;
// let sum = parseInt(a)+b;
// console.log(typeof a);
// console.log(typeof b);
// console.log(sum);

// const myObject = {
//     name : "ishika",
//     age : 20
// };

// console.log(myObject);

// myObject.city= "varanasi";
// console.log(myObject)

const dictionary = {
    "apple": "A round fruit of a tree of the rose family, which typically has thin red or green skin and crisp flesh.",
    "banana": "A long curved fruit that grows in clusters and has soft pulpy flesh and yellow skin when ripe.",
    "cherry": "A small, round fruit that is typically bright or dark red.",
    "date": "The sweet fruit of the date palm, typically oblong and with a hard seed.",
    "elderberry": "A small dark purple fruit that grows in clusters on the elder tree."
};

// Function to get the meaning of a word
function getMeaning(word) {
    const meaning = dictionary[word.toLowerCase()]; 
    if (meaning) {
        console.log(`The meaning of "${word}" is: ${meaning}`);
    } else {
        console.log(`Sorry, the word "${word}" is not in the dictionary.`);
    }
}
getMeaning("apple")
getMeaning ("strawberry")
