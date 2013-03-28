// Prevents the default action of an anchor when clicked.  
// Copyright (C) 2013 Qloo Inc., Michael Diolosa <michael.diolosa@gmail.com>  
// License: MIT

/*global angular:true, browser: true */

(function () {
  'use strict';

  // Fix issue where clicks on links in angular templates do not allow for the
  // cancellation of a link's default action.
  angular.module('prevent-default', []).directive('preventDefault', function () {
    return function (scope, element, attrs) {
      element.bind('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
      });
    };
  });
}());