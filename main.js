// nav

function functionToggle() {
  var x = document.getElementById("navMain");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// img
function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-opacity-off";
}

//  product quantity

const myInput = document.getElementById('myInput')
function stepper(btn){
  let id = btn.getAttribute('id');
  let min = myInput.getAttribute('min');
  let max = myInput.getAttribute('max');
  let step = myInput.getAnimations('step');
  let val = myInput.getAttribute('value');
  let calcStep = (id == 'inc') ? (step +1):(step * -1)
   let newValue = parseInt(val) + calcStep 
   if(newValue >= min && newValue <= max){
    myInput.setAttribute('value' ,newValue)
   }
}
// function inc(element) {
//   let el = document.querySelector(`[name="${element}"]`);
//   el.value = parseInt(el.value) + 1;
// }

// function dec(element) {
//   let el = document.querySelector(`[name="${element}"]`);
//   if (parseInt(el.value) > 0) {
//     el.value = parseInt(el.value) - 1;
//   }
// }
