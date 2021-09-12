$( document ).ready(function() {
  console.log( "ready!" );
  $("#avatarImg").on("click", function(event) {
            console.log(event);
            var $img = $("<img>")
                $("#avatarImg").attr("src","https://www.kasandbox.org/programming-images/animals/crocodiles.png")
        });
});
  //https://www.boredapi.com/api/activity
  
