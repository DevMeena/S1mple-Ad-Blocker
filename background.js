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
	"*://*.zetaglobal.com/*"
]

var enabled = true

chrome.webRequest.onBeforeRequest.addListener(
      
	(details)=>{
		if(!enabled) {
		// 	console.log("false");
		// 	return { cancel: false }
		// }
		// else {
		// 	console.log("true");
		// 	return { cancel: true }
		// }
		return { cancel: false };                           
		}
      var url = "https://www.google.com/";
      return { redirectUrl: url };
	},
  	{urls: adSites},
 	["blocking"]
);



// auto toggle code

// chrome.webRequest.onBeforeRequest.addListener(
// 	()=>{
// 		(details)=>{{cancel: true}}
// 	},
// 	{urls: adSites},
// 	["blocking"]
// )