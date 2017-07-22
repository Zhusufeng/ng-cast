angular.module('video-player', [])


.component('app', {
  controller: function() {
    this.videosData = window.exampleVideoData;
  },

  // Assign controller to this component,
  templateUrl: 'src/templates/app.html'



});
