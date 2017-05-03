var model = {
	nav: [
		{
			header: "Home",
			classed: "home-nav"
		}/*,
		{
			header: "Search Paintings",
			classed: "search-nav"
		}*/,
		{
			header: "Filter and Search",
			classed: "filter-nav"
		},
		{
			header: "Pricing",
			classed: "pricing-nav"
		}
	],

	paintings: [
		{
			name: "Grove YB7722XL",
			src: "img/cranes-1.jpg",
			classed: "self-portrait",
			headClass: "self-head",
			height: "300",
			width: "300",
			unit: "px",
			tags: ["grove", "YB7722XL", "Grove YB7722XL", "22 ton", "industrial"],
			tagsFirst: function() {
				this.tagsArr = ko.observableArray();
				for(var i=0; i<4; i++){

					this.tagsArr.push(this.tags[i]);
				}
				return this.tagsArr();
			},
			tagsSecond: function() {
				this.tagsArrSecond = ko.observableArray();

				for(var t=0; t<this.tags.length; t++){
					if(t>4){
						this.tagsArrSecond.push(this.tags[t]);
					}
				}

				return this.tagsArrSecond();
			},
			visibility: ko.observable(true)
		},
		{
			name: "Tadano GR150XL-1",
			src: "img/cranes-2.jpg",
			classed: "friendship-portrait",
			headClass: "friendship-head",
			height: "300",
			width: "300",
			unit: "px",
			tags: ["Tadano GR150XL-1", "15 ton", "GR150XL-1", "Tadano", "rough", "terrain", "rough terrain"],
			tagsFirst: function() {
				this.tagsArr = ko.observableArray();
				for(var i=0; i<4; i++){

					this.tagsArr.push(this.tags[i]);
				}
				return this.tagsArr();
			},
			tagsSecond: function() {
				this.tagsArrSecond = ko.observableArray();

				for(var t=0; t<this.tags.length; t++){
					if(t>4){
						this.tagsArrSecond.push(this.tags[t]);
					}
				}

				return this.tagsArrSecond();
			},
			visibility: ko.observable(true)
		},
		{
			name: "	Link-Belt RTC 8040 II",
			src: "img/cranes-3.jpg",
			classed: "field-portrait",
			headClass: "field-head",
			height: "300",
			width: "300",
			unit: "px",
			tags: ["link", "40 ton", "belt", "link-belt", "rtc", "8040", "rough", "terrain", "rough terrain"],
			tagsFirst: function() {
				this.tagsArr = ko.observableArray();
				for(var i=0; i<4; i++){

					this.tagsArr.push(this.tags[i]);
				}
				return this.tagsArr();
			},
			tagsSecond: function() {
				this.tagsArrSecond = ko.observableArray();

				for(var t=0; t<this.tags.length; t++){
					if(t>4){
						this.tagsArrSecond.push(this.tags[t]);
					}
				}

				return this.tagsArrSecond();
			},
			visibility: ko.observable(true)
		},
		{
			name: "Liebherr LR 1100 / HS 855",
			src: "img/ship.jpg",
			classed: "ship-portrait",
			headClass: "ship-head",
			height: "300",
			width: "300",
			unit: "px",
			tags: ["libeherr", "crawler", "lr 110", "hs 855"],
			tagsFirst: function() {
				this.tagsArr = ko.observableArray();
				for(var i=0; i<4; i++){

					this.tagsArr.push(this.tags[i]);
				}
				return this.tagsArr();
			},
			tagsSecond: function() {
				this.tagsArrSecond = ko.observableArray();

				for(var t=0; t<this.tags.length; t++){
					if(t>4){
						this.tagsArrSecond.push(this.tags[t]);
					}
				}

				return this.tagsArrSecond();
			},
			visibility: ko.observable(true)
		},
		{
			name: "	Mantis 20010",
			src: "img/stretch.jpg",
			classed: "stretch-portrait",
			headClass: "stretch-head",
			height: "150",
			width: "300",
			unit: "px",
			tags: ["mantis", "200010", "hydraulic", "crawler", "hydraulic crawler"],
			tagsFirst: function() {
				this.tagsArr = ko.observableArray();
				for(var i=0; i<4; i++){

					this.tagsArr.push(this.tags[i]);
				}
				return this.tagsArr();
			},
			tagsSecond: function() {
				this.tagsArrSecond = ko.observableArray();

				for(var t=0; t<this.tags.length; t++){
					if(t>4){
						this.tagsArrSecond.push(this.tags[t]);
					}
				}

				return this.tagsArrSecond();
			},
			visibility: ko.observable(true)
		},
		{
			name: "Favco 760D II",
			src: "img/flowers.jpg",
			classed: "flowers-portrait",
			headClass: "flowers-head",
			height: "300",
			width: "300",
			unit: "px",
			tags: ["tower", "favco", "760D"],
			tagsFirst: function() {
				this.tagsArr = ko.observableArray();
				for(var i=0; i<4; i++){

					this.tagsArr.push(this.tags[i]);
				}
				return this.tagsArr();
			},
			tagsSecond: function() {
				this.tagsArrSecond = ko.observableArray();

				for(var t=0; t<this.tags.length; t++){
					if(t>4){
						this.tagsArrSecond.push(this.tags[t]);
					}
				}

				return this.tagsArrSecond();
			},
			visibility: ko.observable(true)
		}
	]
};

viewModel = {

	query: ko.observable(""),
	closureShow: ko.observableArray(),
	closureHide: ko.observableArray(),

	filter: function() {

        Array.prototype.contains = function(searched) {
            for (var r in this) {
                if (this[r] == searched) return true;
            }
            return false;
        };


		var that = this;

		var query = this.query();
		that.show = ko.observableArray();
		that.hide = ko.observableArray();
		that.obj = ko.observableArray();

		model.paintings.forEach(function(obj){

			that.obj.push(obj);
			var tag = obj.tags;

			tag.forEach(function(tags){

				var index = tags.indexOf(query);

				if(index > -1){


					that.show.push(obj);

				}
				else {
					that.hide.push(obj);
				}

			})
		});
		that.filterView();
		that.obj.removeAll();
		that.show.removeAll();

	},

	filterView: function() {
		var that = this;
		this.obj().forEach(function(obj){
			if(that.show().contains(obj)){
				console.log(obj);
				obj.visibility(true);
			}
			else {
				obj.visibility(false);
			}
		})
	}

};

var description = {

	init: function() {
		console.log('describe me!');
	}
};

var nav = {

	init: function() {
		console.log(this);
		var filter = document.getElementsByClassName('search')[0];
    console.log(filter);
			$(filter).slideDown();

	}
};



var showPaintings = {

	init: function() {
		//console.log(this.classed);
		var that = this;
		this.jClass = "."+this.classed;
		this.jHeadClass = "."+this.headClass;
		//console.log(jClass);

		$(this.jHeadClass).fadeOut(function() {

			$(that.jClass).animate({
				opacity: 1
			}, 'fast');
			$(that.jClass).show();
		})

	},

	nameShow: function() {

	},

	nameHide: function() {

	}

};

ko.applyBindings(viewModel);
