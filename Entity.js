
ArticleManager.module("Entities", function(Entities, ArticleManager,
Backbone, Marionette, $, _){
  Entities.Article = Backbone.Model.extend({});
  Entities.ArticleCollection = Backbone.Collection.extend({
    model: Entities.Article,
    comparator: "firstName"
  });

  var articles;

  var initializeArticles = function(){
    articles = new Entities.ArticleCollection([
    { id: 1, firstName: "Alice", lastName: "Arten", phoneNumber: "555-0184" },
    { id: 2, firstName: "Bob", lastName: "Brigham", phoneNumber: "555-0163" },
    { id: 3, firstName: "Charlie", lastName: "Campbell", phoneNumber: "555-0129" }
    ]);
  };


var API = {
  getArticleEntities: function(){
    if(articles === undefined){
      initializeArticles(); 
    }
    return articles;
   }
};



  ArticleManager.reqres.setHandler("article:entities", function(){
    return API.getArticleEntities();
  });


});