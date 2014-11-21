NewsReader.Routers.Feeds = Backbone.Router.extend({
  
  routes: {
    "": "index",
    "feeds/:id": "show",
  },
  
  index: function () {
    NewsReader.feeds.fetch();
    var indexView = new NewsReader.Views.FeedsIndex({
      collection: NewsReader.feeds
    });
    
    indexView.render();
    
    $("body").html(indexView.$el);
    
  },

  // show: function (id) {
  //
  // }
});
