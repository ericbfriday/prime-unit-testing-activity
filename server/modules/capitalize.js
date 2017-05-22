function makeTitle(str) {
	return str
        .split(' ')
        .map(function(word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
}

module.exports = makeTitle;
