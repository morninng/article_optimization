ArticleManager.module("ArticleApp", function(ArticleApp, ArticleManager,
Backbone, Marionette, $, _){

	ArticleApp.Router = Marionette.AppRouter.extend({
		appRoutes: {
			"articles": "listArticles",
			"articles/:id": "showArticle"
		}
	});

	var API = {
		listArticles: function(){
			ArticleApp.List.Controller.listArticles();
		},
		showArticle: function(id){
			ArticleApp.Show.Controller.showArticle(id);
		}
	};

	ArticleManager.on("article:show", function(id){
		ArticleManager.navigate("articles/" + id);
		API.showArticle(id);
	});
	
	ArticleManager.on("articles:list", function(){
		ArticleManager.navigate("articles");
		API.listArticles();
	});

	ArticleManager.addInitializer(function(){
		new ArticleApp.Router({
			controller: API
		});
	});

});