var users = [
  "ESL_SC2",
  "OgamingSC2",
  "cretetion",
  "freecodecamp",
  "habathcx",
  "RobotCaleb",
  "noobs2ninjas",
  "asmongold",
];
var twitchArray = [];
for (i = 0; i < users.length; i++) {
  $.ajax({
    type: "GET",
    url: "https://wind-bow.glitch.me/twitch-api/streams/" + users[i],
    async: false,
    success: function(data) {
      if (data["stream"] === null) {
        twitchArray.push([users[i], "Offline", "http://twitch.tv/" + users[i]]);
      } else {
        twitchArray.push([
          users[i],
          "Online",
          "http://twitch.tv/" + users[i],
          data.stream.channel.status
        ]);
      }
    }
  });
  $.ajax({
    type: "GET",
    url: "https://wind-bow.glitch.me/twitch-api/users/" + users[i],
    async: false,
    success: function(data) {
      twitchArray[i].push(data.logo);
    }
  });
}
for (i = 0; i < twitchArray.length; i++) {
  if (twitchArray[i][1] === "Online") {
      var ellipse = "";
  if (twitchArray[i][3].length > 25) {
    ellipse = "...";
  };
    $("#twi-content").append(
      '<a href="' +
        twitchArray[i][2] +
        '" target="_blank" class="online"><div class="col-md-4 streamers userhover"><img src="' +
        twitchArray[i][twitchArray[i].length - 1] +
        '" class="img-responsive center-block"> <strong>' +
        twitchArray[i][0] +
        "</strong><br><span>" +
        twitchArray[i][1] +
        "</span> - <em>" +
        twitchArray[i][3].substring(0, 25) +
        ellipse +
        "</em></div></a>"
    );
  } else {
    $("#twi-content").append(
      '<a href="' +
        twitchArray[i][2] +
        '" target="_blank" class="offline"><div class="col-md-4 streamers userhover"><img src="' +
        twitchArray[i][twitchArray[i].length - 1] +
        '" class="img-responsive center-block"> <strong>' +
        twitchArray[i][0] +
        "</strong><br><span>" +
        twitchArray[i][1] +
        "</span></div></a>"
    );
  }
}

$('#onlinefilter').click(function() {
  $('.online').css('display','block');
  $('.offline').css('display','none');
});

$('#offlinefilter').click(function() {
  $('.online').css('display','none');
  $('.offline').css('display','block');
});

$('#resetfilter').click(function() {
  $('.online').css('display','block');
  $('.offline').css('display','block');
});