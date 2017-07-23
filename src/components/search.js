angular.module('video-player')

  .controller('SearchCtrl', function () {
    this.handleClick = () => {
      this.service.search(this.input, (data) => {
        this.result(data);
      });
    };
  })

  .component('search', {
    controller: 'SearchCtrl',

    bindings: {
      result: '<',
      service: '<'
    },

    templateUrl: 'src/templates/search.html'
  });
