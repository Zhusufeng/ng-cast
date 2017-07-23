angular.module('video-player')

  .controller('videoListCtrl', function () {


  })

  .component('videoList', {

    bindings: {
      videos: '<',
      onClick: '<'
    },

    templateUrl: 'src/templates/videoList.html'
    //template: "<span>Data= {{$ctrl.videos}}</span>"

  });
