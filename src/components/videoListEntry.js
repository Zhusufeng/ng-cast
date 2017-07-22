angular.module('video-player')

// .controller('tempCtrl', function tempCtrl() {
//   debugger;
// })

.component('videoListEntry', {
  // TODO
  bindings: {
    video: '<'
  },

  templateUrl: 'src/templates/videoListEntry.html'

});
