function openOptionsPage() {
	chrome.runtime.openOptionsPage();
}

function maxTabsCheck() {
	var optionOn = chrome.storage.sync.get(['maxTabsToggle']);
	var maxTabs = chrome.storage.sync.get(['maxTabCount']);
	var numTabs = 0;
	if (optionOn) {
		chrome.tabs.query({windowType:'normal'}, function(tabs) {
			numTabs = tabs;
		});
		if (numTabs == maxTabs) {
			chrome.tabs.create({url:'http://playboicarti.com'});
		}
	}
}

chrome.runtime.onMessage.addListener(function(request) {
	switch (request.todo) {
		case 'openOptions': 
			openOptionsPage();
			break;
		default:
			break;
	}
});

chrome.tabs.onCreated.addListener(maxTabsCheck);
