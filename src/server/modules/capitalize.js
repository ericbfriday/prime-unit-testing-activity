function makeTitle(str) {
    // moved return str to bottom of function.
    str = str.toString().split(' ')  // takes string parameter in and breaks 
                    // each word into individual array elements
        .map(function (word) {  // accepts word and returns the first letter as
                                // as a capital letter + remainder as it was
                                // put in.
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');     // joins together elements of the array as a single item
    return str;
}

makeTitle('truck');
makeTitle('All is fair in Love and war');

module.exports = makeTitle;