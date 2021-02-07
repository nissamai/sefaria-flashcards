chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.create({
    url: chrome.extension.getURL("flashcards-manager/index.html")
  });
});