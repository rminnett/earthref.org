// Home
Router.route('/', {
  name: 'er',
  action: function () {
    this.render('er');
    this.render('er.title', {
      to: 'title'
    });
    SEO.set({
      title: 'Home - Earthref.org'
    });
  },
  data: {
    portal: {
      name: 'er',
      letter: 'E',
      title: 'EarthRef.org',
      color: 'green'
    }
  }
});