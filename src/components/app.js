angular.module('video-player')

.controller('AppCtrl', function() {
  this.videos = window.exampleVideoData;
  this.currentVideo = this.videos[0];

  this.searchResults = () => {

  };

  this.selectVideo = (video) => {
    console.log('Here is the video input: ', video);
    console.log('Here is currentVideo: ', this.currentVideo);
    this.currentVideo = video;
    console.log('currentVideo changed at selectVideo: ', this.currentVideo);
  };
})

.component('app', {
  controller: 'AppCtrl',

  // Assign controller to this component,
  templateUrl: 'src/templates/app.html'

});
