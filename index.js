/**
 * This provides access to iPod Songs
 * In Cordova.plist/Plugins, add this mapping (key:iPodPlugin, value:iPodPlugin)
 */

(function(){

var cordovaRef = window.PhoneGap || window.Cordova || window.cordova;

// constructor
function IPodPlugin(){
    console.log('IPodPlugin installed');
}


//It is required to call the update method at least once, on app start. 
//It will return a JS object with an event name. There are two possible events: libraryupdating and librarychanged. 
//The libraryupdating event means the iOS device is currently syncing with iTunes. 
//This should never happen on app start. The librarychanged event means syncing is done. 
//This event will have an additional field, count, with the number of songs in the library. 
//This can be caused with the getShuffledSongs call so you don't run off the end of the library.

IPodPlugin.prototype.update = function(callback) {
    cordovaRef.exec(callback, null, 'iPodPlugin', 'update', []);
};

// get a list of shuffled songs
IPodPlugin.prototype.getShuffledSongs = function(callback, start, offset) {
    cordovaRef.exec(callback, null, 'iPodPlugin', 'songs', [start, offset]);
};

// The getArtwork method will return a complete base64 encoded image string
// ready to insert into a src attribute of an img tag.
IPodPlugin.prototype.getArtwork = function(callback, songId, width, height) {
    cordovaRef.exec(callback, null, 'iPodPlugin', 'artwork', [songId, width, height]);
};


if(typeof module !== "undefined"){
    module.exports = IPodPlugin;
}
else{
    window.IPodPlugin = IPodPlugin;
}

}()); // end wrapper