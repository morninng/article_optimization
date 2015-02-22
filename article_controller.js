ArticleManager.module("ArticleApp.Show", function(Show, ArticleManager,
	Backbone, Marionette, $, _){
		Show.Controller = {
			showArticle: function(id){

				var articles = ArticleManager.request("article:entities");
				var model = articles.get(id);
				var articleView = new Show.Article({
					model: model
				});
				ArticleManager.mainRegion.show(articleView);
			}
		}
	}
);
