Todos = new Mongo.Collection('todos');

Router.configure({
    layoutTemplate: 'main'
});
Router.route('/register');

Router.route('/login');

Router.route('/', {
    name: 'home',
    template: 'home'
});

