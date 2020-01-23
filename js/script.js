let songs = ["Take me Road","Old Town Home",];
$(".nameButton").click(function() {
  songs.push($(".songName").val());
  console.log(songs);
  $(".papaya").append(songs[0] + "<br>" + songs[1] + "<br>" + songs[2] + "<br>" + songs[3] + "<br>");
});
