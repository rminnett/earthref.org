Router.route('trailing_slash', { 
	path: '/(.*)',
	action: function() {
		var l = window.location;
		if (/(^|\/)[^.]*?[^.\/]$/.test(l.pathname)) {
			if ( this.response.writeHead ) {
				this.response.writeHead(302, {'Location': l.origin + l.pathname + '/' + l.search + l.hash});
				this.response.end();
			} else {
				window.history.pushState(window.history.state, '', l.origin + l.pathname + '/' + l.search + l.hash);
				this.next();
			}
		}
	}
});

Router.route('test', function() {
	this.render('/test');
});

Router.route('ER', function() {
	this.render('ER');
});