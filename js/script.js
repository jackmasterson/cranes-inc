'use strict';

var model = {
	genInfo:
		{
			name: 'Specialty Coffee  by Jack',
			address: '514 Sunset Drive, Downingtown, NJ 07740',
			schedule: [
				{
					day: 'Mon-Sat',
					hours: '7am-3pm'
				},
				{
					day: 'Sun',
					hours: '8am-3pm'
				}
			],
			phone: '907-555-5555',
			philosophy: 'lorem ipsum dolor set quick pat ex tree it',
			whyUs: 'more meroal muspi rolod tes kciuq tap xe eert ti',
			src: 'img/newlogo.gif'
		},
	nav: [
		{
			item: 'Home',
			href: '#/',
			id: ko.observable('home'),
			par: "At vero eos et accusamus et iusto odio dignissimos"+
			" ducimus qui blanditiis praesentium voluptatum deleniti atque"+
			" corrupti quos dolores et quas molestias excepturi sint"+
			" occaecati cupiditate non provident, similique sunt in"+
			" culpa qui officia deserunt mollitia animi, id est laborum"+
			" et dolorum fuga. Et harum quidem"
		},
		{
			item: 'About Us',
			href: 'http://www.cranesinc.com/about-us',
			id: ko.observable('philosophy'),
			par: "Lorem ipsum dolor sit amet, consectetur adipiscing"+
			" elit, sed do eiusmod tempor incididunt ut labore et dolore"+
			" magna aliqua. Ut enim ad minim veniam, quis nostrud"+
			" exercitation ullamco laboris nisi ut aliquip ex ea commodo"+
			" consequat. Duis aute irure dolor in reprehenderit in voluptate"+
			" velit esse cillum dolore eu"
		},
		{
			item: 'Services',
			href: 'http://www.cranesinc.com/services',
			id: ko.observable('shop'),
			par: ko.observable('')
		},
		{
			item: 'Newsletter',
			href: '#/',
			id: ko.observable('newsletter'),
			par: 'Filler text'
		},
		{
			item: 'Search',
			href: '../search.html',
			id: ko.observable('about'),
			par: 'Filler text'
		},
		{
			item: 'Contact',
			href: '#/',
			id: ko.observable('contact'),
			par: 'Filler text'
		}
	],
	contact: [
		{
			email: 'youremailhere@notarealemail.com',
			phone: '(xxx) xxx-xxxx',
			directions: 'google.com/maps'
		}
	]

};

var viewModel = {
	init: function() {
		slider.init();
		toggle.philosophy();
	}
};

var toggle = {

	schedule: function() {
		$('.hours-ul').slideToggle();
	},

	philosophy: function() {
		$('#philosophy').click(function(){
			//console.log('philsosophyhyhy');
		//	$('.phil-div').slideToggle();
		});
	}
};

var philo = document.getElementById('philosophy');
//console.log(philo);


/**** slider credit goes to kentowatanabe, found at:
 	[http://www.jqueryscript.net/demo/Simplest-Fullscreen
 		-Background-Slideshow-With-jQuery-Chocolate-js/]
 */
var slider = {

	init: function() {
		$('.head-div').chocolate({
			images    : ['img/crane-sunset.jpeg', 'img/crane-nyc.jpg', 'img/crane-cloud.jpg'],
			interval : 3500,
			speed: 1000
		});
	}
};

ko.applyBindings(viewModel.init());
