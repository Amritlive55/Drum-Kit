    function noName(id){
      var x= document.getElementById(id);
      x.style.border="2px solid rgb(255, 162, 0)";
      setTimeout(function(){
       var x= document.getElementById(id);
      x.style.border="2px solid black";},200)
    }
    
    document.addEventListener('keydown',function(event){
    if (event.key === 'a' || event.key === 'A') {
      document.getElementById('id1').play();
     /*  var x= document.getElementById('mybtn');
     x.style.border="2px solid rgb(255, 162, 0)";
     setTimeout(function(){
      var x= document.getElementById('mybtn');
     x.style.border="2px solid black";},200)*/
     noName('mybtn1');
    }
  
  else if (event.key === 's' || event.key === 'S') {
    document.getElementById('id2').play();
    noName('mybtn2');
}
else if (event.key === 'd' || event.key === 'D') {
  document.getElementById('id3').play();
  noName('mybtn3');
}
else if (event.key === 'f' || event.key === 'F') {
  document.getElementById('id4').play();
  noName('mybtn4');
}
else if (event.key === 'g' || event.key === 'G') {
  document.getElementById('id5').play();
  noName('mybtn5');
}
else if (event.key === 'h' || event.key === 'H') {
  document.getElementById('id6').play();
  noName('mybtn6');
}
else if (event.key === 'j' || event.key === 'J') {
  document.getElementById('id7').play();
  noName('mybtn7');
}
else if (event.key === 'k' || event.key === 'K') {
  document.getElementById('id8').play();
  noName('mybtn8');
}
else if (event.key === 'l' || event.key === 'L') {
  document.getElementById('id9').play();
  noName('mybtn9');
}
});    
/*document.getElementById('id1').addEventListener('click', function() {
  var sound = document.getElementById('id1');
  sound.play();
});

      /*function playAudio1() {
        document.getElementById("id1").play();
      }
      function playAudio2() {
        document.getElementById("id2").play();
      }
      function playAudio3() {
        document.getElementById("id3").play();
      }
      function playAudio4() {
        document.getElementById("id4").play();
      }
      function playAudio5() {
        document.getElementById("id5").play();
      }
      function playAudio6() {
        document.getElementById("id6").play();
      }
      function playAudio7() {
        document.getElementById("id7").play();
      }
      function playAudio8() {
        document.getElementById("id8").play();
      }
      function playAudio9() {
        document.getElementById("id9").play();
      }*/
  
  