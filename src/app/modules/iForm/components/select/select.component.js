/**
 * Created by bionaut on 14/06/15.
 */

(function(){
  'use strict';
  angular.module('select.component', [])
    .directive('iSelect', iSelect);

  function iSelect() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/modules/iForm/components/select/select.template.html',
      scope:{
        data: '=',
        returnAs: '@',
        viewAs: '@',
        searchable: '@?',
        placeholder: '@?',
        size: '@?',
        // TODO sipka off/on
        template: '@?',
        default: '@?',
        model: '='
      },
      controller: iSelectController,
      controllerAs: 'iSelect'
    };

    iSelectController.$inject = ['$scope'];
    function iSelectController($scope) {

      var iSelect = this;
      var s = $scope;

      iSelect.select = handleSelect;

      dataTypeConverse(s);

      if (s.default) {
        if (s.default >= 0 && s.default <= s.data.length-1)
          iSelect.selected = handleSelect(s.default);
      }

      function handleSelect(index) {
        iSelect.selected = s.data[index];
        s.model = iSelect.selected[s.returnAs];
        iSelect.searchQuery = iSelect.selected[s.viewAs];
        iSelect.listToggle = false;
      }

      function dataTypeConverse(s) {
        if (typeof s.data == 'object') {
          var objectToArray = [];
          for (var key in s.data) {
            s.data[key]['iKey'] = key;
            objectToArray.push(s.data[key]);
          }
          s.data = objectToArray;
        }
      }
    }

    return directive;

  }

})();
