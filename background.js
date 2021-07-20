const adSites = [
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
]

chrome.webRequest.onBeforeRequest.addListener(
	(details)=>{{cancel: true}},
	{urls: adSites},
	["blocking"]
)

function isOn(){
	console.log("lol");
}

// function isOn(){
// 	var checkBox = document.getElementById("switch");
// 	console.log("yes");

// 	if(checkBox.checked){
		
// 	} else {
// 		console.log("no");
// 		chrome.storage.local.set({variable: variableInformation});
// 	}
// }