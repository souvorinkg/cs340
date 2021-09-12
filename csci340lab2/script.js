$( document ).ready(function() {
  console.log( "ready!" );
  $("#avatarImg").on("click", function(event) {
            console.log(event);
            var $img = $("<img>")
                $("#avatarImg").attr("src","https:\/\/randomfox.ca\/images\/104.jpg","link":"https:\/\/randomfox.ca\/?i=104")
        });
});
  //https://www.boredapi.com/api/activity
  
