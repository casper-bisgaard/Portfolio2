function showMenu () {
  var idbigscreen = document.getElementById('idRight-menu')
  if (idbigscreen.className == "right-menu" ) {
    idbigscreen.className = "showRight-menu";
  } else {
    idbigscreen.className = "right-menu";
  }
}

var number = 0;
var audience = ["Chef", "Kollega", "Ven"];
console.log(audience);


function changeAudience() {
  if (number < 2 ) {
    number+=1
    console.log(number);
  } else {
    number = 0
  }
  document.getElementById('audience').innerHTML = audience[number];
  setTimeout(changeAudience, 1900 )
}
