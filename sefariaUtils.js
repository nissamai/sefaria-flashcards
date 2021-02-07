function getDefinition(word, lookupRef) {
    const wordApiUrl = `https://www.sefaria.org/api/words/${word}?always_consonants=1&never_split=1&lookup_ref=${lookupRef}`
    return fetch(wordApiUrl);
}
  