angular.module('video-player')

  .controller('AppCtrl', function(youTube) {

    this.searchService = youTube;
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];

    this.searchResults = (input) => {
      this.videos = input;
      this.currentVideo = this.videos[0];
    };

    this.selectVideo = (video) => {
      this.currentVideo = video;
    };

    youTube.search('katamari damacy', this.searchResults);
  })

  .component('app', {
    controller: 'AppCtrl',

    // Assign controller to this component,
    templateUrl: 'src/templates/app.html'

  });
