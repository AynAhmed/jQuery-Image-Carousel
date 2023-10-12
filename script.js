$(document).ready(function(){
 // Define an array of image URLs
 var images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
  ];

  var currentIndex = 0;

  // Function to update the displayed image
  function updateImage() {
    $("#carouselImage").fadeOut(function() {
      $(this).attr("src", images[currentIndex]).fadeIn();
    });
  }

  $("#nextButton").click(function() {
    currentIndex++;  
    if (currentIndex >= images.length) {
      currentIndex = 0;  
    }
    updateImage();  
  });


  $("#prevButton").click(function() {
    currentIndex--;  
    if (currentIndex < 0) {
      currentIndex = images.length - 1;  
    }
    updateImage();  // Update the displayed image
  });


})