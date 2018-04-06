$(document).ready(function() { 
    
  $(".nav li").on("click", function () {
    $(".nav li").removeClass("active");
    $(this).addClass("active");
    });

  });


// var menuHighlight = document.querySelectorAll("nav li");

// for (var i = 0; i < menuHighlight.length; i++) {
//   menuHighlight[i].addEventListener("click", function () {
      
//       this.classList.add("active");
//     }
//   });
// }

//     else {
//     menuHighlight[i].classList.remove("active");
//   };
// });


// for (var i = 0; i < menuHighlight.length; i++) {
// 	menuHighlight[i].addEventListener("click", function(){
//     this.classList.toggle("active");
//     menuHighlight[i].classList.remove("active");
//   });

// BRUNA'S SOLUTION
// $("nav li").on("click", function () {
//   $("nav li").removeClass("active");
//   $(this).addClass("active");
// });




  // menuHighlight[i].addEventListener("click", function(){
  //   this.classList.add("active");
  // });

// for (var i = 0; i < menuHighlight.length; i++) {
//     menuHighlight[i].addEventListener("click", function(){
//       menuHighlight[i].classList.add("active");
//     });  

  // this.classList.add("active");


	// lis[i].addEventListener("mouseout", function (){
	// 	this.classList.remove("hovered");
	// });
	// lis[i].addEventListener("click", function (){
	// 	this.classList.toggle("done");
	// });	



// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").slideToggle();
//     });
// });