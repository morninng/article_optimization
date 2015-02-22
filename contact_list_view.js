ContactManager.module("ContactsApp.List", function(List, ContactManager,
Backbone, Marionette, $, _){

	List.Contact = Marionette.ItemView.extend({
		tagName: "tr",
		template: "#contact-list-item",

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
			this.trigger("contact:delete", this.model);
			// this.model.collection.remove(this.model);
		},
		showClicked: function(e){
			e.preventDefault();
			e.stopPropagation();
			this.trigger("contact:show", this.model);
		}
	});

	List.Contacts = Marionette.CompositeView.extend({
		tagName: "table",
		className: "table table-hover",
		template: "#contact-list",
		childView: List.Contact,
		childViewContainer: "tbody",

		onChildviewContactDelete: function(){
			this.$el.fadeOut(1000, function(){
				$(this).fadeIn(1000);
			});
		}


	});
});
