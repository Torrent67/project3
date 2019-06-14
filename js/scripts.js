$(document).ready(function(){

  $("form#conV").submit(function(event){
  var userInput = $("input#number").val();

  var for3 = "I'm sorry, Dave. I'm afraid I can't do that."
  var for2 = "Boop"
  var for1 = "Beep"
  var ary = [];
  var spt = [];


  for( var i = 0; i <= userInput; i++){
    ary.push(i);
  }
  for(var i = 0; i < ary.length; i++){
    if (ary[i].length > 1){
    spt = ary[i].split('');
    }
    if(spt.indexOf('1') >=0 && spt.indexOf('2') <0 && spt.indexOf('3')){
      ary.splice(i,1,for1);
    }
  }
  alert(spt);
  event.preventDefault();
});
});
