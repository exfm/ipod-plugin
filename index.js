/**
 * This provides access to iPod Songs
 * In Cordova.plist/Plugins, add this mapping (key:iPodPlugin, value:iPodPlugin)
 */

(function(){


// constructor
function iPodPlugin(){
    console.log('iPodPlugin installed');
}

// get songs
iPodPlugin.prototype.getSongs = function(callback){
    cordovaRef.exec(callback, null, "iPodPlugin", "songs", []);
};


if(typeof module !== "undefined"){
    module.exports = iPodPlugin;
}
else{
    window.iPodPlugin = iPodPlugin;
}

}()); // end wrapper