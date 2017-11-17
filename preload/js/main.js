/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {
	var support = { animations : Modernizr.cssanimations },
		container = document.getElementById('banner'),
		header = container.querySelector('.anim_bg'),
		loader = new PathLoader(document.getElementById('ip-loader-circle')),
		endEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
		//animation end event name
		endEventName = endEventNames[Modernizr.prefixed('animation')];

	function init() {
		var endInitialAnim = function() {
			if(support.animations) {
				this.removeEventListener(endEventName, endInitialAnim);
			}
			startLoading();
		};

		//disable scrolling and hide navbar
		$('nav').hide();
		window.addEventListener('scroll', noscroll);

		// initial animation
		classie.add(container, 'loading');

		if(support.animations) {
			container.addEventListener(endEventName, endInitialAnim);
		}
		else {
			endInitialAnim();
		}
	}

	function startLoading() {
		// simulate loading something..
		var simulationFn = function(instance) {
			var progress = 0,
				interval = setInterval( function() {
					progress = Math.min(progress + Math.random()*0.1, 1);
					instance.setProgress(progress);

					// reached the end
					if (progress === 1) {
						classie.remove(container, 'loading');
						classie.add(container, 'loaded');
						clearInterval(interval);

						var endInitialAnim = function(ev) {
							if(support.animations) {
								if(ev.target !== header) return;
								this.removeEventListener(endEventName, endInitialAnim);
							}
							classie.add(document.body, 'layout-switch');
							window.removeEventListener('scroll', noscroll);
							$('nav').show();
							$('.banner_text').removeClass('anim_bg');
							$('.banner_text').addClass('animate-b-txt');
							setTimeout(function() {
								$('#banner').addClass('banner_photo');
							}, 3000);
						};

						if (support.animations) {
							header.addEventListener(endEventName, endInitialAnim);
						}
						else {
							endInitialAnim();
						}
					}
				}, 80 );
		}
		loader.setProgressFn(simulationFn);
	}
	function noscroll() {
		window.scrollTo(0, 0);
	}
	init();
})();