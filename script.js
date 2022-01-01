console.log("...");
window.onfocus = function(){
    console.log("in");
}
window.onblur = function(){
    console.log("out");
}
document.onvisibilitychange = function() {
    console.log("Visibility of page has changed!");
};