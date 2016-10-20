function splitSentences(text) {
    return text.match(/[^\.!\?]+[\.!\?]+/g);
}

module.exports = { splitSentences };
