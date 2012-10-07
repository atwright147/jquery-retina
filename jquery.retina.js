/*!
* jQuery Plugin v0.1
* https://github.com/atwright147/jquery.retina
*
* Copyright 2012, Andy Wright
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://www.opensource.org/licenses/mit-license.php
* http://www.opensource.org/licenses/GPL-2.0
*/
(function($){

	$.fn.retina = function(options) {  

		// Create some defaults, extending them with any options that were provided
		var settings = $.extend({
			'suffix'	: '@2x'
		}, options);

		var o = settings;
		//console.debug(settings);

		return this.each(function() {
			$this = $(this);

			switch($this[0].tagName) {
				case 'IMG':
					console.log('IMG',$this.attr('src'));
					break;

				default:
					console.log('OTHER',$this.css('background-image'));
					break;

			}
		});
	};

})(jQuery);