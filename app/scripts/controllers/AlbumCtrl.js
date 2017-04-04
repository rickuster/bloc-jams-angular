(function() {
     function AlbumCtrl() {
        this.albumArtUrl = albumPicasso.albumArtUrl;
        this.title = 'The Colors';
        this.artist = 'Pablo Picassco';
        this.year = '1881';
        this.label = 'Cubism'; 
        this.albumData = [];
         for(i=0; i < 5; i++){
            this.albumData.push(angular.copy(albumPicasso));
         }
     }
 
     angular
         .module('blocJams')
         .controller('AlbumCtrl', AlbumCtrl);
 })();