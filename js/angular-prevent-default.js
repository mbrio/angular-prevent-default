// Prevents the default action of an anchor when clicked.  
// Copyright (C) 2013 Qloo Inc., Michael Diolosa <michael.diolosa@gmail.com>  
// License: MIT

/*global angular:true, browser: true */

(function () {
  'use strict';

  // prevent-default
  // ===============
  angular.module('prevent-default', [])

  // Properties
  // ----------
  // Version
  .constant('version', '1.0.3')

  // Directives
  // ------------------------
  // Fix issue where clicks on links in angular templates do not allow for the
  // cancellation of a link's default action.
  .directive('preventDefault', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.bind('click', function (event) {
          // I assume due to a bug in AngularJS, we have to call both
          // `preventDefault` and `stopPropagation` for the default link action
          // to be cancelled.
          event.preventDefault();
          event.stopPropagation();
        });
      }
    };
  });
}());