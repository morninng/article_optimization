var ArticleManager = new Marionette.Application();

ArticleManager.addRegions({
  mainRegion: "#main-region"
});


ArticleManager.navigate = function(route, options){
	options || (options = {});
	Backbone.history.navigate(route, options);
};


ArticleManager.getCurrentRoute = function(){
	return Backbone.history.fragment
};


ArticleManager.on("start", function(){

	if(Backbone.history){
		Backbone.history.start();

		if(this.getCurrentRoute() === ""){
			ArticleManager.trigger("articles:list");
		}
	}
});

