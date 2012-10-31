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
			'check':  true,
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
						var ext = $image.substr(($image.lastIndexOf('.') + 1));
						var $retina = $image.replace('.' + ext, o.suffix + '.' + ext);
						$this.error(function() {
							$this.attr('src', $image);
						}).attr('src', $retina).css('width',width).css('height',height);
						break;

					default:
						var $image = $this.css('background-image').replace(/url\((['"])(.*?)\1\)/gi, '$2').split(',')[0]; // from: http://stackoverflow.com/a/3098455/633056
						var ext = $image.substr(($image.lastIndexOf('.') + 1)); //.replace('")','').replace("')",'');
						var $retina = $image.replace('.' + ext, o.suffix + '.' + ext);
						var img = $image;
						
						if(o.check) {
							$.ajax({
								url:  $retina,
								type: 'HEAD',
								async: true,
								success:
									function() {
										img = $retina;
									}
							});
						} else {
							img = $retina;
						}

						$this.css('background-image', 'url("' + img + '")');
						if($this.css('background-size') == 'auto' || $this.css('background-size') == 'auto auto') {
							console.log('auto:','auto');
							$this.css('background-size', '100%');
						} else {
							console.log('auto:','not auto');
						}
						break;

				}
			});
		}
	};

})(jQuery);