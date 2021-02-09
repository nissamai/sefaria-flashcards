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
//   Promise.all([getDefinition(wordInfo), getContext(wordInfo)])
//     .then(responses =>
//       Promise.all(responses.map(res => res.json()))
//     )
//     .then(res => {
//       console.log(res[0]);
//       console.log(res[1]);
//       // open new tab
//       // send it data
//     })
//     .catch(err => {
//       console.log(err); // TODO: handle failed to get flashcard 
//     })
// }

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