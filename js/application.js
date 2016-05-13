var app = angular.module('app', ['rzModule'])

app.controller('MainController', function($scope) {
    $scope.page = {
      title: 'My Music',
      subtitle: 'Adam\'s personal collection'
    };
    $scope.songs = [
      {
        name: 'Home',
        artist: 'Madeon',
        album: 'Adventure',
        length: '5:23',
        tokens: ['Adventure Album', 'Madeon Discog']
      },
      {
        name: 'Icarus',
        artist: 'Madeon',
        album: 'Adventure',
        length: '5:23',
        tokens: ['Adventure Album', 'Madeon Discog']
      },
      {
        name: 'You\'re On',
        artist: 'Madeon',
        album: 'Adventure',
        length: '5:23',
        tokens: ['Adventure Album', 'Madeon Discog']
      },
      {
        name: 'Finale',
        artist: 'Madeon',
        album: 'Adventure',
        length: '5:23',
        tokens: ['Adventure Album', 'Madeon Discog']
      },

    ]
    $scope.to_sentence = function(arr){
      if (arr.length < 2) {
        return arr.join('')
      } else {
        return arr.slice(0, arr.length - 1).join(', ') + ", and " + arr.slice(-1);
      }
    };
    $scope.playlists = [
      { name: 'Party' },
      { name: 'Workout' },
      { name: 'Favorite Soundtracks' },
      { name: 'Focus / Study' }
    ]
    $scope.genres = [
      { name: 'Alternative' },
      { name: 'Rock' },
      { name: 'Classical' },
      { name: 'Classical' },
      { name: 'Metal' },
      { name: 'Contemporary' },
      { name: 'Dance' },
      { name: 'Easy listening' },
      { name: 'Folk music' },
      { name: 'Instrumental' },
      { name: 'Theatrical' }
    ]
    $scope.songSlider = {
      value: 0,
      options: {
        floor: 0,
        ceil: 100,
        hideLimitLabels: true,
        hidePointerLabels: true,
        showSelectionBar: true
      }
    };
    $scope.volSlider = {
      value: 80,
      options: {
        floor: 0,
        ceil: 100,
        hideLimitLabels: true,
        hidePointerLabels: true,
        showSelectionBar: true
      }
    };
})