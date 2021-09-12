$( document ).ready(function() {
  console.log( "ready!" );
  $("#avatarImg").on("click", function(event) {
            console.log(event);
            var $img = $("<img>")
                $("#avatarImg").attr("src","https://avatars.dicebear.com/api/:sprites/:seed.svg")
        });
});
  //https://www.boredapi.com/api/activity
  
