function createFlashcard(info) {
  var wordInfo = getWordInfo(info);
  var headword = wordInfo.selectionText;
  var lookupRef;
  try {
    lookupRef = wordInfo.lookupRef;
  } catch(error) {
    lookupRef = null
  }
  chrome.tabs.create({
    url: chrome.extension.getURL(`flashcards-manager/index.html#/add-card/${headword}/${lookupRef}`)
  });
}

var supportedPages = ["https://*.sefaria.org/*", "https://mg.alhatorah.org/*"];

chrome.contextMenus.create({
    "id": "sampleContextMenu",
    "title": "Create Flashcard",
    "contexts": ["selection"],
    "onclick": createFlashcard,
    "documentUrlPatterns": supportedPages
  });