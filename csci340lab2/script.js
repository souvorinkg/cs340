$( document ).ready(function() {
  console.log( "ready!" );
  $("#avatarImg").on("click", function(event) {
            console.log(event);
            var $linkText = $("<text>")
                $linkText.html("https:\/\/randomfox.ca\/?i="+"88")
            var $img = $("<img>")
                $("#avatarImg").attr("src",linkText)
        });
});
  //https://www.boredapi.com/api/activity
  
