angular.module('video-player')
.component('videoList', {

  bindings: {
    videos: '<',
    onClick: '<'
  },

  // Add controller
  controller: function() {
    console.log(this); // Question: Why is this showing up but not this.videos?
  },

  templateUrl: 'src/templates/videoList.html'
  //template: "<span>Data= {{$ctrl.videos}}</span>"



});
