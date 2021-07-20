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
	// "https://adaway.org/hosts.txt",
	// "https://adblock-thai.github.io/thai-ads-filter/subscription.txt",
	// "https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt",
	// "https://assets.windscribe.com/custom_blocklists/clickbait.txt",
	// "https://blocklist.cyberthreatcoalition.org/vetted/domain.txt",
	// "https://cdn.jsdelivr.net/gh/bmyjacks/adlists@latest/filter-registry/anti-AD.txt",
	// "https://curben.gitlab.io/phishing-filter-mirror/phishing-filter-agh.txt",
	// "https://dbl.oisd.nl/",
	// "https://github.com/j-moriarti/pDNSf-Hosts-collection/releases/download/v1.0.0/just-IPs.txt",
	// "https://github.com/j-moriarti/pDNSf-Hosts-collection/releases/download/v1.0.0/Wildcards.txt",
	// "https://github.com/missdeer/blocklist/blob/master/toblock-without-shorturl.lst?raw=true",
	// "https://gitlab.com/andryou/block/raw/master/senpai-strict-compressed-domains",
	// "https://gitlab.com/ZeroDot1/CoinBlockerLists/raw/master/list.txt",
	// "https://hosts.anudeep.me/mirror/adservers.txt",
	// "https://hosts.anudeep.me/mirror/CoinMiner.txt",
	// "https://hosts.anudeep.me/mirror/facebook.txt",
	// "https://iplists.firehol.org/files/php_harvesters.ipset",
	// "https://iplists.firehol.org/files/php_spammers.ipset",
	// "https://iplists.firehol.org/files/sblam.ipset",
	// "https://iplists.firehol.org/files/stopforumspam_30d.ipset",
	// "https://iplists.firehol.org/files/urlvir.ipset",
	// "https://iplists.firehol.org/files/vxvault.ipset",
	// "https://joewein.net/dl/bl/dom-bl-base.txt",
	// "https://lists.blocklist.de/lists/all.txt",
	// "https://lists.noads.online/lists/compilation.txt",
	// "https://openphish.com/feed.txt",
	// "https://orca.pet/notonmyshift/domains.txt",
	// "https://pgl.yoyo.org/adservers/serverlist.php?hostformat=hosts&showintro=0&mimetype=plaintext",
	// "https://phishing.army/download/phishing_army_blocklist_extended.txt",
	// "https://phishing.army/download/phishing_army_blocklist.txt",
	// "https://raw.githubusercontent.com/ADsecu/black-domains/master/domain_hosts.txt",
	// "https://raw.githubusercontent.com/AlexRabbit/ADios/master/hosts"
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