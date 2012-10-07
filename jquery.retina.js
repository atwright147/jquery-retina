/*!
* jQuery Plugin v0.1
* https://github.com/atwright147/jquery-retina
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
			'suffix': '@2x',
			'test':   false
		}, options);

		var o = settings;
		//console.debug(settings);

		if(window.devicePixelRatio >= 2 || o.test) {
			return this.each(function() {
				var $this = $(this);
				var width  = $this.width();
				var height = $this.height();

				switch($this[0].tagName) {
					case 'IMG':
						var $image = $this.attr('src');
						var ext = $image.substr(($image.lastIndexOf('.')+1));
						var $retina = $image.split('.').join('@2x.');
						$this.attr('src', $retina).css('width',width).css('height',height);
						break;

					default:
						var $image = $this.css('background-image');
						var ext = $image.substr(($image.lastIndexOf('.')+1)).replace('")','').replace("')",'');
						var $retina = $image.split('.').join('@2x.');
						$this.css('background-image', $retina).css('background-size','100%');
						break;
				}
				//console.log($retina);
			});
		}
	};

})(jQuery);