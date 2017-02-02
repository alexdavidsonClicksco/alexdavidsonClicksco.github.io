TrelloPowerUp.initialize({
  'board-buttons': function(t, options){
    return [{
    icon: './images/button-pic.jpg',
    text: 'My Button',
    callback: function(t){
      alert("I am an alert box!");
    }}];
  },
  'show-settings': function(t, options){
    return t.popup({
      title: 'Settings',
      url: './settings.html',
      height: 184
    });
  }
});
