Todos = new Mongo.Collection('todos');

Lists = new Meteor.Collection('lists');

Router.configure({
    layoutTemplate: 'main'
});
Router.route('/register');

Router.route('/login');

Router.route('/', {
    name: 'home',
    template: 'home'
});

Router.route('/list/:_id', {
    name: 'listPage',
    template: 'listPage',
    data: function(){
        var currentList = this.params._id;
        return Lists.findOne({_id: currentList});
    }
});
