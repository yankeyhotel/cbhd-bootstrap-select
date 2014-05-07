(function($) {

	$.fn.cbhd_bootstrap_select = function( options ) {

		this.each(function(){

			// set up used variables
			var select  	= $(this),
				title 		= "",
				optionsHTML = "",
				iconHTML 	= ""
				slice 		= 0;


			// set up the default options
			var settings = $.extend({
								icon: "glyphicon",
								use_first_option_as_title: false
							}, options );


			// get the iconHTML all set
			if (settings.icon === "glyphicon") {
				iconHTML = '<span class="glyphicon glyphicon-chevron-down"></span>';
			} else if (settings.icon === "custom") {
				iconHTML = settings.custom_icon;
			} else if (settings.icon === "caret") {
				iconHTML = '<span class="caret"></span>';
			}


			// determine if we should use_first_option_as_title
			if (settings.use_first_option_as_title) {
				slice = 1;
			}


			// create options (<li>), 
			// use slice to get rid of the first one if we need to
			$("option", select).slice(slice).each(function() {
				// get text
				var text = $(this).text();
				// add <li> to <ul class="dropdown-menu">
				optionsHTML += '<li><a>' + text + '</a></li>';
			});


			// create button group, button, dropdown-menu & add in options
			title = $("option:eq(0)", select).text();
			var btnGroup = $('<div class="btn-group"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="overflow">' + title + '</span> ' + iconHTML + '</button><ul class="dropdown-menu">' + optionsHTML + '</ul></div>').insertAfter(select);


			// hide the original select menu
			select.hide();


			// tie in the select menu with the new button events
			$("a", btnGroup).each(function(){
				var $this = $(this);

				$this.on('click', function(e){
					e.preventDefault();
					var text = $this.text();

					// remove active class
					$("li", btnGroup).removeClass("active");
					$this.parent().addClass("active");

					// set the hidden select menu
					$("option", select).filter(function() {
						$(this).attr('selected',false);
						return $(this).text() === text;
					}).attr('selected', true);

					// set the title of the button
					$(".btn .overflow", btnGroup).text(text);
					
				});

			});


			// if use_first_option_as_title is false make the first <li> active
			if (!settings.use_first_option_as_title) {
				$("li:eq(0)", btnGroup).addClass("active");
			}


		});
	
	}

})( jQuery );