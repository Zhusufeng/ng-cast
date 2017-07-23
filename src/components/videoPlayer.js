angular.module('video-player')

.controller('VideoPlayerCtrl', function() {
  //debugger;
  this.videoUpdated = () => {
    return this.video ? `https://www.youtube.com/embed/${this.video.id.videoId}` : '';
  };

})

.component('videoPlayer', {
  // TODO
  controller: 'VideoPlayerCtrl',

  bindings: {
    video: '<'
  },

  templateUrl: 'src/templates/videoPlayer.html'
});
