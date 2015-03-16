// Remove the trailing slash from a directory request and redirect to the new URL.
Router.onBeforeAction(function() {
	
	// Extract the string immediately after the this.url request.
	// Router will have already removed the trailing slash in this.url, but not in this.originalUrl.
	var after_url = this.originalUrl.substring(this.originalUrl.lastIndexOf(this.url) + this.url.length);

	// If after_url begins with a slash, redirect to the URL without the slash, otherwise, do nothing.
	if (/^\//.test(after_url)) {
		this.redirect(this.originalUrl.replace(this.url + '/', this.url));
	} else {
		this.next();
	}

});


Router.route('/', {
	template: 'ER'
});