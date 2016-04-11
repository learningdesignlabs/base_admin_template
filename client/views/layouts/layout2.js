import { Template } from 'meteor/templating';
import './layout2.html';

Template.layout2.onRendered(function(){
console.log('Layout2 rendered..');
    // Add special class for handel top navigation layout
    $('body').addClass('top-navigation');

      // SKIN OPTIONS
    // Uncomment this if you want to have different skin option:
    // Available skin: (skin-1 or skin-3, skin-2 deprecated, md-skin)
    $('body').addClass('md-skin');

    // FIXED-SIDEBAR
    // Uncomment this if you want to have fixed left navigation
    // $('body').addClass('fixed-sidebar');
    // $('.sidebar-collapse').slimScroll({
    //     height: '100%',
    //     railOpacity: 0.9
    // });

    // BOXED LAYOUT
    // Uncomment this if you want to have boxed layout
    //$('body').addClass('boxed-layout');

});

Template.layout2.onDestroyed(function(){
    // Remove special top navigation class
    $('body').removeClass('top-navigation');
});