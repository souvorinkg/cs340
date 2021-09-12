$( document ).ready(function() {
  console.log( "ready!" );
  $("#avatarImg").on("click", function(event) {
            console.log(event);
            
            var $img = $("<img>")
                $("#avatarImg").attr("src","https:\/\/randomfox.ca\/?i=113")
        });
});
  //https://www.boredapi.com/api/activity
  
