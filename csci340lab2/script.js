$( document ).ready(function() {
  console.log( "ready!" );
  var $linkText = $("<text>")
                $linkText.html("https:\/\/randomfox.ca\/?i="+"88")
  $("#avatarImg").on("click", function(event) {
            console.log(event);
            
            var $img = $("<img>")
                $("#avatarImg").attr("src",$linkText)
        });
});
  //https://www.boredapi.com/api/activity
  
