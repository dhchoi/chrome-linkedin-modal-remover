// called when the user clicks on the browser action
chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("Removing modal from " + tab.url);

  // https://developer.chrome.com/extensions/tabs
  chrome.tabs.executeScript({
    file: "remove-modal.js"
  });
});
