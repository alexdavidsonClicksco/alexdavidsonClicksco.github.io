TrelloPowerUp.initialize({
  'board-buttons': function(t, options){
    return [{
    icon: './images/button-pic.jpg',
    text: 'My Button',
    callback: function(t){
      alert("Hello world");
    }}];
  }
});
