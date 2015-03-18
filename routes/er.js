// Home
Router.route('/', {
  name: 'er',
  action: function () {
    this.render('er');
    SEO.set({
      title: 'Home - Earthref.org'
    });
  }
});