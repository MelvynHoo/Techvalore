console.log('rotate');
var IsCalledOnce = false;

function showIt() {
  document.getElementById("winnings").style.visibility = "visible";
}
setTimeout("showIt()", 2700); 
function rotateMe() {
 if(IsCalledOnce)
  {
  //do something
    document.getElementById("demo").innerHTML = 'No more spins left, try again tomorrow.';
  }else
  {
   //do something
  console.log('rotating');
  var element = document.getElementById('rotateMe');
  document.getElementById("demo").innerHTML = '0 Spins Left';
  document.getElementById("winnings").innerHTML = 'You won 3 Coins!';
  element.classList.add("rotateMe");
  }
  IsCalledOnce = true;
  }

document.getElementById("rotateButton").addEventListener("click", rotateMe);