NewsReader.Routers.Feeds = Backbone.Router.extend({
  
  routes: {
    "": "index",
    "feeds/:id": "feedShow",
  },
  
  index: function () {
    NewsReader.feeds.fetch();
    var indexView = new NewsReader.Views.FeedsIndex({
      collection: NewsReader.feeds
    });
    
    indexView.render();   
    $("body").html(indexView.$el);
  },
  
  feedShow: function (id) {
    NewsReader.feeds.fetch();
    
    var indexView = new NewsReader.Views.FeedsIndex({
      collection: NewsReader.feeds
    });
    
    indexView.render();
    $("body").html(indexView.$el);
  },
});
