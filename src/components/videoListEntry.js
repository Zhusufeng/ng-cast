angular.module('video-player')

// .controller('tempCtrl', function tempCtrl() {
//   debugger;
// })

.component('videoListEntry', {
  // TODO
  bindings: {
    video: '<',
    onClick: '<'
  },

  templateUrl: 'src/templates/videoListEntry.html'

});
