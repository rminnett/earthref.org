Router.route('/magic/:url_part', function() { this.redirect('/MagIC/:url_part'); });
Router.route('/MAGIC/:url_part', function() { this.redirect('/MagIC/:url_part'); });
Router.route('/MagIC/', function() {
	this.render('magic');
});
