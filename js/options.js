function save() {
	var enableMaxTabs = document.getElementById('maxTabsToggle').checked;
	var maxTabs = document.getElementById('maxTabCount').value;
	chrome.storage.sync.set({
		maxTabsToggle: enableMaxTabs,
		maxTabCount: maxTabs
	}, displaySavedMessage);
}

function displaySavedMessage() {
	var status = document.getElementById('status');
	status.textContent = 'Preferences saved.';
	setTimeout(function() {
		status.textContent = '';
	}, 2000);
}

function load() {
	updateMaxTabOptions();
	chrome.storage.sync.get({
		maxTabsToggle: false,
		maxTabCount: '5'
	}, function(items) {
		document.getElementById('maxTabsToggle').checked = items.maxTabsToggle;
		document.getElementById('maxTabCount').value = items.maxTabCount;
	});
}

function updateMaxTabOptions() {
	var options = document.getElementById('maxTabsOptions');
	if (document.getElementById('maxTabsToggle').checked)
		options.style.display = 'block';
	else
		options.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', load);
document.getElementById('save').addEventListener('click', save);
document.getElementById('maxTabsToggle').addEventListener('change', updateMaxTabOptions);
