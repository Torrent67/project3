$(document).ready(function(){

  $("form#conV").submit(function(event){
  var userInput = $("input#number").val();

  var for3 = "I'm sorry, Dave. I'm afraid I can't do that.";
  var for2 = "Boop";
  var for1 = "Beep";
  var ary = [];
  var spt = [];


  for( var i = 0; i <= userInput; i++){
    ary.push(i);
    }
  for(var i = 0; i < ary.length; i++){
    if (i > 9 ) {
    spt = ary[i].toString().split('');
  } else {
  }
    if(spt.indexOf('1') >=0 && spt.indexOf('2') <0 &&  spt.indexOf('3') <0){
      ary.splice(i,1,for1);
    } else if (spt.indexOf('2') >=0 && spt.indexOf('3') <0){
      ary.splice(i,1,for2);
    } else if (spt.indexOf('3') >=0){
      ary.splice(i,1,for3);
  }
}
  alert(ary);
  event.preventDefault();
});
});
