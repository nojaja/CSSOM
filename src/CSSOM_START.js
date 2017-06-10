(function(root) {
	'use strict';
	var exports = {};
	function require(path) {
		path = path.replace(/^\.\//, '');
		if (!exports[path]) {
			window.console && console.warn(path, 'is missing. Most likely just a mutual inclusion.');
		}
		return exports;
	}

	var CSSOM = root.CSSOM = {};
