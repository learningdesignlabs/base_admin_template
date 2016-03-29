Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound'

});

//
// Example pages routes
//

Router.route('/pageOne', function () {
    this.render('pageOne');
});

Router.route('/pageTwo', function () {
    this.render('pageTwo');
});

Router.route('/projects', function () {
    this.render('projects');
    this.layout('layout2');
});

Router.route('/', function () {
    Router.go('projects');
});

Router.route('/nestableList', function () {
    this.render('nestableList');
    this.layout('layout2');
});




