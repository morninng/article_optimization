ArticleManager.module("ArticleApp.List", function(List, ArticleManager,
Backbone, Marionette, $, _){

	List.Article = Marionette.ItemView.extend({
		tagName: "tr",
		template: "#article-list-item",

		events: {
			"click": "highlightName",
			"click td a.js-show": "showClicked",
			"click button": "deleteClicked"
		},
		highlightName: function(e){
			e.preventDefault();
			this.$el.toggleClass("warning");
		},
		deleteClicked: function(e){
			e.stopPropagation();
			alert("delete button was clicked");
			this.trigger("article:delete", this.model);
			// this.model.collection.remove(this.model);
		},
		showClicked: function(e){
			e.preventDefault();
			e.stopPropagation();
			this.trigger("article:show", this.model);
		}
	});

	List.Articles = Marionette.CompositeView.extend({
		tagName: "table",
		className: "table table-hover",
		template: "#article-list",
		childView: List.Article,
		childViewContainer: "tbody",

		onChildviewArticleDelete: function(){
			this.$el.fadeOut(1000, function(){
				$(this).fadeIn(1000);
			});
		}


	});
});

