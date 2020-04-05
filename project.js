function scrollToTravelBlogSection(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#travelBlogs").offset().top
    }, 2000);
}
function scrollToTravelImageSection(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#travelImages").offset().top
    }, 2000);
}
function scrollToAboutMeSection(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#aboutMe").offset().top
    }, 2000);
}
function scrollToHomeSection(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#imageSection").offset().top
    }, 2000);
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	var mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  $([document.documentElement, document.body]).animate({
        scrollTop: $("#imageSection").offset().top
    }, 2000);
}