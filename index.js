var letterCapitalize= function(word) {
    return word[0].toUpperCase() + word.substring(1);
}
letterCapitalize("cherry")

var wordCount= function(string) {
    return string.split(" ").length;
};
wordCount("here a lot of words, not really, haha haha haha")