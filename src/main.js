window.addEventListener("load", function(){
	 // Delete the device registration overlay
	document.getElementById("cs-dm-add").remove();

	// Force vertical/horizontal scrollbar on the page
	document.getElementsByTagName('html')[0].style.setProperty('overflow', 'visible', 'important');
	document.getElementsByTagName('body')[0].style.setProperty('overflow', 'visible', 'important');
});