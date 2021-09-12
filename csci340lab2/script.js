$.getJSON("https://randomfox.ca/floof/?ref=apilist.fun", function(data) {
  console.log(data);
  //var image = "https:\/\/randomfox.ca\/images\/" + data.image
  console.log(data.image)
});
$("#avatarImg").on("click", function(event) {
            console.log(event);
            var $img = $("<img>")
                $("#avatarImg").attr("src","https:\/\/randomfox.ca\/images\/113.jpg")
});
  //https://www.boredapi.com/api/activity
  
