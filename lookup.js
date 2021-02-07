function getLookupRef(url) {
    return url.substring(url.lastIndexOf("/") + 1).split("?")[0];
}

function getDefinition(word, pageUrl) {
    const wordApiUrl = `https://www.sefaria.org/api/words/${word}?always_consonants=1&never_split=1&lookup_ref=${getLookupRef(pageUrl)}`
    return fetch(wordApiUrl);
}

function getContext(pageUrl) {
    const textApiUrl = `https://www.sefaria.org/api/texts/${getLookupRef(pageUrl)}?context=0`
    return fetch(textApiUrl);
}

function getFlashcards(headwordsArray = []) {
    headwordsArray.map(x => {

    })
}


// turn into flashcard

// display flashcard