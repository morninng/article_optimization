ArticleManager.module("ArticleApp.List", function(List, ArticleManager,
Backbone, Marionette, $, _){

  List.Controller = {
    listArticles: function(){
    var articles = ArticleManager.request("article:entities");
    var articlesListView = new List.Articles({
      collection: articles
    });


    articlesListView.on("childview:article:show", function(childView, model){
      ArticleManager.trigger("article:show", model.get("id"));
    });

  	articlesListView.on("childview:article:delete", function(childView, model){
  		articles.remove(model);
  	});
	
    ArticleManager.mainRegion.show(articlesListView);
    }
  }

});

