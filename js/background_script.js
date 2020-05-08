function openOptionsPage() {
	chrome.runtime.openOptionsPage();
}


chrome.runtime.onMessage.addListener(function(request) {
	switch (request.todo) {
		case "openOptions": 
			openOptionsPage();
			break;
		default:
			break;
	}
});
