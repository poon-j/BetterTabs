function notify() {
	chrome.runtime.sendMessage({todo: "openOptions"});
}

document.getElementById('optionsButton').addEventListener('click',notify);
