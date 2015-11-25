Todos = new Mongo.Collection('todos');

Router.route('/register');

Router.route('/login');

Router.route('/', {
    template: 'home'
});

