(function(root) {
	'use strict';

	var exports;
	if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') {
	    exports = module.exports;
	} else {
	    exports = {};
	    if (root.CSSOM) {
	        return;
	    }
			root.CSSOM = exports;
	}
	var CSSOM = exports;
