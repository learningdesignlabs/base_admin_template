import { Template } from 'meteor/templating';
import './top-navigation.html';

Template.topNavigation.events({
    // Toggle right sidebar
    'click .right-sidebar-toggle': function(){
        $('#right-sidebar').toggleClass('sidebar-open');
    }
});