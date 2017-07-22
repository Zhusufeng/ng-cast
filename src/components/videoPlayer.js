angular.module('video-player')

.component('videoPlayer', {
  // TODO

  bindings: {
    video: '<'
  },

  controller: function($sce) {
    //debugger;
    this.$onInit = function () {
      this.videoUpdated = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + this.video.id.videoId);
      console.log('Video Player was initialized with video!');
    };

    this.$doCheck = function () {
      //debugger;
      console.log('Its triggered!');
      this.videoUpdated = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + this.video.id.videoId);
    };

  },

  templateUrl: 'src/templates/videoPlayer.html'
});
