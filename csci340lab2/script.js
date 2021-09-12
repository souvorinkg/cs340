
$.ajax({
    dataType: "json",
    url: "https://random.dog/woof.json",
    success: function(results) {
      console.log(results["url"]);
      if (results["url"].endsWith(".mp4")) {
        $('#dog').attr("src", "images/blank.png");
      } else {
        $('#dog').attr("src", results["url"]);
      }
    },
    error: function(xhr,status,error) {
      console.log(error);
    console.log(results);
});
$("#avatarImg").on("click", function(event) {
            console.log(event);
            var $img = $("<img>")
                $("#avatarImg").attr("src","https:\/\/randomfox.ca\/images\/113.jpg")
});
  //https://www.boredapi.com/api/activity
  
