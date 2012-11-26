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

// get songs
IPodPlugin.prototype.getSongs = function(callback){
    cordovaRef.exec(callback, null, "iPodPlugin", "songs", []);
};


if(typeof module !== "undefined"){
    module.exports = IPodPlugin;
}
else{
    window.IPodPlugin = IPodPlugin;
}

}()); // end wrapper