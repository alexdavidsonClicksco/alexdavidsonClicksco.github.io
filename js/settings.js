/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

var addSelector = document.getElementById('add');
var vegetableSelector = document.getElementById('vegetable');

t.render(function(){
  return Promise.all([
    t.get('board', 'shared', 'add'),
    t.get('board', 'private', 'vegetable')
  ])
  .spread(function(savedAdd, savedVegetable){
    if(savedAdd && /[a-z]+/.test(savedAdd)){
      addSelector.value = savedAdd;
    }
    if(savedVegetable && /[a-z]+/.test(savedVegetable)){
      vegetableSelector.value = savedVegetable;
    }
  })
  .then(function(){
    t.sizeTo('#content')
    .done();
  })
});

document.getElementById('save').addEventListener('click', function(){
  return t.set('board', 'private', 'vegetable', vegetableSelector.value)
  .then(function(){
    return t.set('board', 'shared', 'add', addSelector.value);
  })
  .then(function(){
    t.closePopup();
  })
})
