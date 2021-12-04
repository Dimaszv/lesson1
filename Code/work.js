
$(document).ready(function(){
    $('.logo__inner-list').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        preArrow: '<a href="#" class="test">Previous =></a>',
        nextArrow: '<a href="#" class="test">Next =<</a>',
        cssEase: 'linear'
    });
  });


  // modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector(".hero__inner-btn");

// Get the <span> element that closes the modal
var span = document.querySelector("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    console.log.apply(event);
    console.log(event.target);
    if (event.target == modal) {
    modal.style.display = "none";
  }
}




// back to top Button
var backToTopBtn = document.getElementById('backToTop');

window.onscrool = function(event) {
    console.log('working');
    if (documentElement.scroolTop > 200 || document.body.scroolTop > 200){
        backToTopBtn.style.display = 'block';
    } else {
    backToTopBtn.style.display = 'none';
    }
}
backToTopBtn.onclick =function(event){
    
}
