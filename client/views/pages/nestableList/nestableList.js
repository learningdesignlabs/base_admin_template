import { Template } from 'meteor/templating';
import './nestableList.html';

expandItem = function(listItem)
{
  const collapsedClass = 'dd-collapsed';
  const listNodeName = 'ol';

  listItem.removeClass(collapsedClass);
  listItem.children('[data-action="expand"]').hide();
  listItem.children('[data-action="collapse"]').show();
  listItem.children(listNodeName).show();
}

Template.nestableList.onRendered(function nestableListOnCreated() {

  console.log("I've rendered!");
//  console.log("About to try to collapse all");

  // Activate Nestable for list 2
  $('#nestable2').nestable({
        group: 0
    });

  // Display "current exercises" upon rendering page
  $('.dd').nestable('collapseAll');

  var unitToExpand = $('[data-id="1"]');
  expandItem(unitToExpand);

});


