window.addEventListener("load", function(){
	var possibleSuffix = ["add", "swap"];
	var scrollBarElements = ["html", "body"]
	
	// Find the proper device registration overlay
	possibleSuffix.forEach(function(currentSuffix) {
		var currentSuffixElement = document.getElementById("cs-dm-" + currentSuffix);
		
		// Delete overlay if it exists
		if (currentSuffixElement != null)
			currentSuffixElement.remove();
	});
	 

	// Force vertical/horizontal scrollbar on the page
	scrollBarElements.forEach( function(currentElement) {
		document.getElementsByTagName(currentElement)[0].style.setProperty('overflow', 'visible', 'important');
	});
});