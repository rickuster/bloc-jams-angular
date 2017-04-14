(function() {
    function SongPlayer(Fixtures) {
        var SongPlayer = {};
        //injected fixtures to collect album info
        var currentAlbum = Fixtures.getAlbum();
         /**
         * @desc Buzz object audio file
         * @type {Object}
         */
        var currentBuzzObject = null;
        
        //function stopsong
        //stops currently playing song and sets currentsong to null
        var stopSong = function() {
            currentBuzzObject.stop();
            SongPlayer.currentSong.playing = null;
        }
                
         /**
         * @function setSong
         * @desc Stops currently playing song and loads new audio file as currentBuzzObject
         * @param {Object} song
         */
         var setSong = function(song) {
            if (currentBuzzObject) {
                stopSong();
            }

            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });

            SongPlayer.currentSong = song;
         };
        
          //function that gets the index of a song
          var getSongIndex = function(song) {
                return currentAlbum.songs.indexOf(song);
           };
        
          SongPlayer.currentSong = null;
        
         /**
         * @function playSong
         * @desc Plays the current audio file loaded in currentBuzzObject
         */
        
        var playSong = function() {
            currentBuzzObject.play();
            SongPlayer.currentSong.playing = true;
        }
        
        /**
         * @function play
         * @desc Play current or new song
         * @param {Object} song
         */
        
        SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;
            if (SongPlayer.currentSong !== song) {
             setSong(song);   
             playSong();
            } 
            else if (SongPlayer.currentSong === song) {
                 if (currentBuzzObject.isPaused()) {
                     playSong();
                 }
            }
        };
        
         /**
         * @function pause
         * @desc Pause current song
         * @param {Object} song
         */
        
         SongPlayer.pause = function(song) {
             song = song || SongPlayer.currentSong;
             currentBuzzObject.pause();
             song.playing = false;
         };
        
        //function to go to previous song
        SongPlayer.previous = function() {
             var currentSongIndex = getSongIndex(SongPlayer.currentSong);
             currentSongIndex--;
            
            //if already at first song, stop currently playing stop and set currently playing to first song
             if (currentSongIndex < 0) {
                 stopSong();
             }
             else {
                 var song = currentAlbum.songs[currentSongIndex];
                 setSong(song);
                 playSong(song);
             }
        };
        
        //function to go to next song
        SongPlayer.next = function() {
             var currentSongIndex = getSongIndex(SongPlayer.currentSong);
             currentSongIndex++;
            
            //if already at last song, stop currently playing stop and set currently playing to first song
             if (currentSongIndex > currentAlbum.songs.length-1) {
                 stopSong();
             }
             else {
                 var song = currentAlbum.songs[currentSongIndex];
                 setSong(song);
                 playSong(song);
             }
        };
        
    
    return SongPlayer;
}
    
    angular
        .module('blocJams')
        .factory('SongPlayer', ['Fixtures', SongPlayer]);
})();