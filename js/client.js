TrelloPowerUp.initialize({
  'board-buttons': function(t, options){
    return [{
    icon: './images/button-pic.jpg',
    text: 'My Button',
    callback: function(t){
      var elem = document.getElementById("header");
      elem.parentNode.removeChild(elem);
    }}];
  }
});
