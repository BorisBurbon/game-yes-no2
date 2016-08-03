(function() {
    'use strict';

    angular.module('chatApp')
    .directive('chatBox', function() {
        return {
            restrict: 'E',
            template: '<textarea class="form-control" ng-disable="true" ng-model="messageLog"></textarea>',
            controller: function($scope, $element) {
                $scope.$watch('messageLog', function() {
                  var textArea = $element[0].children[0];
                  textArea.scrollTop = textArea.scrollHeight;
                });
            }
        };
    });

}());
