(function($) {

	$.fn.cbhd_bootstrap_select = function() {

		this.each(function(){
			var select  = $(this),
				title 	= "",
				options = "";

			// create options (<li>), 
			// use slice to get rid of the first one
			$("option", select).slice(1).each(function() {
				// get text
				var text = $(this).text();
				// add <li> to <ul class="dropdown-menu">
				options += '<li><a href="">' + text + '</a></li>';
			});

			// create button group, button, dropdown-menu & add in options
			title = $("option:eq(0)", select).text();
			var btnGroup = $('<div class="btn-group"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="overflow">' + title + '</span> <span class="glyphicon glyphicon-chevron-down"></span></button><ul class="dropdown-menu">' + options + '</ul></div>').insertAfter(select);

			select.hide();

			// tie in the select menu with the new button events
			$("a", btnGroup).each(function(){
				var $this = $(this);

				$this.on('click', function(e){
					e.preventDefault();
					var text = $this.text();

					// set the hidden select menu
					$("option", select).filter(function() {
						$(this).attr('selected',false);
						return $(this).text() === text;
					}).attr('selected', true);

					// set the title of the button
					$(".btn .overflow", btnGroup).text(text);
					
				});

			});

		});
	
	}

})( jQuery );