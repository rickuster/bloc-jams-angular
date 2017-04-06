(function() {
     function AlbumCtrl() {
        this.albumData = albumPicasso;
        this.albumArtUrl = albumPicasso.albumArtUrl;
        this.title = albumPicasso.title;
        this.artist = albumPicasso.artist;
        this.year = albumPicasso.year;
        this.label = albumPicasso.label;
        
     }
 
     angular
         .module('blocJams')
         .controller('AlbumCtrl', AlbumCtrl);
 })();