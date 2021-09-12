
$.ajax({
    dataType: "json",
    url: "https://random-d.uk/api/v2",
    success: function(results) {
      console.log(results["url"]);
      $("#avatarImg").on("click", function(event) {
            console.log(event);
            var $img = $("<img>")
                $("#avatarImg").attr("src",results["url"])
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
  
