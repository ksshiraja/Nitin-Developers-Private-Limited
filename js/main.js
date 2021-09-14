jQuery(document).ready(function(){

		"use strict"; //using the function strictly
		$('#slider-carousel').carouFredSel({
			responsive:true, //to open the website in any browser
			width:'100%',
			circular:true,
			scroll:{
				items:1,
				duration:500,
				pauseOnHover:true, //the slider stops sliding if you hover

			},

			auto:true, //moves automatically
			items:
			{
				visible:{
					min:1, //minimum slide will be one
					max:1

				},
				height:"variable"
			},

			pagination:{ //If you have a web site with lots of pages, you may wish to add some sort of pagination to each page.
				container:".sliderpager",
				pageAnchorBuilder:false
			}

		}); //hashtag is used tocall an html id

		 $(window).scroll(function(){
		 	var top = $(window).scrollTop();
		 	if(top>=60){
		 		$("header").addClass('secondary');
		 	}

		 	else 
		 		if ($("header").hasClass('secondary')){
		 			$("header").removeClass('secondary');
		 		}


		 	});
	});

