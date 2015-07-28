var s = skrollr.init();

$(document).load(function() {
	s.refresh();
	// HACK
	window.setTimeout(s.refresh, 300);
});
