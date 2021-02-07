function createFlashcard(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
}

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "id": "sampleContextMenu",
        "title": "Create Flashcard",
        "contexts": ["selection"]
    });
});






// chrome.contextMenus.create({
//     title: "first",
//     contexts: ["browser_action"],
//     onclick: function() {
//       alert('first');
//     }
//   });

      // "content_scripts": [{
    //     "js": ["add-flashcard.js"],
    //     "matches": ["https://sefaria.org/*"]
    // }]