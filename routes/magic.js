// MagIC
Router.route('/MagIC', {
  name: 'magic',
  action: function () {
    this.render('magic');
    this.render('magic.title', {
      to: 'title'
    });
    this.render('magic.submenu', {
      to: 'submenu'
    });
    SEO.set({
      title: 'MagIC - Earthref.org'
    });
  }
});

// MagIC Search
Router.route('/MagIC/search', {
  name: 'magic_search',
  action: function () {
    this.render('magic_search');
    SEO.set({
      title: 'MagIC Search Interface - Earthref.org'
    });
  }
});