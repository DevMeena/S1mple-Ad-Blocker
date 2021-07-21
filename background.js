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
	"*://*.zetaglobal.com/*",
	"*://*.4INFO/*",
	"*://*.adbot/*",
	"*://*.adform/*",
	"*://*.adobesystems/*",
	"*://*.adtech/*",
	"*://*.adlite/*",
	"*://*.adlitetechnologies/*",
	"*://*.afilias/*",
	"*://*.alwar/*",
	"*://*.alwarentertainment/*",
	"*://*.appnexus/*",
	"*://*.badgeville/*",
	"*://*.brightrole/*",
	"*://*.centro/*",
	"*://*.comscore/*",
	"*://*.criteo/*",
	"*://*.ctrlshift/*",
	"*://*.daylife/*",
	"*://*.digitalelement/*",
	"*://*.dotmobi/*",
	"*://*.ebuddy/*",
	"*://*.edirectory/*",
	"*://*.enplug/*",
	"*://*.fiksu/*",
	"*://*.fluent/*",
	"*://*.inmobi/*",
	"*://*.integral/*",
	"*://*.integralad/*",
	"*://*.integraladscience/*",
	"*://*.marin/*",
	"*://*.marin-software/*",
	"*://*.matomy/*",
	"*://*.matomymedia/*",
	"*://*.mblox/*"
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