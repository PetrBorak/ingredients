(function(){
  'use strict';
  angular.module('angular-ingredients.js')
    .controller('sampleCtrl', sampleCtrl);

  function sampleCtrl() {
    var ctrl = this;

    ctrl.handleSubmit = function () {
      alert('submited')
    };

    ctrl.sampleData = [
      {
        text: 'some text here',
        value: 22
      },
      {
        text: 'another text',
        value: 11
      }
    ];
  }
})();
