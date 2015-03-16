// Fix an all lower or all upper case MagIC portal directory 
Router.route('/magic/(.*)', function() { this.redirect('/MagIC/' + this.params[0]); });
Router.route('/MAGIC/(.*)', function() { this.redirect('/MagIC/' + this.params[0]); });

// Route to the MagIC home page
Router.route('/MagIC', {
	template: 'MagIC'
});
