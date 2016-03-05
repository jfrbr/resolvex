Router.configure({
	layoutTemplate: 'maintemplate'
});

Router.route('/', function(){
	this.render(null,{
			to:'header' //TODO: consertar isso, pagina esta voltando com navbar
	}),
	this.render('welcomepage',{
		to: 'content'
	}),
	this.render(null,{
		to: 'footer'
	})
});

Router.route('/home', function(){
	this.render('header',{
		to: 'header'
	}),
	this.render('home',{
		to: 'content'
	}),
	this.render('footer',{
		to: 'footer'
	})
});
Router.route('/questoes', function(){
	this.render('header',{
		to: 'header'
	}),
	this.render('questions',{
		to: 'content'
	}),
	this.render('footer',{
		to: 'footer'
	})
});
Router.route('/profile', function(){
	this.render('header',{
		to: 'header'
	}),
	this.render('profile',{
		to: 'content'
	}),
	this.render('footer',{
		to: 'footer'
	})
});
Router.route('/inserir_questoes', function(){
	this.render('header',{
		to: 'header'
	}),
	this.render('addquestion',{
		to: 'content'
	}),
	this.render('footer',{
		to: 'footer'
	})
});

Router.route('/provas_feitas', function(){
	this.render('header',{
		to: 'header'
	}),
	this.render('provasfeitas',{
		to: 'content'
	}),
	this.render('footer',{
		to: 'footer'
	})
});
Router.route('/provas/:_id',function(){
	this.render('header',{
		to: 'header'
	}),
	this.render('prova',{
		to:'content'
	}),
	this.render('footer',{
		to: 'footer'
	})
});
/*
Router.route('/addquestion', function(){
	this.render('navbar',{
		to: 'navbar'
	}),
	this.render('addquestion',{
		to: 'rightside'
	}),
	this.render('footer',{
		to: 'footer'
	})
});

Router.route('/provasfeitas', function(){
	this.render('navbar',{
		to: 'navbar'
	}),
	this.render('provasfeitas',{
		to: 'rightside'
	}),
	this.render('footer',{
		to: 'footer'
	})
});

Router.route('/questions', function(){
	this.render('navbar',{
		to: 'navbar'
	}),
	this.render('questions',{
		to: 'rightside'
	}),
	this.render('footer',{
		to: 'footer'
	})
});
*/
