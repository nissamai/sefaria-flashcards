function createFlashcard(info) {
  var wordInfo = getWordInfo(info);
  Promise.all([getDefinition(wordInfo), getContext(wordInfo)])
    .then(responses =>
      Promise.all(responses.map(res => res.json()))
    )
    .then(res => {
      console.log(res[0]);
      console.log(res[1]);
    })
    .catch(err => {
      console.log(err); // failed to get notecard
    })
}


var supportedPages = ["https://*.sefaria.org/*", "https://mg.alhatorah.org/*"];

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    "id": "sampleContextMenu",
    "title": "Create Flashcard",
    "contexts": ["selection"],
    "onclick": createFlashcard,
    "documentUrlPatterns": supportedPages
  });
});



