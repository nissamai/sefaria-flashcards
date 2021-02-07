function createFlashcard(info) {
  getDefinition(info.selectionText, info.pageUrl.substring(info.pageUrl.lastIndexOf("/") + 1).split("?")[0])
  .then(res => res.json())
  .then(res =>
    console.log(res)
  )
  .catch(err => {
    console.log(err);
  })
}

var sefariaPages = ["https://*.sefaria.org/*"];

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    "id": "sampleContextMenu",
    "title": "Create Flashcard",
    "contexts": ["selection"],
    "onclick": createFlashcard,
    "documentUrlPatterns": sefariaPages
  });
});



