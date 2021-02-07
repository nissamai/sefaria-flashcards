function getDefinition(word, url) {
    lookupRef = url.substring(url.lastIndexOf("/") + 1).split("?")[0]
    const wordApiUrl = `https://www.sefaria.org/api/words/${word}?always_consonants=1&never_split=1&lookup_ref=${lookupRef}`
    return fetch(wordApiUrl);
}

