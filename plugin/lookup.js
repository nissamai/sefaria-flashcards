const ALHATORAH_URL = "mg.alhatorah.org/Full/";

class WordInfo {
    constructor(info) {
        this.info = info;
    }

    get selectionText() {
        return this.info.selectionText;
    }

    get lookupRef() {
        return this.info.pageUrl.substring(this.info.pageUrl.lastIndexOf("/") + 1).split("?")[0];
    }
}

class AlHaTorahInfo extends WordInfo {
    constructor(info) {
        super(info);
    }

    get lookupRef() {
        return this.info.pageUrl.substring(this.info.pageUrl.indexOf(ALHATORAH_URL) + ALHATORAH_URL.length).split("#")[0].replace("/",".");
    }
}

class TextReference {

}

class DictionaryEntry {
    
}

function getWordInfo(info) {
    console.log(info);
    if (info.pageUrl.indexOf(ALHATORAH_URL) > 0) {
        return new AlHaTorahInfo(info);
    } else {
        return new WordInfo(info);
    }
}

function getDefinition(wordInfo) {
    const wordApiUrl = `https://www.sefaria.org/api/words/${wordInfo.selectionText}?always_consonants=1&never_split=1&lookup_ref=${wordInfo.lookupRef}`
    return fetch(wordApiUrl);
}

function getContext(wordInfo) {
    const textApiUrl = `https://www.sefaria.org/api/texts/${wordInfo.lookupRef}?context=0`
    return fetch(textApiUrl);
}

function getFlashcards(headwordsArray = []) {
    headwordsArray.map(x => {

    })
}


// turn into flashcard

// display flashcard