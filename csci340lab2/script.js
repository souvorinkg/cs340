$( document ).ready(function() {
  console.log( "ready!" );
  $("#avatarImg").on("click", function(event) {
            console.log(event);
            var $img = $("<img>")
                .attr("src", "https://www.kasandbox.org/programming-images/animals/crocodiles.png")
                .width(100)
                .css("position", "absolute")
                .css("top", event.pageY + "px")
                .css("left", event.pageX + "px")
                .appendTo("body");
                $("#avatarImg").attr("src","https://www.kasandbox.org/programming-images/animals/crocodiles.png")
        });
});
  //https://www.boredapi.com/api/activity
  
