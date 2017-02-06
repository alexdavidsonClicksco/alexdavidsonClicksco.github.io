var boardButtonCallBack = function(t){
  alert("hello world")
};

TrelloPowerUp.initialize({
  'board-buttons': function(t, options){
    return [{
    icon: './images/button-pic.jpg',
    text: 'My Button',
    callback: boardButtonCallBack
  }];
  },
  'show-settings': function(t, options){
    return t.popup({
      title: 'Settings',
      url: 'settings.html',
      height: 184
    });
  }
});
