(function() {
     //fixtures and songplayer are dependencies
     //fixtures contains the song album information
     //songplayer contains the player bar information
     function AlbumCtrl(Fixtures, SongPlayer) {
         this.albumData = Fixtures.getAlbum();
         this.songPlayer = SongPlayer;
     }
 
     angular
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
 })();