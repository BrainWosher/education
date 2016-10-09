(function() {
var delay = 100,
    i = 0,
    doc = document,
    startTimer = function(pixels){
    //console.log('функция startTimer сработала');
    var elem = doc.getElementById('circle'),
        bottom = elem.offsetTop;
        console.log(bottom);

      if (i <10 ){

       //console.log('функция setTimeout '+(i+1)+' сработала ')
      setTimeout(startTimer, delay);
      elem.style.top = bottom + 20 + 'px';
      }
      i++;


  };
  var timer = setTimeout( startTimer, delay );
  //alert("Сначала сработаю я, затем таймер!");
  //clearTimeout(timer);
})();
