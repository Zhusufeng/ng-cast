angular.module('video-player')


.component('app', {
  controller: function() {
    this.selectVideo = function (video) {
      this.currentVideo = video;
      console.log('currentVideo changed at selectVideo: ', this.currentVideo);
    };

    this.searchResults = function () {

    };

    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
  },

  // Assign controller to this component,
  templateUrl: 'src/templates/app.html'



});
