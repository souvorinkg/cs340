
$.ajax({
    dataType: "json",
    url: "https://dog.ceo/api/breeds/image/random",
    success: function(message) {
      console.log(message["url"]);
      $("#avatarImg").on("click", function(event) {
            console.log(event);
            var $img = $("<img>")
                $("#avatarImg").attr("src",message["url"])
                $("#avatarImg").css("width","250")
      })
      //if (results["url"].endsWith(".mp4")) {
        //$('#avatarImg').attr("src", "images/blank.png");
      //} else {
        //$('#avatarImg').attr("src", results["url"]);
      //}
    },
    error: function(xhr,status,error) {
      console.log(error);
    console.log(results);
    }
});
  //https://www.boredapi.com/api/activity
  
