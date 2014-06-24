(function($){
    $(function(){
	
		var screenSize = 700,
			$menuLink = $('.menu-button a'),
			$sideLink = $('.side-button a'),
			$openMenu = $('.open-menu'),
			$closeMenu = $('.close-menu'),
			$openSide = $('.open-side'),
			$closeSide = $('.close-side'),
			$body = $('body');

			mobile();


		//=============//
		//= FUNCTIONS =//
		//=============// 

		function mobile() {
			//Nav-Button 
			$menuLink.on('click', function(e) {
				$body.toggleClass('nav-open').removeClass('side-open');
				$openSide.css({'display':'block'});
				$closeSide.css({'display':'none'});
				if($body.hasClass('nav-open')) {
					$openMenu.css({'display':'none'});
					$closeMenu.css({'display':'block'});
				} else {
					$openMenu.css({'display':'block'});
					$closeMenu.css({'display':'none'});
				}
				e.preventDefault();
			});
			//Side-Content-Button
			if($body.hasClass('side-off-canvas')) {
				$sideLink.on('click', function(e) {
				$body.toggleClass('side-open').removeClass('nav-open');
				$openMenu.css({'display':'block'});
				$closeMenu.css({'display':'none'});
				if($body.hasClass('side-open')) {
					$openSide.css({'display':'none'});
					$closeSide.css({'display':'block'});
				} else {
					$openSide.css({'display':'block'});
					$closeSide.css({'display':'none'});
				}
				e.preventDefault();
			});
			}

			//Window resize
			$(window).resize(function(){
				if($(this).innerWidth()  >= screenSize) {
					$body.removeClass('nav-open').removeClass('side-open');
					$openMenu.show();
					$closeMenu.hide();
				}
			});
		}



    });
})(jQuery);


