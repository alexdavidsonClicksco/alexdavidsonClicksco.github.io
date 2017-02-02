TrelloPowerUp.initialize({
  'board-buttons': function(t, options){
    return [{
    icon: './images/button-pic.jpg',
    text: 'My Button',
    callback: function(t){
      $(document).ready(function(){
              $(".open-card-composer js-open-card-composer").remove();
    }}];
  }
});
