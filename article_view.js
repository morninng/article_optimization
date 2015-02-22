ArticleManager.module("ArticleApp.Show", function(Show, ArticleManager,
	Backbone, Marionette, $, _){
	Show.Contact = Marionette.ItemView.extend({
		template: "#article-view"
	});
});