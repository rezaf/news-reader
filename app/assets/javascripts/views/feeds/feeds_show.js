NewsReader.Views.FeedsShow = Backbone.View.extend({
  
  template: JST['feeds/show'],
  
  // initialize: function () {
  //   this.listenTo(this.collection, 'sync', this.render);
  // },
  
  render: function () {
    var renderedContent = this.template({
      feed: this.collection
    });
    
    this.$el.html(renderedContent);
    
    return this;
  }
});
