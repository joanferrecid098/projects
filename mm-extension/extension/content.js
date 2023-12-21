// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'changeFunction') {
    // Modify the ChangeMe function on the page
    if (typeof ChangeMe === 'function') {
      ChangeMe = function() {
        alert('changed');
      };
    }
  }
});
