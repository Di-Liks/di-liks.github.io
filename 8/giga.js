// jshint esversion:6

function prov(){
  let otpravka1 = document.getElementById("otpravka1");
  let otpravka2 = document.getElementById("otpravka2");
  let popupName = document.getElementsByName("name");
  let popupEmail = document.getElementsByName("slap_replyto");
  let popupBio = document.getElementsByName("message");

  if(popupName[0].value !== "" && popupBio[0].value !=="" && validateEmail(popupEmail[0].value)){ 
    otpravka1.style.display = "block";
    otpravka2.style.display = "none";
  }
  else{
    otpravka1.style.display = "none";
    otpravka2.style.display = "block";
  }
}

$('.single-item').slick({
  infinite: true,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    }
  ]
});

$('.open-popup').click(function(e){ 
  otpravka3.style.display = "none";
  e.preventDefault();
  $('.popup-bg').fadeIn(600);
  $('html').addClass('no-slide');
  window.history.pushState({page: 1}, "title 1", "#support");  
});

$('.close-popup').click(function(){
  window.history.back();
});


let submit = document.querySelector("#submits");
let otpravka3 = document.getElementById("otpravka3");

$('.open-popup-2').click(function(e){
  if(submit.checked){
    e.preventDefault();
    $('.popup-bg').fadeOut(600);
    $('.popup-bg-2').fadeIn(600);
    $('html').addClass('no-slide');
    window.history.replaceState({page: 1}, "title 1", "#completed");
    prov();
  }
  else{
    otpravka3.style.display = "block";
  }
});

$('.close-popup-2').click(function(){
  window.history.back();
  otpravka3.style.display = "none";
});

window.addEventListener('hashchange', function () {
  if (location.hash === "#support") {
    $('.popup-bg').fadeIn(600);
    $('html').addClass('no-slide');
  }
  else if (location.hash !== "#support") {
    $('.popup-bg').fadeOut(600);
    $('html').removeClass('no-slide');
  }
  if (location.hash !== "#completed") {
    $('.popup-bg-2').fadeOut(600);
    $('html').removeClass('no-slide');
  }
  else if (location.hash === "#completed") {
    $('.popup-bg').fadeOut(600);
    $('.popup-bg-2').fadeIn(600);
    $('html').addClass('no-slide');
  }
});

popName.value = localStorage.getItem('popName');
popEmail.value = localStorage.getItem('popEmail');
popBio.value = localStorage.getItem('popBio');

popName.oninput = function() {
  localStorage.setItem('popName', popName.value);
};
popEmail.oninput = function() {
  localStorage.setItem('popEmail', popEmail.value);
};
popBio.oninput = function() {
  localStorage.setItem('popBio', popBio.value);
};


function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
    return re.test(String(email).toLowerCase());
  }